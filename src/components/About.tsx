import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "100% Fully-licensed datasets for commercial safety",
  "Source-available models with flexible APIs",
  "Enterprise-ready solutions for real-world challenges",
  "Full liability coverage and legal compliance",
  "Responsible AI practices and ethical development",
  "Scalable infrastructure for business growth"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Built for
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Commercial </span>
                Excellence
              </h2>
              <p className="text-lg text-muted-foreground">
                We've developed Visual Generative AI specifically for commercial use, 
                partnering with forward-thinking organizations to democratize this technology 
                while ensuring responsible and sustainable growth.
              </p>
            </div>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">Learn More</Button>
              <Button variant="outline" size="lg">View Documentation</Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card border border-border rounded-3xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">99.9%</div>
                  <div className="text-muted-foreground">Uptime Guarantee</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">10M+</div>
                    <div className="text-sm text-muted-foreground">Images Generated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-center text-sm text-muted-foreground">
                    Trusted by leading organizations worldwide
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

export default About;