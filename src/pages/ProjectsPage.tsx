
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/content";
import { useEffect } from "react";

const ProjectsPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <section className="section-padding mt-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="inline-flex items-center text-theme-blue hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Digital products that blend technology and impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="border-2 border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center text-white font-bold`}>
                        {project.logo}
                      </div>
                      <CardTitle className="font-grotesk">{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant={project.isComingSoon ? "outline" : "default"} 
                      className="w-full"
                      asChild={!project.isComingSoon}
                      disabled={project.isComingSoon}
                    >
                      {project.isComingSoon ? (
                        "Coming Soon"
                      ) : (
                        <Link to={`/projects/${project.id}`}>
                          Explore Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
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

export default ProjectsPage;
