import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from './Section';
import Button from './Button';

const FeaturedMenu = () => {
  return (
    <Section backgroundColor="white" id="menu">
      <div className="text-center mb-16">
        <span className="text-brand-caramel font-medium tracking-widest uppercase text-sm">Our Specialties</span>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-espresso mt-3 mb-6">Signature Collections</h2>
        <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
          Every item at Kruncheez is a labor of love, crafted with premium ingredients and traditional techniques to bring you the authentic taste of luxury.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop" 
              alt="Signature Cheesecakes" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-display italic text-lg mb-1">Best Seller</p>
              <h3 className="font-serif text-2xl">Artisanal Cheesecakes</h3>
            </div>
          </div>
          <p className="text-brand-charcoal/80 mb-4 line-clamp-2">
            Our famous Biscoff and Blueberry cheesecakes, creamy, rich, and baked to perfection.
          </p>
          <a href="#" className="inline-flex items-center text-brand-caramel font-medium hover:text-brand-chocolate transition-colors">
            View Varieties <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {/* Card 2 */}
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800&auto=format&fit=crop" 
              alt="Custom Cakes" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-display italic text-lg mb-1">For Special Days</p>
              <h3 className="font-serif text-2xl">Custom Celebration Cakes</h3>
            </div>
          </div>
          <p className="text-brand-charcoal/80 mb-4 line-clamp-2">
            Bespoke designs for weddings, birthdays, and anniversaries. You dream it, we bake it.
          </p>
          <a href="#" className="inline-flex items-center text-brand-caramel font-medium hover:text-brand-chocolate transition-colors">
            Start Designing <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        {/* Card 3 */}
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5]">
            <img 
              src="https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&w=800&auto=format&fit=crop" 
              alt="Savory Cafe Menu" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-display italic text-lg mb-1">Cafe Dining</p>
              <h3 className="font-serif text-2xl">Italian & Mexican Savories</h3>
            </div>
          </div>
          <p className="text-brand-charcoal/80 mb-4 line-clamp-2">
            Authentic pastas, wood-fired pizzas, and gourmet sandwiches served fresh in our cafe.
          </p>
          <a href="#" className="inline-flex items-center text-brand-caramel font-medium hover:text-brand-chocolate transition-colors">
            Explore Cafe Menu <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

      </div>
      
      <div className="mt-16 text-center">
        <Button variant="outline" size="lg">View Full Menu</Button>
      </div>
    </Section>
  );
};

export default FeaturedMenu;
