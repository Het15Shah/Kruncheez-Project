import React from "react";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const FeaturedCollection = () => {
   const navigate = useNavigate();

  const handleViewFullMenu = () => {
    navigate("/menu");
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Artisanal Cheesecakes",
      category: "Best Seller",
      description:
        "Our famous Biscoff and Blueberry cheesecakes, creamy, rich, and baked to perfection.",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
      linkText: "View Varieties",
      link: "/menu"
    },
    {
      id: 2,
      name: "Custom Celebration Cakes",
      category: "For Special Days",
      description:
        "Bespoke designs for weddings, birthdays, and anniversaries. You dream it, we bake it.",
      image:
        "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop",
      linkText: "Start Designing",
      link:"/custom-cakes"
    },
    {
      id: 3,
      name: "Italian & Mexican Savories",
      category: "Cafe Dining",
      description:
        "Authentic pastas, wood-fired pizzas, and gourmet sandwiches served fresh in our cafe.",
      image:
        "https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=800&auto=format&fit=crop",
      linkText: "Explore Cafe Menu",
      link:"/menu"
    },
  ];

  return (
    <Section backgroundColor="white" id="featured">
      <div className="text-center mb-16">
        <span className="text-brand-caramel font-medium tracking-widest uppercase text-sm">
          Most Loved
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-espresso mt-3 mb-6">
          Featured Collection
        </h2>
        <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
          Our best-selling creations that customers can't get enough of.
          Handcrafted with love and the finest ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-99/100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display italic text-lg mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-2xl text-rose-50">{product.name}</h3>
              </div>
            </div>
            <p className="text-brand-charcoal/80 mb-4 line-clamp-2">
              {product.description}
            </p>
            <a
              href={product.link}
              className="inline-flex items-center text-brand-caramel font-medium hover:text-brand-chocolate transition-colors"
            >
              {product.linkText} <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="large" onClick={handleViewFullMenu}>
          View Full Menu
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedCollection;
