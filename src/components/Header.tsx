import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              V
            </div>
            <span className="font-bold text-lg text-foreground">Vedic Math</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("instructor")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instructor
            </button>
            <button
              onClick={() => scrollToSection("course")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Course Details
            </button>
            <Button variant="default" size="sm" asChild>
              <a href="tel:9581201109">
                <Phone className="w-4 h-4" />
                9581201109
              </a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 border-t border-border/50">
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("instructor")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Instructor
            </button>
            <button
              onClick={() => scrollToSection("course")}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Course Details
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;