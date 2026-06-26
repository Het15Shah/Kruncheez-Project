import { motion } from "framer-motion";

const ContactFooter = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/kruncheezcafe/",
      icon: (
        <img
          src="data:image/jpeg;base64,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"
          alt="Instagram"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com/kruncheezcafe",
      icon: (
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/053/986/346/small_2x/facebook-icon-logo-symbol-free-png.png"
          alt="Facebook"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Zomato",
      url: "https://www.zomato.com/anand/kruncheez-cafe-patisserie-vallabh-vidyanagar/order",
      icon: (
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-zomato-logo-icon-svg-download-png-1637644.png"
          alt="Zomato"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      name: "Swiggy",
      url: "https://www.swiggy.com/city/anand/kruncheez-cafe-and-patisserie-townhall-b-s-nehru-park-rest152576",
      icon: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqDecYNB4XzOS5TFHmIBXBgf_DMPzKttsmw&s"
          alt="Swiggy"
          className="w-full h-full object-cover"
        />
      ),
    },
  ];

  return (
    <footer className="relative bg-deep-espresso text-cream overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-warm-caramel rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
            {/* COLUMN 1: Brand & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Kruncheez
                </h3>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-full bg-cream text-deep-espresso flex items-center justify-center hover:bg-warm-caramel hover:text-cream transition-all duration-300 shadow-lg"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <p className="text-cream/70 text-sm leading-relaxed">
                  Anand's premier artisanal cafe and patisserie. Handcrafted
                  with love since 2020.
                </p>
              </motion.div>
            </div>

            {/* COLUMN 2: Opening Hours */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="text-cream text-xl font-serif font-semibold mb-4 pb-3 border-b-2 border-warm-caramel inline-block">
                  Opening Hours
                </h4>

                <div className="mt-6 space-y-3">
                  <h5 className="text-sm text-cream/60 mb-2">Working Days</h5>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cream/70">Monday - Sunday</span>
                  </div>
                  <div className="text-lg font-medium">10:00 AM - 10:30 PM</div>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">
                      Open Now
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* COLUMN 3: Contact Us */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="text-cream text-xl font-serif font-semibold mb-4 pb-3 border-b-2 border-warm-caramel inline-block">
                  Contact Us
                </h4>

                <div className="mt-6 space-y-4">
                  <div>
                    <h5 className="text-sm text-cream/60 mb-2">Phone</h5>

                    <a
                      href="tel:+919876543210"
                      className="text-cream hover:text-warm-caramel transition-colors block"
                    >
                      +91 98765 43210
                    </a>
                  </div>

                  <div>
                    <h5 className="text-sm text-cream/60 mb-2">Email</h5>
                    <a
                      href="mailto:orders@kruncheez.com"
                      className="text-cream hover:text-warm-caramel transition-colors block text-sm"
                    >
                      orders@kruncheez.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* COLUMN 4: Address */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-cream text-xl font-serif font-semibold mb-4 pb-3 border-b-2 border-warm-caramel inline-block">
                  Address
                </h4>

                <div className="mt-6">
                  <p className="text-cream/80 text-sm leading-relaxed">
                    2/Vaishnav Parivar,
                    <br />
                    B/s Nehru Park, Sardarganj,
                    <br />
                    Anand, Gujarat 388001
                  </p>

                  <a
                    href="/locations"
                    className="inline-block mt-4 text-warm-caramel hover:text-cream transition-colors text-sm font-medium"
                  >
                    View All Locations →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Policy Links Bar */}
        <div className="border-t border-cream/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
                { name: "Refund & Cancellation", href: "/refunds" },
                { name: "Shipping / Delivery Policy", href: "/delivery" },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-2 bg-cream/5 hover:bg-cream/10 rounded-full text-sm text-cream/70 hover:text-cream transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-cream/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
              <p>
                {new Date().getFullYear()} © Kruncheez Cafe & Patisserie. All
                Rights Reserved.
              </p>
              <p className="text-xs">
                Designed with <span className="text-warm-caramel">♥</span> for
                food lovers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </motion.a>

        <motion.a
          href="tel:+919876543210"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-warm-caramel to-rich-chocolate text-white flex items-center justify-center shadow-2xl hover:shadow-warm-caramel/50 transition-all duration-300"
          aria-label="Call"
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
};

export default ContactFooter;
