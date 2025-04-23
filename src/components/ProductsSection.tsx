
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    name: "Luminous Glow Serum",
    description: "Vitamin C enriched brightening serum for radiant skin",
    price: "$58",
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VydW0lMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Hydra-Boost Moisturizer",
    description: "24-hour hydration with hyaluronic acid and ceramides",
    price: "$48",
    badge: "New",
    image: "https://images.unsplash.com/photo-1631730359585-5e1a5d5a9d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9pc3R1cml6ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Gentle Exfoliant Mask",
    description: "AHA/BHA formula that reveals smoother, brighter skin",
    price: "$42",
    badge: "",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNraW5jYXJlJTIwbWFza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading">Premium Skincare Products</h2>
        <p className="section-subheading">
          Discover our collection of scientifically formulated skincare essentials that deliver real results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md card-hover">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-glamo-purple text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-lg font-medium mt-2">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button variant="glamoPrimary" className="w-full">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="glamoOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
