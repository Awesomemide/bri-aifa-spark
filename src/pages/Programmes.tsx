import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, GraduationCap, Briefcase, ArrowRight, Star, Camera, Monitor, Rocket } from "lucide-react";

const Programmes = () => {
  const entertainmentInitiatives = [
    {
      icon: Trophy,
      title: "Future Filmmakers AI Competition",
      description: "UK's first AI film contest (ages 14–25) with cash prizes, screenings, and equipment grants.",
      action: "Apply Now",
      color: "bg-british-red"
    },
    {
      icon: Users,
      title: "Mentorship with Industry Leaders",
      description: "1:1 guidance from AI filmmakers, prompt engineers, and post-production pros.",
      action: "Meet Mentors",
      color: "bg-community-orange"
    },
    {
      icon: Camera,
      title: "Pop-up AI Film Labs",
      description: "Mobile workshops bringing high-tech film production gear and mentorship to schools and youth hubs nationwide.",
      action: "Host a Workshop",
      color: "bg-british-blue"
    },
    {
      icon: Star,
      title: "Representation Matters Hub",
      description: "A digital hub for youth to co-create AI stories and publish work that reflects their voice and identity.",
      action: "Join the Hub",
      color: "bg-primary"
    }
  ];

  const educationPathways = [
    {
      icon: GraduationCap,
      title: "AI Curriculum in Schools",
      description: "Co-developing creative tech modules, training teachers, and embedding AI filmmaking into learning.",
      action: "Partner with Us"
    },
    {
      icon: Monitor,
      title: "AI Summer & Half-Term Camps",
      description: "Bursary-supported, hands-on AI filmmaking bootcamps.",
      action: "View Camp Schedule"
    },
    {
      icon: Users,
      title: "College & University Links",
      description: "Scholarships, research, and critical discussions on AI ethics in film.",
      action: "See Our Partners"
    },
    {
      icon: Rocket,
      title: "Roadshows",
      description: "Live demos and interactive AI film experiences on tour.",
      action: "Book a Visit"
    }
  ];

  const vocationalTrack = [
    {
      title: "Paid Apprenticeships & Placements",
      description: "Entry roles like AI editor, prompt engineer, and creative technologist.",
      action: "Apply Here"
    },
    {
      title: "Accredited Short Courses",
      description: "Certification in AI scriptwriting, VFX, cinematography, and AI ethics.",
      action: "Browse Courses"
    },
    {
      title: "Career Coaching & Portfolio Building",
      description: "Expert CV, showreel, and job interview prep.",
      action: "Book a Session"
    },
    {
      title: "Start-up & Freelance Incubator",
      description: "Micro-grants and mentorship to launch your own AI-driven media business.",
      action: "Learn More"
    },
    {
      title: "Tech Hubs & Co-working Studios",
      description: "Access cutting-edge AI software, film gear, and collaborative workspaces.",
      action: "Find a Hub Near You"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Programmes That 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Inspire, Upskill & Launch </span>
              Careers
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              BritAIFA offers entertainment, education, and vocational initiatives designed to fuel imagination, 
              build skills, and turn creativity into sustainable careers.
            </p>
          </div>

          {/* Entertainment Initiatives */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                🌟 ENTERTAINMENT INITIATIVES
              </h2>
              <p className="text-lg text-muted-foreground">Where Passion Meets Opportunity</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {entertainmentInitiatives.map((initiative, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className={`w-14 h-14 ${initiative.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <initiative.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{initiative.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{initiative.description}</CardDescription>
                    <Button asChild variant="outline" className="group/btn">
                      <a href={
                        initiative.action === "Apply Now" ? "mailto:info@britaifa.org.uk" :
                        initiative.action === "Meet Mentors" ? "https://wa.link/britaifa" :
                        initiative.action === "Host a Workshop" ? "https://wa.link/britaifa" :
                        initiative.action === "Join the Hub" ? "https://wa.link/britaifa" :
                        "https://wa.link/britaifa"
                      } target="_blank" rel="noopener noreferrer">
                        {initiative.action}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Pathways */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                🎓 EDUCATION PATHWAYS
              </h2>
              <p className="text-lg text-muted-foreground">Building Core Skills</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {educationPathways.map((pathway, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 group text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <pathway.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{pathway.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">{pathway.description}</CardDescription>
                    <Button asChild size="sm" variant="outline" className="group/btn">
                      <a href={
                        pathway.action === "Partner with Us" ? "https://wa.link/britaifa" :
                        "https://wa.link/britaifa"
                      } target="_blank" rel="noopener noreferrer">
                        {pathway.action}
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Vocational Track */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                💼 VOCATIONAL & EMPLOYABILITY TRACK
              </h2>
              <p className="text-lg text-muted-foreground">Turning Skills into Careers</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vocationalTrack.map((track, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-community-orange rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">{track.description}</CardDescription>
                    <Button asChild size="sm" variant="outline" className="group/btn">
                      <a href={
                        track.action === "Apply Here" ? "mailto:info@britaifa.org.uk" :
                        track.action === "Learn More" ? "/programmes" :
                        "https://wa.link/3uv6vt"
                      } target={track.action === "Learn More" ? "_self" : "_blank"} rel="noopener noreferrer">
                        {track.action}
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-primary rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of young filmmakers already transforming their futures through AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:info@britaifa.org.uk" target="_blank" rel="noopener noreferrer">
                  Apply for Programmes
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <a href="https://wa.link/3uv6vt" target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programmes;