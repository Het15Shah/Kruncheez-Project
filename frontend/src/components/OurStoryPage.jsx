import { useEffect } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import kruncheezelogo from "../assets/kruncheezelogo.png";
import cake from "../assets/cake.png";
import "../CSS/ourstoryanimation.css";
const OurStoryPage = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* HERO SECTION - Full Width Image with Overlay Text */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://b.zmtcdn.com/data/pictures/4/18947094/88c8fb854e06b3ac0f25ad3551022554.jpg"
            alt="Kruncheez Cafe - Our Journey"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-b from-deep-espresso/70 via-deep-espresso/50 to-white"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6 fade-in">
            <div className="w-16 h-[2px] bg-warm-caramel"></div>
            <span className="text-warm-caramel font-medium text-sm tracking-widest uppercase">
              Est. 2020
            </span>
            <div className="w-16 h-[2px] bg-warm-caramel"></div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-cream mb-6 leading-tight fade-in-delay-1">
            Our Story
          </h1>

          <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto fade-in-delay-2">
            A journey from a small kitchen to Anand's most cherished patisserie
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cream rounded-full"></div>
          </div>
        </div>
      </section>

      {/* THE BEGINNING */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
                  alt="The Beginning - Small Kitchen Dreams"
                  className="w-full aspect-square object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-warm-caramel font-medium text-sm tracking-widest uppercase">
                  Chapter 1
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-6 leading-tight">
                The Beginning
              </h2>

              <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  In 2020, Kruncheez was born from a simple yet powerful dream:
                  to bring artisanal European desserts to the heart of Anand.
                  Our founder, a passionate baker trained in the art of French
                  patisserie, started with a small kitchen and an unwavering
                  commitment to quality.
                </p>

                <p>
                  The first Biscoff cheesecake we ever made was for a friend's
                  birthday. The reaction was overwhelming — "This tastes like
                  it's from a 5-star hotel!" That moment changed everything.
                </p>

                <p className="text-warm-caramel font-medium italic">
                  "If we can make one person's celebration unforgettable, we've
                  succeeded."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-charcoal/70">
              Milestones that shaped Kruncheez
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* 2020 */}
            <div className="flex gap-8 items-start group">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-5xl font-serif font-bold text-warm-caramel">
                  2020
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-warm-caramel group-hover:scale-150 transition-transform"></div>
                <div className="w-0.5 h-full bg-warm-caramel/30"></div>
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  The Dream Takes Shape
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Kruncheez opens its first location in Vallabh Vidyanagar. We
                  start with just 5 signature cheesecakes and a small menu of
                  Italian dishes.
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div className="flex gap-8 items-start group">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-5xl font-serif font-bold text-warm-caramel">
                  2021
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-warm-caramel group-hover:scale-150 transition-transform"></div>
                <div className="w-0.5 h-full bg-warm-caramel/30"></div>
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  Growing Community
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We hit 1,000 custom cakes created! Our Instagram community
                  grows to 10K+ followers. We introduce our famous Kunafa
                  Chocolate bars.
                </p>
              </div>
            </div>

            {/* 2022 */}
            <div className="flex gap-8 items-start group">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-5xl font-serif font-bold text-warm-caramel">
                  2022
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-warm-caramel group-hover:scale-150 transition-transform"></div>
                <div className="w-0.5 h-full bg-warm-caramel/30"></div>
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  Expansion
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Second location opens in Sardarganj! We're now serving 500+
                  customers daily and have become Anand's go-to destination for
                  celebrations.
                </p>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex gap-8 items-start group">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-5xl font-serif font-bold text-warm-caramel">
                  2023
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-warm-caramel group-hover:scale-150 transition-transform"></div>
                <div className="w-0.5 h-full bg-warm-caramel/30"></div>
              </div>
              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  Awards & Recognition
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Featured in Gujarat's Top 10 Cafes. We achieve 600+ five-star
                  reviews across all platforms. Launch our catering service for
                  corporate events.
                </p>
              </div>
            </div>

            {/* 2024-2025 */}
            <div className="flex gap-8 items-start group">
              <div className="flex-shrink-0 w-32 text-right">
                <div className="text-5xl font-serif font-bold text-warm-caramel">
                  2025
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-warm-caramel group-hover:scale-150 transition-transform"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  The Future
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  We launch our website for seamless online ordering, introduce
                  monthly limited-edition flavors, and continue our mission:
                  creating sweet memories, one bite at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              The values that guide every cake we bake, every dish we serve
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1: Craftsmanship */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-warm-caramel/10 rounded-full flex items-center justify-center group-hover:bg-warm-caramel transition-colors duration-300">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  👨‍🍳
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                Craftsmanship
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Every product is handcrafted by skilled artisans. We never cut
                corners, never compromise on quality.
              </p>
            </div>

            {/* Value 2: Premium Ingredients */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-warm-caramel/10 rounded-full flex items-center justify-center group-hover:bg-warm-caramel transition-colors duration-300">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  ✨
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                Premium Ingredients
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                From Belgian chocolate to fresh local dairy, we source only the
                finest ingredients for our creations.
              </p>
            </div>

            {/* Value 3: Customer Love */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-warm-caramel/10 rounded-full flex items-center justify-center group-hover:bg-warm-caramel transition-colors duration-300">
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  ❤️
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                Customer Love
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                You're not just a customer — you're family. Your celebrations
                are our celebrations, your joy is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="py-20 md:py-32 bg-soft-blush/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-4">
              Moments We've Created
            </h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800"
                alt="Custom Birthday Cake"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=400"
                alt="Cafe Interior"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"
                alt="Signature Dessert"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
                alt="Happy Customers"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-1">
              <img
                src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400"
                alt="Artisanal Process"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-2">
              <img
                src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600"
                alt="Team Crafting"
                className="w-full h-full object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-espresso mb-6 leading-tight">
            Be Part of
            <br />
            <span className="text-warm-caramel">Our Story</span>
          </h2>

          <p className="text-xl text-charcoal/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Every customer adds a new chapter to the Kruncheez story. Let's
            create something unforgettable together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button variant="primary" size="large" className="shadow-2xl">
                Explore Our Menu
              </Button>
            </Link>

            <Link to="/custom-cakes">
              <Button variant="outline" size="large" className="border-2">
                Design Your Cake
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-16 border-t border-warm-caramel/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-serif font-bold text-deep-espresso mb-2">
                  10,000+
                </div>
                <div className="text-sm text-charcoal/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-deep-espresso mb-2">
                  5,000+
                </div>
                <div className="text-sm text-charcoal/60">
                  Custom Cakes Created
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-deep-espresso mb-2">
                  600+
                </div>
                <div className="text-sm text-charcoal/60">
                  Five-Star Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
