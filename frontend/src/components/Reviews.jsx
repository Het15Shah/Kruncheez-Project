import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./Section";
import Button from "./Button";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Anand",
      rating: 5,
      date: "2 days ago",
      review:
        "Absolutely loved the Biscoff cheesecake! It was creamy, rich, and had the perfect balance of flavors. The presentation was beautiful too. Will definitely order again!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&auto=format&fit=crop",
      product: "Biscoff Cheesecake",
    },
    {
      id: 2,
      name: "Rahul Patel",
      location: "Vallabh Vidyanagar",
      rating: 5,
      date: "1 week ago",
      review:
        "Ordered a custom birthday cake for my wife and it was perfect! The design was exactly what I wanted and the taste was incredible. Highly recommend their custom cakes!",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      product: "Custom Birthday Cake",
    },
    {
      id: 3,
      name: "Anjali Desai",
      location: "Ahmedabad",
      rating: 4,
      date: "2 weeks ago",
      review:
        "The blueberry cheesecake was amazing! Fresh ingredients and you can tell they put a lot of love into their baking. Delivery was on time and packaging was great.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
      product: "Blueberry Cheesecake",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Section backgroundColor="white" id="reviews">
      <div className="text-center mb-16">
        <span className="text-brand-caramel font-medium tracking-widest uppercase text-sm">
          Testimonials
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-espresso mt-3 mb-6">
          What Our Customers Say
        </h2>
        <p className="text-brand-charcoal/70 max-w-2xl mx-auto">
          Real reviews from real customers who have experienced the magic of
          Kruncheez.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Review Card */}
        <div className="relative bg-brand-cream rounded-3xl p-8 md:p-12 shadow-lg">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-brand-caramel/20">
            <Quote size={48} />
          </div>

          <div className="relative z-10">
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              {renderStars(reviews[currentReview].rating)}
              <span className="text-brand-charcoal font-medium ml-2">
                {reviews[currentReview].rating}.0
              </span>
            </div>

            {/* Review Text */}
            <blockquote className="text-lg md:text-xl text-brand-espresso mb-8 leading-relaxed font-medium">
              "{reviews[currentReview].review}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={reviews[currentReview].avatar}
                  alt={reviews[currentReview].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-serif text-lg text-brand-espresso font-semibold">
                    {reviews[currentReview].name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-brand-charcoal/60">
                    <span>{reviews[currentReview].location}</span>
                    <span>•</span>
                    <span>{reviews[currentReview].date}</span>
                  </div>
                  <p className="text-sm text-brand-caramel font-medium mt-1">
                    Ordered: {reviews[currentReview].product}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-full bg-white text-brand-espresso hover:bg-brand-caramel hover:text-white transition-colors shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 rounded-full bg-white text-brand-espresso hover:bg-brand-caramel hover:text-white transition-colors shadow-sm"
                  aria-label="Next review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-2 mt-6 md:hidden">
          <button
            onClick={prevReview}
            className="p-2 rounded-full bg-brand-cream text-brand-espresso hover:bg-brand-caramel hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextReview}
            className="p-2 rounded-full bg-brand-cream text-brand-espresso hover:bg-brand-caramel hover:text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Review Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentReview
                  ? "bg-brand-caramel"
                  : "bg-brand-charcoal/20"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-brand-espresso mb-2">
            4.8/5
          </div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {renderStars(5)}
          </div>
          <p className="text-brand-charcoal/70">Average Rating</p>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-brand-espresso mb-2">
            600+
          </div>
          <p className="text-brand-charcoal/70">Happy Customers</p>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-serif font-bold text-brand-espresso mb-2">
            1000+
          </div>
          <p className="text-brand-charcoal/70">Orders Delivered</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button variant="primary" size="lg">
          Write a Review
        </Button>
      </div>
    </Section>
  );
};

export default Reviews;
