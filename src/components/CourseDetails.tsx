import { CheckCircle, Users, Calendar, Clock, Laptop, Home } from "lucide-react";

const CourseDetails = () => {
  return (
    <section className="py-16 px-4 bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Course Details
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our Vedic Math program
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-background rounded-2xl p-6 shadow-sm-custom">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground">Eligible Students</h3>
            </div>
            <p className="text-muted-foreground">Grades 4 to 9</p>
            <p className="text-sm text-muted-foreground mt-2">Perfect age to build strong mathematical foundation</p>
          </div>
          
          <div className="bg-background rounded-2xl p-6 shadow-sm-custom">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground">Course Duration</h3>
            </div>
            <p className="text-muted-foreground">3 Months Program</p>
            <p className="text-sm text-muted-foreground mt-2">Comprehensive curriculum with regular practice</p>
          </div>
          
          <div className="bg-background rounded-2xl p-6 shadow-sm-custom">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground">Class Timing</h3>
            </div>
            <p className="text-muted-foreground">Flexible Batches</p>
            <p className="text-sm text-muted-foreground mt-2">Morning & Evening slots available</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 border border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Fast multiplication techniques (up to 5 digits)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Quick division and square root methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Mental calculation strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Algebra simplification tricks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Competitive exam shortcuts</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Class Modes</h3>
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-primary-foreground">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Offline Classes</p>
                    <p className="text-sm text-muted-foreground">At My Chhota School, Visakhapatnam</p>
                  </div>
                </div>
                
                <div className="bg-background rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-primary-foreground">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Online Classes</p>
                    <p className="text-sm text-muted-foreground">Live interactive sessions via Google Meet</p>
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

export default CourseDetails;