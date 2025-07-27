import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-youth-filmmakers.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-british-blue/10 text-british-blue px-4 py-2 rounded-full border border-british-blue/20">
                <span className="text-sm font-medium">Company Limited by Guarantee No. 16595866</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Unlocking the Future of
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Storytelling </span>
                Through AI
              </h1>
              
              <p className="text-xl text-muted-foreground">
                For Every Young Person. Every Culture. Every Orientation.
              </p>
              
              <p className="text-lg text-foreground">
                BritAI Filmmakers Amalgamated Ltd. (BritAIFA) is igniting a new era of creativity, 
                skills, and opportunity for British youth through artificial intelligence filmmaking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="group">
                Explore Programmes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Partner with Us
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Youth to Train</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-community-orange">30+</div>
                <div className="text-sm text-muted-foreground">AI Short Films</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-british-red">£50k+</div>
                <div className="text-sm text-muted-foreground">Equipment Grants</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 scale-110"></div>
            <img 
              src={heroImage} 
              alt="Diverse young British filmmakers using AI technology"
              className="relative rounded-2xl shadow-2xl border border-primary/20"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
              <Button size="lg" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                <Play className="w-6 h-6 mr-2" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;