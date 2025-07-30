import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, MapPin, Target } from "lucide-react";
const Vision = () => {
  return <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/20 relative">
      <div className="absolute inset-0 bg-gradient-warm opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <span className="text-accent font-bold text-sm">✨ Our Vision in Motion</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Vision in Motion: <span className="bg-gradient-accent bg-clip-text text-transparent block">Where Stories Come Alive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Imagine a world where every voice can create cinema. Our vision shows this in action across British communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-lg font-bold">VR Direction</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                A Black girl, immersed in a VR headset, directs an AI-powered film set with confidence and creativity.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-community-orange rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-lg font-bold">AI VFX Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                A white teen, laser-focused, edits breathtaking AI VFX in a buzzing community hub, mastering the future of film.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-british-red rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-lg font-bold">Film Premiere</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                A South Asian boy, confident and proud, premieres his AI-generated short film to an engaged audience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-british-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-lg font-bold">London Showcase</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                A funder, warmly shaking hands with BritAIFA staff at a London showcase, investing in creative futures.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-accent rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <div className="relative">
            <blockquote className="text-2xl lg:text-3xl italic mb-6 leading-relaxed font-medium">"The next Steven Spielberg might be a girl with a laptop and the right tools in London, Glasgow, Cardiff and Belfast"</blockquote>
            <cite className="text-lg font-bold opacity-90">– Gbola Oba, Founder</cite>
          </div>
        </div>
      </div>
    </section>;
};
export default Vision;