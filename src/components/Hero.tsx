import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-ai-network.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-accent/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full border border-accent/30">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Visual Generative AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Visual </span>
                Generation
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Commercial-grade Visual Generative AI with 100% licensed datasets. 
                Create, edit, and scale visual content responsibly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="group">
                Start Creating
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>100% Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>Full Liability Coverage</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 scale-110"></div>
            <img 
              src={heroImage} 
              alt="AI Neural Network Visualization"
              className="relative rounded-2xl shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;