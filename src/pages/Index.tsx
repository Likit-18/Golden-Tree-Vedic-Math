import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Instructor from "@/components/Instructor";
import CourseDetails from "@/components/CourseDetails";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="benefits">
          <Benefits />
        </div>
        <div id="instructor">
          <Instructor />
        </div>
        <div id="course">
          <CourseDetails />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <FloatingCTA />
    </div>
  );
};

export default Index;
