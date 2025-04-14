
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, personalInfo } from "@/data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to render the correct social icon based on the icon name from the data
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="h-6 w-6" />;
      case "Linkedin":
        return <Linkedin className="h-6 w-6" />;
      case "Mail":
        return <Mail className="h-6 w-6" />;
      default:
        return <Github className="h-6 w-6" />;
    }
  };

  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <a 
            href="#" 
            className="font-grotesk text-xl font-bold text-gray-900 dark:text-white flex items-center mb-6"
          >
            <span className="text-gradient">KI</span>
            <span className="ml-2">{personalInfo.name}</span>
          </a>
          
          <div className="flex items-center space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a 
                key={link.platform}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">{link.platform}</span>
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <a href="#about" className="hover:text-theme-blue dark:hover:text-theme-blue">About</a>
            <a href="#ventures" className="hover:text-theme-blue dark:hover:text-theme-blue">Ventures</a>
            <a href="#achievements" className="hover:text-theme-blue dark:hover:text-theme-blue">Achievements</a>
            <a href="#insights" className="hover:text-theme-blue dark:hover:text-theme-blue">Insights</a>
            <a href="#blog" className="hover:text-theme-blue dark:hover:text-theme-blue">Blog</a>
            <a href="#contact" className="hover:text-theme-blue dark:hover:text-theme-blue">Contact</a>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
