
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer L.",
    review:
      "The hydrating facial completely transformed my skin! I've struggled with dryness for years, and after just one session, my skin feels so nourished and looks radiant. I've already booked my next appointment!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Michael K.",
    review:
      "As someone with sensitive skin, I've always been cautious about facials and treatments. The team at Glamo took the time to understand my concerns and tailored a gentle treatment that gave amazing results without any irritation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sophia T.",
    review:
      "The Luminous Glow Serum has become a staple in my routine. I've noticed a significant improvement in my hyperpigmentation and overall skin brightness. Worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0JTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const TestimonialsSection = () => {
  const renderStars = (count: number) => {
    return Array(count)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-glamo-purple text-glamo-purple" />
      ));
  };

  return (
    <section id="testimonials" className="bg-glamo-gray/50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">What Our Clients Say</h2>
        <p className="section-subheading">
          Read about the transformative experiences of our valued clients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md overflow-hidden card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
