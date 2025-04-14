
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.id === slug);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 mt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Project not found</h1>
        <Button asChild>
          <Link to="/#ventures">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }

  // Sample technologies for each project (would come from data in real implementation)
  const technologies = [
    "React", "Node.js", "MongoDB", "Express", "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <div className="container mx-auto px-4 py-12 mt-16">
          <Link to="/#ventures" className="inline-flex items-center text-theme-blue mb-6 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg ${project.color} flex items-center justify-center text-white font-bold text-2xl`}>
                    {project.logo}
                  </div>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg mb-4">{project.description}</p>
                
                {/* Placeholder content for the full project description */}
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h2 className="text-2xl font-bold my-4">Key Features</h2>
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Feature one with detailed explanation of how it works</li>
                  <li className="mb-2">Feature two with impact assessment and user benefits</li>
                  <li className="mb-2">Feature three with technical implementation details</li>
                  <li className="mb-2">Feature four with market differentiation aspects</li>
                </ul>
                
                <h2 className="text-2xl font-bold my-4">Problem & Solution</h2>
                <p className="mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                
                <h2 className="text-2xl font-bold my-4">Impact & Results</h2>
                <p className="mb-4">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                  quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Status</h4>
                      <p className={`text-sm px-2.5 py-0.5 rounded inline-flex ${project.isComingSoon ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}`}>
                        {project.isComingSoon ? 'Coming Soon' : 'Active'}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="text-xs px-2.5 py-0.5 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {!project.isComingSoon && (
                <div className="space-y-4">
                  {project.url && (
                    <Button variant="default" className="w-full" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
