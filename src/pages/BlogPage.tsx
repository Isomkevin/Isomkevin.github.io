
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/content";
import { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <section className="py-20 bg-gray-50 dark:bg-gray-900 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="inline-flex items-center text-theme-blue hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">All Articles</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Thoughts and insights on technology, entrepreneurship, and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full">
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-2">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400 dark:text-gray-600 text-sm">Featured Image</span>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="ghost" 
                      className="w-full group"
                      asChild
                    >
                      <Link to={`/blog/${post.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
