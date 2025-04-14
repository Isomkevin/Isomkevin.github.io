
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/content";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-30">
        <div className="absolute top-[20%] left-[10%] w-48 h-48 rounded-full bg-theme-blue blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[15%] w-64 h-64 rounded-full bg-theme-purple blur-3xl"></div>
      </div>
      
      <div className="container mx-auto flex flex-col items-center text-center z-10">
        {/* Circle placeholder for profile image */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-theme-blue via-theme-purple to-theme-teal p-1 mb-8 animate-float">
          <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500">
            {/* Replace with your photo when available */}
            <span className="text-sm">Your Photo</span>
          </div>
        </div>

        {/* Name and roles */}
        <div className="space-y-4 mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {personalInfo.roles.join(' • ')}
          </h2>
        </div>

        {/* Personal motto */}
        <p className="text-xl md:text-2xl font-grotesk max-w-3xl mb-8 text-gradient">
          {personalInfo.motto}
        </p>
        
        {/* Location badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 mb-12">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          <span className="text-sm font-medium">{personalInfo.location}</span>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="bg-theme-blue hover:bg-theme-blue/90">
            Explore My Work
          </Button>
          <Button variant="outline">
            Contact Me
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-8 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 animate-bounce">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
