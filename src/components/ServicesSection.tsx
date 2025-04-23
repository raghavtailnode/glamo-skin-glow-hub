
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, Star, Heart } from "lucide-react";

const services = [
  {
    icon: <Droplet className="h-12 w-12 text-glamo-purple" />,
    title: "Hydrating Facials",
    description:
      "Revitalize your skin with our signature hydrating facials. Deep cleansing, exfoliation, and intense hydration for a dewy, fresh complexion.",
  },
  {
    icon: <Star className="h-12 w-12 text-glamo-purple" />,
    title: "Advanced Treatments",
    description:
      "Experience cutting-edge skincare with our advanced treatments including microdermabrasion, chemical peels, and LED light therapy.",
  },
  {
    icon: <Heart className="h-12 w-12 text-glamo-purple" />,
    title: "Skin Consultations",
    description:
      "Our expert aestheticians provide personalized skin analysis and curate a customized skincare regimen tailored to your unique needs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-glamo-gray/50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">Our Premium Services</h2>
        <p className="section-subheading">
          Experience our range of luxurious treatments designed to enhance your natural beauty
          and promote healthy, radiant skin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md card-hover">
              <CardHeader className="pb-0 pt-6 flex flex-col items-center">
                <div className="mb-4 p-3 rounded-full bg-glamo-pink/30">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-center">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact">
            <Button variant="glamoPrimary" size="lg">
              Book a Service
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
