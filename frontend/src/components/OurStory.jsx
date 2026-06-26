import Button from "./Button";
import { useNavigate } from "react-router-dom";
import kruncheezelogo from "../assets/kruncheezelogo.png";
import cake from "../assets/cake.png";

const OurStorySection = () => {
  const navigate = useNavigate();

  const handleReadOurStory = () => {
    navigate("/our-story");
  };

  return (
    <section className="min-h-screen bg-white overflow-hidden flex items-center py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Grid Layout: Images Left, Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center flex-1">
          {/* LEFT: Image Collage */}
          <div className="relative order-2 lg:order-1">
            {/* Main Large Image - Cafe Interior */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-warm-caramel/20 fade-in-on-scroll"
              style={{ aspectRatio: "4/5" }}
            >
              <img
                src={kruncheezelogo}
                alt="Kruncheez Cafe Interior - Cozy Ambiance"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for warmth */}
              <div className="absolute inset-0 bg-linear-to-t from-deep-espresso/30 to-transparent"></div>
            </div>

            {/* Small Accent Image - Signature Drink/Dessert */}
            <div className="absolute -top-8 -left-8 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-cream rotate-6 hover:rotate-0 transition-transform duration-500 fade-in-on-scroll-delay">
              <img
                src={cake}
                alt="Kruncheez Signature Dessert"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Element - Years Badge */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-warm-caramel rounded-full border-4 border-cream flex items-center justify-center shadow-2xl z-10 hover:rotate-0 transition-transform duration-500 fade-in-on-scroll-delay">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-cream">
                  5+
                </div>
                <div className="text-xs text-cream/90 uppercase tracking-wider">
                  Years
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Story Content */}
          <div className="order-1 lg:order-2 fade-in-on-scroll">
            {/* Section Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-warm-caramel"></div>
              <span className="text-warm-caramel font-medium text-sm tracking-widest uppercase">
                Our Story
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-espresso leading-tight mb-6">
              Where Passion Meets
              <br />
              <span className="text-warm-caramel">Perfection</span>
            </h2>

            {/* Story Teaser - Keep it Short & Emotional */}
            <div className="space-y-5 text-lg text-charcoal/80 leading-relaxed mb-8">
              <p>
                At Kruncheez, we believe that every celebration deserves a
                masterpiece. What started as a dream in 2020 has blossomed into
                Anand's most beloved patisserie.
              </p>

              <p>
                From our signature Biscoff cheesecakes to authentic Italian
                pastas, every creation is handcrafted with love, premium
                ingredients, and an unwavering commitment to excellence.
              </p>

              <p className="text-warm-caramel font-medium italic">
                "We don't just bake — we create memories that linger long after
                the last bite."
              </p>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleReadOurStory}
              variant="primary"
              size="large"
              className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Read Our Story
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Button>

            {/* Trust Metrics - Optional */}
            <div className="flex items-center gap-8 mt-10 pt-10 border-t border-warm-caramel/20">
              <div>
                <div className="text-3xl font-serif font-bold text-deep-espresso">
                  10K+
                </div>
                <div className="text-sm text-charcoal/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-deep-espresso">
                  5K+
                </div>
                <div className="text-sm text-charcoal/60">
                  Custom Cakes Created
                </div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-deep-espresso">
                  4.4★
                </div>
                <div className="text-sm text-charcoal/60">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
