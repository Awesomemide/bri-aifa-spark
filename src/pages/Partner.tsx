import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, TrendingUp, Award, Target, Heart, HandshakeIcon, Phone, ArrowRight, Download } from "lucide-react";

const Partner = () => {
  const fundingOptions = [
    {
      icon: Building,
      title: "Institutional Grants & CSR Initiatives",
      description: "Collaborate with tech companies, film studios, or foundations.",
      benefits: ["Brand alignment with UK digital skills priorities", "Measurable social impact metrics", "Tax-efficient corporate giving"]
    },
    {
      icon: Users,
      title: "Local Authority & Community Projects",
      description: "Tailored programmes for your borough or region.",
      benefits: ["Direct community impact", "Local employment outcomes", "Regional skills development"]
    },
    {
      icon: TrendingUp,
      title: "Corporate Sponsorships",
      description: "Brand visibility at events, film showcases, and across youth-generated content.",
      benefits: ["Youth audience engagement", "Creative content partnerships", "Industry thought leadership"]
    },
    {
      icon: Award,
      title: "Tax-Efficient Giving",
      description: "Smart philanthropy for high-net-worth individuals.",
      benefits: ["Charity tax relief", "Legacy giving options", "Direct impact visibility"]
    }
  ];

  const impactMetrics = [
    { label: "Youth Reach & Engagement", value: "500+", description: "Young people engaged annually" },
    { label: "Film Output by Alumni", value: "30+", description: "AI-generated films produced" },
    { label: "Employment & Freelance Start-ups", value: "10%", description: "Moving into self-employment" },
    { label: "Confidence & Mental Well-being Growth", value: "85%", description: "Reporting increased confidence" }
  ];

  const testimonials = [
    {
      quote: "BritAIFA is democratising creativity-making filmmaking accessible for all.",
      author: "AI Varsity"
    },
    {
      quote: "We're proud to support their AI tech hubs for the next generation of filmmakers.",
      author: "AIFA worldwide, USA"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Help Us Transform the Future of 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> British Film</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your funding and collaboration empower diverse, underrepresented youth to master 
              AI-powered filmmaking and reshape the industry.
            </p>
          </div>

          {/* Why Partner */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Partner With BritAIFA?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border bg-card text-center">
                <CardHeader>
                  <Target className="w-12 h-12 text-british-blue mx-auto mb-4" />
                  <CardTitle className="text-lg">UK Priorities Aligned</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Aligned with UK priorities on digital skills, levelling up, and inclusion.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card text-center">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-community-orange mx-auto mb-4" />
                  <CardTitle className="text-lg">Data-Driven Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Measurable outcomes across diversity, tech empowerment, and employment.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card text-center">
                <CardHeader>
                  <Heart className="w-12 h-12 text-british-red mx-auto mb-4" />
                  <CardTitle className="text-lg">Charity Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    CIO registration pending ensures high accountability and transparency.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-border bg-card text-center">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Tangible ROI</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    From cultural influence to measurable youth employment outcomes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Funding Options */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Funding & Partnership Options</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {fundingOptions.map((option, index) => (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{option.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="mt-4 group" variant="outline" asChild>
                      <a href="https://wa.link/britaifa" target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Impact Dashboard */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Measurable Impact</h2>
              <p className="text-lg text-muted-foreground">
                Our visual dashboard tracks real outcomes and transformational stories.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="border-border bg-card text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-primary">{metric.value}</CardTitle>
                    <CardDescription className="font-semibold">{metric.label}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="hero" className="group">
                <Download className="w-4 h-4 mr-2" />
                Download Our Prospectus
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">What Partners Say</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border bg-gradient-primary/5 p-8">
                  <CardContent className="text-center space-y-4">
                    <blockquote className="text-lg italic text-foreground">
                      "{testimonial.quote}"
                    </blockquote>
                    <cite className="text-base font-semibold text-primary">
                      – {testimonial.author}
                    </cite>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-primary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with BritAIFA to create lasting change in British filmmaking and youth empowerment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Button size="lg" variant="secondary" className="group">
                <HandshakeIcon className="w-5 h-5 mr-2" />
                Become a Fund Partner
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 group">
                <Users className="w-5 h-5 mr-2" />
                Bring BritAIFA to Your Community
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 group">
                <Award className="w-5 h-5 mr-2" />
                Volunteer as Mentor
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 group">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partner;