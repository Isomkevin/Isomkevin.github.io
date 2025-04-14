
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have a project idea or want to collaborate? Reach out to me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:contact@kevinison.dev" 
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-theme-blue dark:hover:text-theme-blue transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>contact@kevinison.dev</span>
                  </a>
                  
                  <a 
                    href="https://github.com/isomkevin" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-theme-blue dark:hover:text-theme-blue transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>isomkevin</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/kevinison" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-theme-blue dark:hover:text-theme-blue transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>kevinison</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-theme-blue hover:bg-theme-blue/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
