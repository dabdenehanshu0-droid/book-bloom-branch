import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, QrCode } from "lucide-react";
import heroImage from "@/assets/library-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative z-10 container text-center space-y-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Digital Library
            <span className="block text-library-cyan">Reimagined</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover, borrow, and learn with AI-powered recommendations, 
            QR scanning, and seamless digital access to thousands of books.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            <BookOpen className="mr-2 h-5 w-5" />
            Browse Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
            <QrCode className="mr-2 h-5 w-5" />
            Scan & Access
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-library-cyan" />
            <h3 className="text-xl font-semibold mb-2">Digital Borrowing</h3>
            <p className="text-white/80">Reserve and borrow books online with instant access</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <Brain className="h-12 w-12 mx-auto mb-4 text-library-orange" />
            <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
            <p className="text-white/80">Personalized book suggestions based on your interests</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
            <QrCode className="h-12 w-12 mx-auto mb-4 text-library-cyan" />
            <h3 className="text-xl font-semibold mb-2">QR Quick Access</h3>
            <p className="text-white/80">Scan QR codes for instant book information and borrowing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;