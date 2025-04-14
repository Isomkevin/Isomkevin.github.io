
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Achievements from "@/components/Achievements";
import Insights from "@/components/Insights";
import Blog from "@/components/Blog";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Ventures />
        <Achievements />
        <Insights />
        <Blog />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
