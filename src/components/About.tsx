
import { Code, Zap, Globe, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              I'm a Lead Software Developer, System Architect, and Startup Founder based in Nairobi, Kenya. 
              With a passion for building digital products that blend technology and impact, I focus on 
              developing solutions across fintech, smart city innovation, and decentralized systems.
            </p>
            
            <p className="text-lg mb-6">
              As the founder of LESOM Dynamics, a venture studio, I lead the development of multiple 
              innovative products that solve real challenges in the African tech ecosystem. My technical 
              expertise combined with entrepreneurial vision allows me to transform ideas into viable products 
              that make a difference.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Technical Skillset</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <Code className="w-6 h-6 text-theme-blue mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Frontend Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    React.js, React Native, Tailwind CSS, Next.js
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <Server className="w-6 h-6 text-theme-purple mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Node.js, Express, MongoDB, Flask, SQL
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <Zap className="w-6 h-6 text-theme-teal mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Emerging Technology</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Blockchain (Celo, Lisk, SUI), IoT systems
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <Globe className="w-6 h-6 text-theme-indigo mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">System Architecture</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Microservices, API design, Cloud infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
