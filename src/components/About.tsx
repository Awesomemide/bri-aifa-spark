import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, MapPin, Zap, ArrowRight } from "lucide-react";

const About = () => {
  const goals = [
    {
      target: "200+",
      description: "Youths trained & certified (Pearson-Edexcel accredited)",
      detail: "10% mentored into self-employment or start-ups"
    },
    {
      target: "30+",
      description: "Alumni AI Short Films",
      detail: "Festival-ready quality productions"
    },
    {
      target: "£50,000+",
      description: "Equipment Grants",
      detail: "Supporting upcoming filmmakers"
    },
    {
      target: "15+",
      description: "Strategic Partnerships",
      detail: "Across all four UK nations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-background relative">
      <div className="absolute inset-0 bg-gradient-warm opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
                <span className="text-primary font-bold text-sm">🌟 About BritAIFA</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Who We Are: A
                <span className="bg-gradient-accent bg-clip-text text-transparent block"> Social Enterprise </span>
                with a Creative Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BritAIFA is a community-rooted catalyst for transformation—a social enterprise 
                and emerging charity devoted to reshaping the creative landscape.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground leading-relaxed">Empower underserved youth (especially from ethnic minorities) with AI filmmaking skills, tools, and career pathways.</span>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-accent/5 border border-accent/10">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground leading-relaxed">Operate as a CLG (Company Limited by Guarantee), prioritising social impact above profit.</span>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-secondary/20 border border-secondary/30">
                <div className="w-10 h-10 bg-community-orange rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground leading-relaxed">Proudly based in South East London (Old Kent Road & Peckham), embedded in the heart of the communities we uplift.</span>
              </div>
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-british-blue/5 border border-british-blue/10">
                <div className="w-10 h-10 bg-british-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-foreground leading-relaxed">Exist to break systemic barriers, delivering inclusive, hands-on tech-creative education that breeds innovation and equity.</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-accent rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">Why AI Filmmaking?</h3>
                <p className="text-lg opacity-90 mb-6 font-semibold">The Revolution is Now.</p>
                <p className="leading-relaxed">
                  AI is redefining who gets to create film. It's not about replacing people, 
                  but empowering one person to become their own Hollywood studio. BritAIFA ensures 
                  no young talent is excluded from this revolution.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-british-red/10 to-british-red/5 border border-british-red/20 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h4 className="font-bold text-british-red mb-3 text-lg">Representation gaps</h4>
                <p className="text-muted-foreground leading-relaxed">in the creative industries</p>
              </div>
              <div className="bg-gradient-to-br from-community-orange/10 to-community-orange/5 border border-community-orange/20 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h4 className="font-bold text-community-orange mb-3 text-lg">Digital inequality</h4>
                <p className="text-muted-foreground leading-relaxed">in low-income and minority communities</p>
              </div>
              <div className="bg-gradient-to-br from-british-blue/10 to-british-blue/5 border border-british-blue/20 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h4 className="font-bold text-british-blue mb-3 text-lg">Employability gap</h4>
                <p className="text-muted-foreground leading-relaxed">preparing youth for AI-driven careers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Our First-Year Goals</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">{goal.target}</CardTitle>
                  <CardDescription className="text-base font-medium">{goal.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{goal.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <div className="space-y-3 text-sm">
              <p><strong>📍 Studio 1D, 3-5 Latona Road, London, SE15 6RY</strong></p>
              <p>📩 info@britaifa.org.uk | 📞 +44 (0)7404 352 815</p>
              <p className="text-muted-foreground">Charity Status: CIO registration pending.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button variant="hero" className="group">
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;