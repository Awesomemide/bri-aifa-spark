import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Shield, Eye, Database, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          
          <p className="text-muted-foreground text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Personal Information</h4>
                <p className="text-muted-foreground">
                  We may collect personal information you provide directly to us, such as your name, 
                  email address, phone number, and any other information you choose to provide when 
                  contacting us or participating in our programs.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Usage Information</h4>
                <p className="text-muted-foreground">
                  We automatically collect information about how you use our website, including your 
                  IP address, browser type, operating system, referring URLs, pages viewed, and the 
                  dates/times of your visits.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Cookies and Tracking Technologies</h4>
                <p className="text-muted-foreground">
                  We use cookies, web beacons, and similar tracking technologies to collect information 
                  about your browsing activities and to improve your experience on our website.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• To provide and maintain our services</li>
                <li>• To communicate with you about our programs and initiatives</li>
                <li>• To improve our website and user experience</li>
                <li>• To analyze usage patterns and website performance</li>
                <li>• To comply with legal obligations</li>
                <li>• To protect our rights and prevent fraud</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this Privacy Policy:
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>• With service providers who assist us in operating our website</li>
                <li>• When required by law or to protect our rights</li>
                <li>• In connection with a business transfer or merger</li>
                <li>• With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <ul className="space-y-2 text-muted-foreground">
                <li>• Right to access your personal information</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to delete your personal information</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
                <li>• Right to withdraw consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">What are Cookies?</h4>
                <p className="text-muted-foreground">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide you with a better experience and understand how you use our site.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Types of Cookies We Use</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Essential cookies: Required for the website to function properly</li>
                  <li>• Analytics cookies: Help us understand how visitors use our website</li>
                  <li>• Preference cookies: Remember your settings and preferences</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Managing Cookies</h4>
                <p className="text-muted-foreground">
                  You can control and manage cookies through your browser settings. However, 
                  disabling certain cookies may impact the functionality of our website.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy, comply with legal obligations, resolve 
                disputes, and enforce our agreements.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your information may be processed and stored in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your information in 
                accordance with applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13 years of age. We do not 
                knowingly collect personal information from children under 13. If we become 
                aware that we have collected such information, we will take steps to delete it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any 
                material changes by posting the new Privacy Policy on this page and updating 
                the "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us:
              </p>
              
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@britaifa.org</p>
                <p>Address: Studio 1D, 3-5 Latona Road London, SE15 6RY</p>
                <p>Phone: +44 (0)7404 352 815</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />
        
        <div className="text-center">
          <Link to="/">
            <Button size="lg">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
