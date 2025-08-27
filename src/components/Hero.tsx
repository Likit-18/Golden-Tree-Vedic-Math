import { Button } from "@/components/ui/button";
import { Phone, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-60" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-hero rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-15 animate-pulse" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary font-medium text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Vizag's Best Vedic Math Course For Kids</span>
        </div>
        
        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
            Learn <span className="text-transparent bg-clip-text bg-gradient-hero">Vedic Mathematics</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            For Grades 4–9 • Fast • Fun • Easy
          </p>
        </div>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground leading-relaxed">
          Ancient Indian system of calculation that makes mathematics simple, fast & enjoyable.
          Learn tricks to solve problems in seconds!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://wa.me/919581201019" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Enroll Today - Limited Seats
            </Button>
          </a>
          <a href="tel:+919581201019">
            <Button variant="outline" size="lg" className="min-w-[200px] group">
            <Phone className="w-4 h-4 group-hover:animate-pulse" />
              Call +91 9581201019
            </Button>
          </a>
        </div>
        
        {/* Location preview */}
        <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span>Visakhapatnam, Andhra Pradesh | Online Classes Available</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;