import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-youth-filmmakers.jpg";
const Hero = () => {
  return <section className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/30 to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-6 py-3 rounded-full border border-primary/20 shadow-lg">
                <span className="text-sm font-bold">🎬 Company Limited by Guarantee No. 16595866</span>
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-bold leading-tight">
                We Want To Help <span className="bg-gradient-primary bg-clip-text text-transparent">YOU</span> Unlock
                <span className="bg-gradient-primary bg-clip-text text-transparent block mt-2"> Visual Storytelling </span>
                With Artificial Intelligence Tools
              </h1>
              
              <p className="text-xl lg:text-2xl text-foreground/80 font-semibold">
                For Every Young Person. Every Culture. Every Orientation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                BritAI Filmmakers Amalgamated Ltd. (BritAIFA) is igniting a new era of creativity, 
                skills, and opportunity for British youth through artificial intelligence filmmaking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="hero" className="group shadow-xl hover:shadow-2xl transition-all">
                <Link to="/programmes">
                  Explore Programmes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-accent/10">
                Partner with Us
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground font-medium">Youth to Train</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-community-orange/5 border border-community-orange/10">
                <div className="text-3xl font-bold text-community-orange">30+</div>
                <div className="text-sm text-muted-foreground font-medium">AI Short Films</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-british-red/5 border border-british-red/10">
                <div className="text-3xl font-bold text-british-red">£50k+</div>
                <div className="text-sm text-muted-foreground font-medium">Equipment Grants</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30 scale-110 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <img src={heroImage} alt="Diverse young British filmmakers using AI technology" className="relative rounded-3xl shadow-2xl border border-border/30" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-3xl flex items-center justify-center">
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;