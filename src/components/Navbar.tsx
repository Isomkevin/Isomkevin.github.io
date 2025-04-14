
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle theme toggle
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !dark;
    setDark(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Ventures", href: "#ventures" },
    { name: "Achievements", href: "#achievements" },
    { name: "Insights", href: "#insights" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#" 
          className="font-grotesk text-xl font-bold text-gray-900 dark:text-white flex items-center"
        >
          <span className="text-gradient">KI</span>
          <span className="ml-2">Kevin Isom</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-theme-blue dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            className="ml-2"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-2"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 p-4">
          <nav className="flex flex-col space-y-6 pt-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-theme-blue dark:hover:text-theme-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
