import Section from "./Section";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const SocialProof = () => {
  const navigate = useNavigate();

  const handleViewFullMenu = () => {
    navigate("/menu");
  };

  return (
    <Section background="soft-blush" padding="large">
      <div className="fade-in">
        {/* Trust Badges Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-deep-espresso mb-4">
            Trusted by Anand's Food Lovers
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made Kruncheez their
            go-to destination for artisanal desserts and culinary experiences.
          </p>
        </div>

        {/* Trust Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-warm-caramel mb-2">
              4.4/5
            </div>
            <div className="text-sm text-charcoal font-medium">
              Average Rating
            </div>
            <div className="flex justify-center mt-1">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-warm-caramel mb-2">
              600+
            </div>
            <div className="text-sm text-charcoal font-medium">
              Customer Reviews
            </div>
            <div className="text-xs text-gray-600 mt-1">Verified Reviews</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-warm-caramel mb-2">
              500+
            </div>
            <div className="text-sm text-charcoal font-medium">
              Custom Cakes
            </div>
            <div className="text-xs text-gray-600 mt-1">
              Celebrations Delivered
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-warm-caramel mb-2">
              ₹500+
            </div>
            <div className="text-sm text-charcoal font-medium">
              Free Delivery
            </div>
            <div className="text-xs text-gray-600 mt-1">On Orders Above</div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif text-deep-espresso text-center mb-8">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-charcoal mb-4 italic">
                "The Biscoff cheesecake is absolutely divine! Perfect balance of
                sweetness and texture. Will definitely order again!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-warm-caramel rounded-full flex items-center justify-center text-cream font-bold mr-3">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BODBmMjA4NDEtNGY2MS00YTVmLThlM2QtMTBhODdjYjQ5Njk5XkEyXkFqcGc@._V1_.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-deep-espresso">Raj S.</div>
                  <div className="text-sm text-gray-600">Anand</div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-charcoal mb-4 italic">
                "Ordered a custom birthday cake and it exceeded all
                expectations! Beautiful design and delicious taste. Highly
                recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-warm-caramel rounded-full flex items-center justify-center text-cream font-bold mr-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPc1PnrR5TPx6R5nGlRLvIKPfBOOT3UDpBNQ&s"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-deep-espresso">Rahul M.</div>
                  <div className="text-sm text-gray-600">Vadodara</div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-charcoal mb-4 italic">
                "The pasta dishes are authentic and the cheesecakes are to die
                for! Great quality and fast delivery. Kruncheez is my favorite!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-warm-caramel rounded-full flex items-center justify-center text-cream font-bold mr-3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGvmpUvoV9bjZt2Gs4ICO4NEIdG7LdT4xuw&s"
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-medium text-deep-espresso">
                    Anjali P.
                  </div>
                  <div className="text-sm text-gray-600">Anand</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-charcoal mb-6">
            Ready to experience the best artisanal desserts in Anand?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large" onClick={handleViewFullMenu}>
              Order Now
            </Button>
            <Button variant="outline" size="large">
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SocialProof;
