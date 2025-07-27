import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-white text-lg">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">BritAIFA</span>
              <span className="text-xs text-muted-foreground hidden sm:block">British AI Filmmakers Amalgamated</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/programmes" 
              className={`transition-colors ${isActive('/programmes') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Our Programmes
            </Link>
            <Link 
              to="/partner" 
              className={`transition-colors ${isActive('/partner') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
            >
              Partner & Fund
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Get Involved</Button>
            <Button variant="hero">Apply Now</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/programmes" 
                className={`transition-colors ${isActive('/programmes') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Programmes
              </Link>
              <Link 
                to="/partner" 
                className={`transition-colors ${isActive('/partner') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Partner & Fund
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Get Involved</Button>
                <Button variant="hero">Apply Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;