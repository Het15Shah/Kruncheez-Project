import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const LocationsSection = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 0,
      name: "Vallabh Vidyanagar Flagship",
      address: "2/Vaishnav Parivar, B/s Nehru Park, Sardarganj",
      city: "Anand, Gujarat 388001",
      phone: "+91 98765 43210",
      hours: "10:00 AM - 10:30 PM",
      daysOpen: "Monday - Sunday",
      description:
        "Our flagship location featuring the complete menu, custom cake consultations, and spacious seating for celebrations.",
      features: [
        "Full Menu",
        "Custom Cakes",
        "Dine-In",
        "Takeaway",
        "Delivery",
      ],
      images: [
        "/images/location1-interior.jpg",
        "/images/location1-exterior.jpg",
        "/images/location1-seating.jpg",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.538160667554!2d72.94948807559858!3d22.558966979501463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e842722895d%3A0xa404eea11d33ff4f!2sKruncheez%20Cafe!5e0!3m2!1sen!2sin!4v1770614851096!5m2!1sen!2sin",
      // <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      coordinates: { lat: 22.559085874503385, lng: 72.95206299619456 },
    },
    {
      id: 1,
      name: "Sardarganj Express",
      address: "Near Town Hall, Sardarganj Main Road",
      city: "Anand, Gujarat 388001",
      phone: "+91 98765 43211",
      hours: "11:00 AM - 10:00 PM",
      daysOpen: "Monday - Sunday",
      images: [
        "/images/location1-interior.jpg",
        "/images/location1-exterior.jpg",
        "/images/location1-seating.jpg",
      ],
      description:
        "Quick service location perfect for grab-and-go treats, featuring our bestselling items and express ordering.",
      features: ["Quick Service", "Bestsellers", "Takeaway", "Delivery"],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.632641197275!2d73.11779298301505!3d22.29190142733158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc95dc8deead3%3A0x151f605e0ce90e5!2sKruncheez%20cafe%20Vadodara!5e0!3m2!1sen!2sin!4v1770615225045!5m2!1sen!2sin",

      coordinates: { lat: 22.292000697281697, lng: 73.12270678981903 },
    },
  ];

  const handleGetDirections = (location) => {
    const { lat, lng } = location.coordinates;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank",
    );
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-warm-caramel/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-soft-blush/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-warm-caramel"></div>
            <span className="text-warm-caramel uppercase tracking-[0.3em] text-xs font-medium">
              Find Us
            </span>
            <div className="w-12 h-[2px] bg-warm-caramel"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-deep-espresso mb-6"
          >
            Visit Our Locations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed"
          >
            Experience our artisanal creations at our cozy cafes across Anand.
            Fresh, handcrafted, and made with love daily.
          </motion.p>
        </div>

        {/* Main Content: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* LEFT SIDE: Location Cards - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onClick={() => setActiveLocation(index)}
                className={`
                  relative p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-500
                  ${
                    activeLocation === index
                      ? "bg-white shadow-2xl shadow-warm-caramel/20 border-2 border-warm-caramel"
                      : "bg-white/50 hover:bg-white hover:shadow-xl border-2 border-transparent hover:border-warm-caramel/30"
                  }
                `}
              >
                {/* Active Indicator */}
                {activeLocation === index && (
                  <motion.div
                    layoutId="activeLocation"
                    className="absolute -left-1 top-8 bottom-8 w-1 bg-warm-caramel rounded-r-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Location Title */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-deep-espresso mb-3">
                  {location.name}
                </h3>

                {/* Description */}
                {/* <p className="text-charcoal/70 leading-relaxed mb-6">
                  {location.description}
                </p> */}

                {/* Address & Contact Info */}
                <div className="space-y-3 mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-full h-full text-warm-caramel"
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
                    <div>
                      <p className="text-charcoal font-medium">
                        {location.address}
                      </p>
                      <p className="text-charcoal/60 text-sm">
                        {location.city}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex-shrink-0">
                      <svg
                        className="w-full h-full text-warm-caramel"
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
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="text-charcoal hover:text-warm-caramel transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 flex-shrink-0">
                      <svg
                        className="w-full h-full text-warm-caramel"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-charcoal font-medium">
                        {location.hours}
                      </p>
                      <p className="text-charcoal/60 text-sm">
                        {location.daysOpen}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Tags
                <div className="flex flex-wrap gap-2 mb-6">
                  {location.features.map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-warm-caramel/10 text-warm-caramel text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div> */}

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGetDirections(location);
                  }}
                  className="w-full group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Directions
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT SIDE: Interactive Map - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative"
          >
            {/* Map Container */}
            <div className="sticky top-24 rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Google Maps Embed */}
              <iframe
                src={locations[activeLocation].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title={`Map of ${locations[activeLocation].name}`}
              />

              {/* Location Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-charcoal/60 uppercase tracking-wider mb-1">
                      Now Viewing
                    </p>
                    <p className="text-lg font-serif font-bold text-deep-espresso">
                      {locations[activeLocation].name}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      handleGetDirections(locations[activeLocation])
                    }
                    className="w-12 h-12 bg-warm-caramel text-cream rounded-full flex items-center justify-center hover:bg-rich-chocolate transition-colors shadow-lg hover:shadow-xl"
                    aria-label="Open in Google Maps"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Location Switcher Dots (mobile/tablet) */}
            <div className="flex lg:hidden justify-center gap-3 mt-6">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`
                    transition-all duration-300
                    ${
                      activeLocation === index
                        ? "w-12 h-3 bg-warm-caramel"
                        : "w-3 h-3 bg-warm-caramel/30 hover:bg-warm-caramel/50"
                    }
                    rounded-full
                  `}
                  aria-label={`View ${locations[index].name}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Delivery CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-soft-blush/50 to-warm-caramel/10 rounded-3xl p-8 md:p-12 border border-warm-caramel/20">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-warm-caramel/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-warm-caramel"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-deep-espresso mb-4">
                Can't Visit? We Deliver!
              </h3>

              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Enjoy Kruncheez's artisanal creations from the comfort of your
                home. Free delivery on orders above ₹500 across Anand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="large" className="shadow-xl">
                  Order Online
                </Button>
                <Button variant="outline" size="large" className="border-2">
                  View Delivery Areas
                </Button>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm text-charcoal/70">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-warm-caramel flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>30-45 min delivery</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-warm-caramel flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Fresh & hygienically packed</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 text-warm-caramel flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Multiple payment options</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
