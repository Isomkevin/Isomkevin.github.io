
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/content";
import { Link } from "react-router-dom";

const VentureCard = ({ title, description, logo, color, isComingSoon, url, id }: Project) => {
  return (
    <Card className="border-2 border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-4">
          <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-white font-bold`}>
            {logo}
          </div>
          <CardTitle className="font-grotesk">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isComingSoon ? "outline" : "default"} 
          className="w-full"
          asChild={!isComingSoon}
          disabled={isComingSoon}
        >
          {isComingSoon ? (
            "Coming Soon"
          ) : (
            <Link to={`/projects/${id}`}>
              Explore Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Ventures = () => {
  return (
    <section id="ventures" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Ventures</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Leading LESOM Dynamics, a venture studio powering innovative digital products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <VentureCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="group" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
