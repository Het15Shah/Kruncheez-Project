import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const CustomCakesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Refs for sections
  const dreamCakeSectionRef = useRef(null);
  const sweetCelebrationsSectionRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    if (sectionId === "dream-cake-section") {
      dreamCakeSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (sectionId === "sweet-celebrations") {
      sweetCelebrationsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const categories = [
    { id: "all", name: "All Cakes" },
    { id: "wedding", name: "Wedding" },
    { id: "birthday", name: "Birthday" },
    { id: "anniversary", name: "Anniversary" },
    { id: "corporate", name: "Corporate" },
  ];

  const showcaseCakes = [
    {
      id: 1,
      category: "wedding",
      image:
        "https://i0.wp.com/bakeoffcakes.in/wp-content/uploads/2025/08/IMG_3305.jpeg?fit=2225%2C2225&ssl=1",
      customerName: "Priya & Arjun",
      occasion: "Wedding",
      testimonial:
        "The three-tier white cake with fresh roses was absolutely stunning. Every detail was perfect, and our guests are still talking about how beautiful and delicious it was!",
      customerImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      rating: 5,
    },
    {
      id: 2,
      category: "birthday",
      image:
        "https://cakestry15.com/cdn/shop/files/Chocolate_Princess_Birthday_Cake_2kg_6th_birthday_for_a_girl_by_cakestry15_noida_cake_full_image.webp?v=1747649405&width=1946",
      customerName: "Sharma Family",
      occasion: "6th Birthday",
      testimonial:
        "My daughter's unicorn cake was magical! The colors were vibrant, the design was exactly what she dreamed of. Kruncheez made her birthday truly special.",
      customerImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      rating: 5,
    },
    {
      id: 3,
      category: "anniversary",
      image:
        "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80",
      customerName: "Desai Couple",
      occasion: "25th Anniversary",
      testimonial:
        "The heart-shaped red velvet cake was perfection. Beautifully decorated with roses and the taste was divine. Thank you for making our silver jubilee memorable!",
      customerImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      rating: 5,
    },
    {
      id: 4,
      category: "corporate",
      image:
        "https://cdn-efohi.nitrocdn.com/nzhjCTbLRQsVpZZpEWBzEjrDSwxMfKMK/assets/images/optimized/rev-e5fe3af/yummycake.in/wp-content/uploads/2023/07/company-anniversary-cake.png",
      customerName: "TechVision Solutions",
      occasion: "Company Milestone",
      testimonial:
        "Professional logo cake for our 10-year celebration. The branding was spot-on, design was elegant, and it tasted amazing. Highly recommend for corporate events!",
      customerImage:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
      rating: 5,
    },
    {
      id: 5,
      category: "birthday",
      image:
        "https://i.pinimg.com/736x/1e/c9/93/1ec99367b65b8f03d9e4b273dbebf8fe.jpg",
      customerName: "Patel Family",
      occasion: "Sweet 16",
      testimonial:
        "The pink rose cake was absolutely gorgeous! My daughter loved every detail. The team listened to all our requirements and delivered beyond expectations.",
      customerImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
      rating: 5,
    },
    {
      id: 6,
      category: "wedding",
      image:
        "https://www.expressluv.com/cdn/shop/files/Screenshot_2023-05-01-23-35-35-52_7352322957d4404136654ef4adb64504_a6fefcd9-b9f8-4b9e-a6e3-c2445cabf6d5_992x.jpg?v=1760358414",
      customerName: "Mehta Wedding",
      occasion: "Wedding Reception",
      testimonial:
        "Elegant multi-tier cake with gold details. It was the centerpiece of our reception. Beautiful presentation and tasted incredible. Worth every rupee!",
      customerImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      rating: 5,
    },
  ];

  const filteredCakes =
    selectedCategory === "all"
      ? showcaseCakes
      : showcaseCakes.filter((cake) => cake.category === selectedCategory);

  const handleWhatsApp = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
      "Hi! I'm interested in ordering a custom cake from Kruncheez.",
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    const phoneNumber = "+919876543210"; // Replace with actual phone number
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  const handleDirections = () => {
    const address = encodeURIComponent("Kruncheez Cafe, Your Address Here"); // Replace with actual address
    window.open(`https://maps.google.com/?q=${address}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-linear-to-b bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-warm-caramel"></div>
              <span className="text-warm-caramel uppercase tracking-[0.3em] text-xs font-medium">
                Custom Creations
              </span>
              <div className="w-12 h-0.5 bg-warm-caramel"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-deep-espresso leading-tight mb-4 sm:mb-6"
            >
              Custom Cakes Made
              <br />
              <span className="text-warm-caramel">Just For You</span>
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-charcoal/70 leading-relaxed mb-10"
            >
              Each cake is a handcrafted masterpiece, designed to celebrate your unique moments. 
              From elegant weddings to joyful birthdays, we bring your vision to life.
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="primary"
                size="large"
                className="shadow-xl"
                onClick={() => scrollToSection("dream-cake-section")}
              >
                Start Your Order
              </Button>
              <Button
                variant="outline"
                size="large"
                className="border-2"
                onClick={() => scrollToSection("sweet-celebrations")}
              >
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-warm-caramel/10 py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-warm-caramel text-white shadow-lg"
                    : "bg-white text-charcoal hover:bg-white/80 hover:shadow-md"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Stories with Their Cakes */}
      <section
        ref={sweetCelebrationsSectionRef}
        id="sweet-celebrations"
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-4"
            >
              Sweet Celebrations
            </motion.h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Real customers, real cakes, real memories. See how we've made
              special moments unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            <AnimatePresence mode="wait">
              {filteredCakes.map((cake, index) => (
                <motion.div
                  key={cake.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Cake Photo */}
                  <div
                    className="relative h-80 overflow-hidden cursor-pointer"
                    onClick={() => setLightboxImage(cake)}
                  >
                    <img
                      src={cake.image}
                      alt={`${cake.customerName}'s ${cake.occasion} Cake`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-deep-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Occasion Badge */}
                    <div className="absolute top-4 right-4 bg-warm-caramel text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {cake.occasion}
                    </div>

                    {/* View Icon */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5 text-deep-espresso"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Customer Testimonial */}
                  <div className="p-6">
                    {/* Customer Info */}
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={cake.customerImage}
                        alt={cake.customerName}
                        className="w-12 h-12 rounded-full object-cover border-2 border-warm-caramel"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif font-bold text-deep-espresso text-lg">
                          {cake.customerName}
                        </h3>
                        {/* Star Rating */}
                        <div className="flex text-yellow-500 text-sm">
                          {[...Array(cake.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-charcoal/80 leading-relaxed italic text-sm">
                      "{cake.testimonial}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-4"
            >
              How It Works
            </motion.h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Four simple steps to your dream custom cake
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
            {[
              {
                step: "01",
                title: "Share Your Vision",
                description:
                  "Tell us about your celebration, theme, colors, and design ideas through our form or WhatsApp",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Design Consultation",
                description:
                  "Our cake artists create a custom design sketch and share it with you for approval",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Handcrafted Creation",
                description:
                  "Our artisans bring your approved design to life with premium ingredients and meticulous care",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Fresh Delivery",
                description:
                  "Your masterpiece is delivered fresh on your celebration day, ready to create memories",
                icon: (
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-warm-caramel/20 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 z-10">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-warm-caramel text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="text-warm-caramel mb-4 flex justify-center mt-6">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-deep-espresso mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Create Together - Redesigned */}
      <section
        ref={dreamCakeSectionRef}
        id="dream-cake-section"
        className="py-20 md:py-32 bg-white relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-warm-caramel/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-blush/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-deep-espresso mb-4"
            >
              Let's Create Your Dream Cake
            </motion.h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Choose how you'd like to start — every journey begins with a
              conversation
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 px-4">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-500/20">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  Chat on WhatsApp
                </h3>

                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Quick questions or instant ideas? Chat directly with our cake
                  artists for immediate assistance.
                </p>

                <Button
                  variant="outline"
                  size="medium"
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white group-hover:shadow-lg"
                  onClick={handleWhatsApp}
                >
                  <span className="flex items-center justify-center gap-2">
                    Start Chat
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </Button>

                <p className="text-xs text-charcoal/50 mt-4 text-center">
                  Usually replies within 5 minutes
                </p>
              </div>
            </motion.div>

            {/* Call & Consultation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-warm-caramel/20">
                <div className="w-16 h-16 bg-linear-to-br from-warm-caramel to-rich-chocolate rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  Schedule a Call
                </h3>

                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Book a consultation with our senior cake designer to discuss
                  your requirements in depth.
                </p>

                <Button
                  variant="outline"
                  size="medium"
                  className="w-full border-2 border-warm-caramel text-warm-caramel hover:bg-warm-caramel hover:text-white group-hover:shadow-lg"
                  onClick={handleCall}
                >
                  <span className="flex items-center justify-center gap-2">
                    Book Consultation
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </Button>

                <p className="text-xs text-charcoal/50 mt-4 text-center">
                  Free 15-minute consultation
                </p>
              </div>
            </motion.div>

            {/* Visit Studio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-500/20">
                <div className="w-16 h-16 bg-linear-to-br from-black-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-serif font-bold text-deep-espresso mb-3">
                  Visit Us
                </h3>

                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  Visit our kitchen, meet the team, and taste our creations &
                  discuss in person.
                </p>

                <Button
                  variant="outline"
                  size="medium"
                  className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white group-hover:shadow-lg"
                  onClick={handleDirections}
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Directions
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                  </span>
                </Button>

                <p className="text-xs text-charcoal/50 mt-4 text-center">
                  Open Mon-Sun, 10 AM - 10:30 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-deep-espresso/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full cursor-default"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left: Cake Image */}
                  <img
                    src={lightboxImage.image}
                    alt={lightboxImage.occasion}
                    className="w-full h-96 md:h-full object-cover"
                  />

                  {/* Right: Details */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-2 bg-warm-caramel/10 text-warm-caramel rounded-full text-sm font-medium mb-4">
                        {lightboxImage.occasion}
                      </span>
                      <h3 className="text-3xl font-serif font-bold text-deep-espresso mb-4">
                        {lightboxImage.customerName}
                      </h3>
                      <div className="flex text-yellow-500 mb-4">
                        {[...Array(lightboxImage.rating)].map((_, i) => (
                          <span key={i} className="text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-charcoal/80 leading-relaxed italic text-lg mb-6">
                      "{lightboxImage.testimonial}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-warm-caramel/20">
                      <img
                        src={lightboxImage.customerImage}
                        alt={lightboxImage.customerName}
                        className="w-16 h-16 rounded-full object-cover border-2 border-warm-caramel"
                      />
                      <div>
                        <p className="font-semibold text-deep-espresso">
                          {lightboxImage.customerName}
                        </p>
                        <p className="text-sm text-charcoal/60">
                          Verified Customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-espresso hover:bg-warm-caramel hover:text-white transition-colors shadow-xl"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCakesPage;
