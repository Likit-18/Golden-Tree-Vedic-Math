import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <Button variant="hero" size="lg" className="w-full shadow-glow" asChild>
        <a href="tel:9581201109">
          <Phone className="w-5 h-5 animate-pulse" />
          Call Now - 9581201109
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;