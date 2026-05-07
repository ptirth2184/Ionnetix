"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

type Row = { row: number; values: string[] };

export default function AdminPage() {
  const { status: sessionStatus } = useSession();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");
  const [statusIndex, setStatusIndex] = useState<number>(-1);
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type?: "success" | "error" | "info" }>>([]);

  function showToast(message: string, type: "success" | "error" | "info" = "info") {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
    setToasts(t => [...t, { id, message, type }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 4000);
  }

  async function checkAuthAndLoad(p = page, ps = pageSize, q = query) {
    setLoading(true);
    const params = new URLSearchParams();
    params.set("page", String(p));
    params.set("pageSize", String(ps));
    if (q) params.set("q", q);
    const res = await fetch(`/api/admin/submissions?${params.toString()}`);
    if (res.status === 401) {
      setLoggedIn(false);
      setLoading(false);
      return;
    }
    const data = await res.json();
    setHeaders(data.headers || []);
    setRows(data.rows || []);
    setTotal(data.total || 0);
    setPage(data.page || p);
    setPageSize(data.pageSize || ps);
    const si = (data.headers || []).findIndex((h: string) => h?.toLowerCase() === 'status');
    setStatusIndex(si);
    setLoggedIn(true);
    setLoading(false);
  }

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      checkAuthAndLoad();
      return;
    }
    if (sessionStatus === "unauthenticated") {
      setLoggedIn(false);
      setLoading(false);
    }
  }, [sessionStatus]);

  // Server-side search & pagination — use rows as returned by the API
  const filtered = rows;

  async function handleOAuthLogin() {
    await signIn("google", { callbackUrl: "/admin" });
  }

  async function updateStatus(rowNum: number, status: string) {
    const res = await fetch("/api/admin/submissions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "update", row: rowNum, status }) });
    if (res.ok) {
      await checkAuthAndLoad();
      showToast(`Row ${rowNum} marked ${status}`, 'success');
    } else {
      const j = await res.json();
      showToast(j?.error || "Failed", 'error');
    }
  }

  async function handleLogout() {
    await signOut({ callbackUrl: "/admin" });
    setLoggedIn(false);
    showToast('Signed out', 'info');
  }

  function exportCsv() {
    const cols = headers.length ? headers : ["Timestamp","Name","Email","Phone","Service","Message","Status"];
    const csvRows = [cols.join(",")];
    for (const r of rows) {
      csvRows.push(r.values.map(v => `"${(v||"").replace(/"/g,'""')}"`).join(","));
    }
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "submissions.csv"; a.click();
    URL.revokeObjectURL(url);
    showToast('CSV downloaded', 'success');
  }

  if (loading || sessionStatus === "loading") return <div className="p-6">Loading...</div>;

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Admin Login</h2>
          <p className="text-sm text-gray-600 mb-4">Sign in with the approved Google account to access submissions.</p>
          <button onClick={handleOAuthLogin} className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-md shadow-md transition font-medium">
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-bold text-lg text-blue-700">IONNETIX</div>
            <div className="text-sm text-gray-600">Admin</div>
          </div>
          <div>
            <button onClick={handleLogout} className="px-3 py-1 rounded-md bg-white border hover:bg-gray-50">Sign out</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="flex items-center gap-6 mb-6">
            <input placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 text-base" />
            <button onClick={() => { setPage(1); checkAuthAndLoad(1, pageSize, query); }} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-sm transition">Search</button>
            <button onClick={exportCsv} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 shadow-sm transition">Export CSV</button>
            <button onClick={() => checkAuthAndLoad()} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border hover:bg-gray-50 transition">Refresh</button>
          </div>

          <div className="overflow-auto border rounded-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-16 p-4 text-left">Row</th>
                  {headers.map((h, i) => (<th key={i} className="p-4 text-left">{h}</th>))}
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(r => (
                  <tr key={r.row} className="border-t hover:bg-gray-50">
                    <td className="text-base p-4">{r.row}</td>
                    {Array.from({ length: headers.length }).map((_, i) => {
                      const val = r.values[i] || "";
                      if (i === statusIndex) {
                        const v = String(val).toLowerCase();
                        const cls = v === 'read' ? 'bg-green-100 text-green-800' : v === 'deleted' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
                        return (<td key={i} className="text-base p-4"><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${cls}`}>{val || '—'}</span></td>);
                      }
                      return (<td key={i} className="text-base p-4">{val}</td>);
                    })}
                    <td className="p-4">
                      <button className="mr-3 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition shadow-sm" onClick={() => updateStatus(r.row, 'read')}>Mark Read</button>
                      <button className="mr-3 px-4 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition shadow-sm" onClick={() => updateStatus(r.row, 'unread')}>Mark Unread</button>
                      <button className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition shadow-sm" onClick={() => updateStatus(r.row, 'deleted')}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <button disabled={page <= 1} onClick={() => { const np = Math.max(1, page-1); setPage(np); checkAuthAndLoad(np, pageSize, query); }} className="px-3 py-2 rounded-md border bg-white hover:bg-gray-50">Prev</button>
              <span>Page {page} of {Math.max(1, Math.ceil(total / pageSize))}</span>
              <button disabled={page * pageSize >= total} onClick={() => { const np = page + 1; setPage(np); checkAuthAndLoad(np, pageSize, query); }} className="px-3 py-2 rounded-md border bg-white hover:bg-gray-50">Next</button>
            </div>

            <div className="flex items-center gap-3">
              <label>Rows:</label>
              <select value={pageSize} onChange={e => { const ps = Number(e.target.value); setPageSize(ps); setPage(1); checkAuthAndLoad(1, ps, query); }} className="p-2 border rounded-md">
                {[5,10,20,50].map(n => (<option key={n} value={n}>{n}</option>))}
              </select>
            </div>
          </div>
        </div>
      </main>
      {/* Toast container */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        {toasts.map(t => (
          <div key={t.id} className={`px-4 py-2 rounded-md shadow-md text-sm max-w-xs ${t.type==='success'?'bg-green-50 text-green-800':t.type==='error'?'bg-red-50 text-red-800':'bg-gray-50 text-gray-800'}`}>
            {t.message}
          </div>
        ))}
      </div>
    </div>
  );
}
