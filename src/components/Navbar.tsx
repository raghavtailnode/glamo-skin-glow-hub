
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Update navbar style on scroll
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-glamo-purple">
            Glamo<span className="text-glamo-dark-purple">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-glamo-purple transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-800 hover:text-glamo-purple transition-colors">
            Services
          </a>
          <a href="#products" className="text-gray-800 hover:text-glamo-purple transition-colors">
            Products
          </a>
          <a href="#testimonials" className="text-gray-800 hover:text-glamo-purple transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-gray-800 hover:text-glamo-purple transition-colors">
            Contact
          </a>
          <Button className="bg-glamo-purple hover:bg-glamo-dark-purple">
            Book Now
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-12">
                <a href="#" className="text-lg font-medium hover:text-glamo-purple transition-colors">
                  Home
                </a>
                <a href="#services" className="text-lg font-medium hover:text-glamo-purple transition-colors">
                  Services
                </a>
                <a href="#products" className="text-lg font-medium hover:text-glamo-purple transition-colors">
                  Products
                </a>
                <a href="#testimonials" className="text-lg font-medium hover:text-glamo-purple transition-colors">
                  Testimonials
                </a>
                <a href="#contact" className="text-lg font-medium hover:text-glamo-purple transition-colors">
                  Contact
                </a>
                <Button className="bg-glamo-purple hover:bg-glamo-dark-purple w-full">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
