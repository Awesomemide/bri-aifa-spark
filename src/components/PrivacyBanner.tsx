import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Shield, Cookie } from "lucide-react";
import { cn } from "@/lib/utils";

const PrivacyBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("gdpr-consent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("gdpr-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("gdpr-consent", "declined");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg transition-transform duration-300 ease-in-out",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex items-center gap-2 text-primary">
              <Cookie className="w-5 h-5" />
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm text-foreground">
                Privacy & Cookie Notice
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content. By continuing to use our website, 
                you consent to our use of cookies in accordance with our{" "}
                <a 
                  href="/privacy-policy" 
                  className="text-primary hover:underline font-medium"
                >
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="whitespace-nowrap"
            >
              Decline
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="whitespace-nowrap"
            >
              Accept All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="p-1 h-8 w-8"
            >
              <X className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBanner;