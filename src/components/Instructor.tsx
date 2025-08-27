import { Award, BookOpen, Users } from "lucide-react";

const Instructor = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  Meet Your Instructor
                </span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  M. Chandrakala
                </h2>
                <p className="text-xl text-transparent bg-clip-text bg-gradient-accent font-semibold">
                  Certified Vedic Maths Trainer
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With years of experience in teaching Vedic Mathematics, I'm passionate about making math 
                  accessible and enjoyable for every student. My unique teaching methodology has helped 
                  hundreds of students overcome their fear of mathematics and excel in their academics.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Certified Expert</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mx-auto">
                    <Users className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">500+ Students</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mx-auto">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">10+ Years</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-sm mx-auto bg-gradient-accent rounded-3xl opacity-20 absolute inset-0 blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur-sm border border-border/50">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto flex items-center justify-center text-primary-foreground text-4xl font-bold">
                    MC
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Teaching Location</p>
                    <p className="font-semibold text-foreground">My Chhota School</p>
                    <p className="text-sm text-muted-foreground">Near Union Bank, Visakhapatnam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;