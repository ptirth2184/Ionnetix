import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const blogPosts = Array.from({ length: 9 }).map((_, i) => {
  const categories = ["Technology", "Software", "IT Tips", "AI Solutions", "Web Dev"];
  const category = categories[i % categories.length];
  
  return {
    id: i + 1,
    title: `The Future of ${category}: Trends to Watch in ${new Date().getFullYear()}`,
    excerpt: "Discover how emerging technologies are shaping the business landscape and what you need to know to stay ahead of the curve.",
    date: new Date(Date.now() - i * 86400000 * 5).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    category: category,
    image: `https://picsum.photos/seed/blog${i}/800/500`
  }
});

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 border-b border-primary/20">
        <div className="container px-4 md:px-8 max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Insights & <span className="text-secondary">Updates</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-primary-foreground/80"
          >
            Stay informed with the latest trends, news, and expert perspectives from our team.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.05 }}
              >
                <Card className="h-full flex flex-col border-border/50 hover:shadow-md transition-all group overflow-hidden">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="flex-1 pb-4">
                    <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                    <Link to={`/blog/${post.id}`} className="hover:text-secondary transition-colors">
                      <h3 className="text-xl font-bold line-clamp-2 leading-tight">{post.title}</h3>
                    </Link>
                  </CardHeader>
                  <CardContent className="pb-4 flex-1">
                    <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0 border-t border-border/10 mt-auto">
                    <Button variant="ghost" asChild className="p-0 h-auto font-semibold text-primary group-hover:text-secondary mt-4 hover:bg-transparent">
                      <Link to={`/blog/${post.id}`} className="flex items-center">
                        Read More 
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-2">
            <Button variant="outline" size="icon" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="default" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
