import { Brain, Target, Shield, Award, Rocket, Heart } from "lucide-react";

const benefits = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Speed & Accuracy",
    description: "Improves calculation speed and accuracy dramatically"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Love for Math",
    description: "Makes mathematics enjoyable and builds confidence"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Fewer Mistakes",
    description: "Reduces silly errors and improves precision"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Mental Power",
    description: "Enhances concentration, memory and cognitive abilities"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Exam Excellence",
    description: "Helpful in school exams and competitive tests"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Learn tricks to solve complex problems in seconds"
  }
];

const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-accent">Vedic Math</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform your child's mathematical abilities with our proven system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm-custom hover:shadow-md-custom transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;