import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, MapPin, Target } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Vision in Motion: <span className="bg-gradient-primary bg-clip-text text-transparent">Where Stories Come Alive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Imagine a world where every voice can create cinema. Our vision shows this in action across British communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">VR Direction</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A Black girl, immersed in a VR headset, directs an AI-powered film set with confidence and creativity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-community-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">AI VFX Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A white teen, laser-focused, edits breathtaking AI VFX in a buzzing community hub, mastering the future of film.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-british-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">Film Premiere</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A South Asian boy, confident and proud, premieres his AI-generated short film to an engaged audience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-british-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg">London Showcase</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                A funder, warmly shaking hands with BritAIFA staff at a London showcase, investing in creative futures.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <blockquote className="text-2xl italic text-foreground mb-4">
            "The next Spielberg might be a girl with a laptop and the right tools in Peckham, Glasgow, Cardiff or Londonderry."
          </blockquote>
          <cite className="text-lg text-muted-foreground font-medium">– Gbola Oba, Founder</cite>
        </div>
      </div>
    </section>
  );
};

export default Vision;