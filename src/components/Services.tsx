import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Image, Wand2, Shield, Layers, Zap, Building } from "lucide-react";

const services = [
  {
    icon: Image,
    title: "Text-to-Image Generation",
    description: "Create stunning visuals from text descriptions with our advanced AI models."
  },
  {
    icon: Wand2,
    title: "Image Editing & Inpainting",
    description: "Edit existing images seamlessly with AI-powered inpainting capabilities."
  },
  {
    icon: Layers,
    title: "Background Removal",
    description: "Precise background removal for professional-quality image processing."
  },
  {
    icon: Shield,
    title: "Licensed Content",
    description: "100% legally compliant with full copyright and trademark protection."
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description: "Lightning-fast generation with enterprise-grade performance and reliability."
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Scalable solutions designed for business integration and commercial use."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive <span className="bg-gradient-primary bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our suite of Visual Generative AI tools provides everything you need for commercial-grade content creation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/10 transition-all duration-300 group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;