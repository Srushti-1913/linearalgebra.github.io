import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChaptersSection from "@/components/ChaptersSection";
import LabAssessments from "@/components/LabAssessments";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ChaptersSection />
        <LabAssessments />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
