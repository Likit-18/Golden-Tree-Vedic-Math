import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-hero">Math Journey</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Enroll today - Limited seats available!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
            
            <div className="space-y-4">
              <a href="tel:9581201109" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Call Us</p>
                  <p className="text-primary text-lg group-hover:underline">+91 9581201019</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Visit Us</p>
                  <p className="text-muted-foreground">My Chhota School</p>
                  <p className="text-sm text-muted-foreground">
                    Vinayakanagar, D. No: MIG 24-66-16,<br />
                    Near Union Bank, Peddagantayada,<br />
                    Visakhapatnam, Andhra Pradesh - 530044
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Class Timings</p>
                  <p className="text-muted-foreground">Morning: 7 AM - 9 AM</p>
                  <p className="text-muted-foreground">Evening: 4 PM - 9 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-background rounded-3xl p-8 shadow-lg-custom border border-border/50">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto flex items-center justify-center text-primary-foreground">
                <MessageCircle className="w-10 h-10" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Enroll Now</h3>
                <p className="text-muted-foreground">Secure your child's spot in our next batch</p>
              </div>
              
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="tel:+91 9581201019">
                    <Phone className="w-5 h-5" />
                    Call +91 9581201019 to Enroll
                  </a>
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">or</span>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/919581201019" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    <Mail className="w-5 h-5" />
                    Inquire About Online Classes
                  </Button>
                </a>
              </div>
              
              <div className="bg-accent/10 rounded-xl p-4">
                <p className="text-sm font-medium text-sidebar-accent-foreground">
                  🎯 Special Offer: Get 10% off on early bird registrations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;