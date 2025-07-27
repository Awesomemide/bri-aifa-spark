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
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold leading-tight">
                Who We Are: A
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Social Enterprise </span>
                with a Creative Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                BritAIFA is a community-rooted catalyst for transformation—a social enterprise 
                and emerging charity devoted to reshaping the creative landscape.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">Empower underserved youth (especially from ethnic minorities) with AI filmmaking skills, tools, and career pathways.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Building className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">Operate as a CLG (Company Limited by Guarantee), prioritising social impact above profit.</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">Proudly based in South East London (Old Kent Road & Peckham), embedded in the heart of the communities we uplift.</span>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground">Exist to break systemic barriers, delivering inclusive, hands-on tech-creative education that breeds innovation and equity.</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-primary p-6 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Why AI Filmmaking?</h3>
              <p className="text-lg opacity-90 mb-4">The Revolution is Now.</p>
              <p>
                AI is redefining who gets to create film. It's not about replacing people, 
                but empowering one person to become their own Hollywood studio. BritAIFA ensures 
                no young talent is excluded from this revolution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-british-red mb-2">Representation gaps</h4>
                <p className="text-sm text-muted-foreground">in the creative industries</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-community-orange mb-2">Digital inequality</h4>
                <p className="text-sm text-muted-foreground">in low-income and minority communities</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold text-british-blue mb-2">Employability gap</h4>
                <p className="text-sm text-muted-foreground">preparing youth for AI-driven careers</p>
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