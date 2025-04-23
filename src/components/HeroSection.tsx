
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden pt-20 flex flex-col justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-glamo-pink/30 to-glamo-purple/30"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-6">
            Reveal Your Natural 
            <span className="text-glamo-purple"> Glow</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Experience luxury skincare treatments personalized for your unique beauty. 
            Our expert aestheticians use premium products to help you achieve radiant, 
            healthy skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glamoPrimary" size="xl">
              Book a Consultation
            </Button>
            <Button variant="glamoOutline" size="xl">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
        <a href="#services">
          <div className="w-10 h-10 rounded-full border-2 border-glamo-purple flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-glamo-purple"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
