
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/content";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.id === slug);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Blog post not found</h1>
        <Button asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <div className="container mx-auto px-4 py-12 mt-16">
          <Link to="/blog" className="inline-flex items-center text-theme-blue mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            </header>
            
            <div className="mb-8">
              {post.imageUrl ? (
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-64 md:h-96 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400 dark:text-gray-600">Featured Image</span>
                </div>
              )}
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-4">{post.excerpt}</p>
              
              {/* Placeholder content for the full blog post */}
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2 className="text-2xl font-bold my-4">Key Insights</h2>
              <p className="mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                <li className="mb-2">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                <li className="mb-2">Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt</li>
              </ul>
              <p className="mb-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
