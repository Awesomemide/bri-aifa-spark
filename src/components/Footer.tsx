import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/8b5495b1-d8aa-46c8-be62-b82324bbbdb6.png" 
                alt="BritAIFA Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering British youth through AI filmmaking skills and opportunities.
            </p>
            <p className="text-xs text-muted-foreground">
              Company Limited by Guarantee No. 16595866<br />
              England & Wales
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Programmes</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/programmes" className="hover:text-foreground transition-colors">Future Filmmakers Competition</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AI Summer Camps</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">School Partnerships</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Apprenticeships</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Get Involved</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link to="/partner" className="hover:text-foreground transition-colors">Partner with Us</Link></li>
              <li><a href="mailto:info@britaifa.org.uk" className="hover:text-foreground transition-colors">Volunteer</a></li>
              <li><a href="mailto:info@britaifa.org.uk" className="hover:text-foreground transition-colors">Mentorship</a></li>
              <li><a href="mailto:info@britaifa.org.uk" className="hover:text-foreground transition-colors">Funding</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>Studio 1D, 3-5 Latona Road<br />London, SE15 6RY</p>
              <p>info@britaifa.org.uk</p>
              <p>+44 (0)7404 352 815</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 BritAI Filmmakers Amalgamated Ltd. All rights reserved.</p>
          <p className="mt-2">Charity Status: CIO registration pending</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;