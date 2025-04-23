
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Glamo<span className="text-glamo-pink">.</span></h3>
            <p className="text-gray-300 mb-4">
              Experience luxury skincare treatments and premium products to help you achieve radiant, healthy skin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-glamo-pink transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.061c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.861c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.19 22 17.053 22 12.061z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-glamo-pink transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-glamo-pink transition-colors" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Hydrating Facials</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Microdermabrasion</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Chemical Peels</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">LED Light Therapy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Skin Consultations</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-white">10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Glamo Skin Glow Hub. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-glamo-pink mx-1" /> by Glamo Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
