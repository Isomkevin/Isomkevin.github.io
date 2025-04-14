
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/content";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Articles</h2>
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

        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/blog">
              View All Articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
