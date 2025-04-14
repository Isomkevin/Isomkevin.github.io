
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, GitFork, Code } from "lucide-react";
import { repositories } from "@/data/content";

const GitHub = () => {
  return (
    <section className="section-padding bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Featured repositories from my GitHub profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {repositories.map((repo) => (
            <Card key={repo.id} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code size={20} className="text-gray-500" />
                  <CardTitle className="text-xl font-mono font-medium">{repo.name}</CardTitle>
                </div>
                <CardDescription className="text-base line-clamp-2">{repo.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center mb-2">
                  <div className={`w-3 h-3 rounded-full ${repo.languageColor} mr-2`}></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{repo.language}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{repo.forks}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild={!!repo.url}
                >
                  {repo.url ? (
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">View</a>
                  ) : (
                    "View"
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://github.com/isomkevin" target="_blank" rel="noopener noreferrer">
              <span className="mr-2">Visit GitHub Profile</span>
              <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" 
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHub;
