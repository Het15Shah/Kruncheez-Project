// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Button from "./Button";

// const Hero = () => {
//   const { scrollY } = useScroll();

//   // Parallax for hero background
//   const yHero = useTransform(scrollY, [0, 1000], [0, 400]);

//   return (
//     <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
//       {/* Background Parallax Image */}
//       <motion.div style={{ y: yHero }} className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?q=80&w=2000&auto=format&fit=crop"
//           alt="Artisanal Cake on Table"
//           className="w-full h-[120%] object-cover object-center brightness-[0.70]"
//         />
//       </motion.div>

//       {/* Hero Content */}
//       <div className="relative z-10 container mx-auto px-6 text-center pt-20">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col items-center"
//         >
//           <span className="font-display italic text-brand-caramel text-xl md:text-3xl mb-4 tracking-wider">
//             Anand, Gujarat
//           </span>

//           <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-white leading-none mb-8 drop-shadow-lg">
//             Premier Artisanal <br /> Patisserie
//           </h1>

//           <p className="font-sans text-brand-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 drop-shadow-md font-light">
//             Crafting memories since 2018 with our signature Biscoff cheesecakes,
//             authentic French pastries, and handcrafted celebration cakes.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
//             <Button size="lg" variant="secondary" className="min-w-[180px]">
//               View Menu
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-brand-espresso min-w-[180px]"
//             >
//               Custom Cakes
//             </Button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
//       >
//         <ArrowRight className="rotate-90" size={24} />
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?q=80&w=1400",
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1400",
  "https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1400",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleViewFullMenu = () => {
    navigate("/menu");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white min-h-screen flex items-center py-8 sm:py-12 md:py-16">
      {/* Background blobs */}
      <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-warm-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-[-60px] sm:bottom-[-120px] right-6 sm:right-12 w-[200px] sm:w-[320px] h-[200px] sm:h-[320px] bg-blue rounded-full blur-3xl" />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center flex-1">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-dark leading-tight mb-4 sm:mb-6">
            Premier Artisanal <br />
            Patisserie
          </h1>

          <p className="text-text-light text-base sm:text-lg leading-relaxed mb-6 sm:mb-10">
            Crafting memories since 2018 with our signature Biscoff cheesecakes,
            authentic French pastries, and handcrafted celebration cakes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center lg:justify-start">
            <Button size="large" variant="primary" onClick={handleViewFullMenu} className="w-full sm:w-auto">
              Order Now
            </Button>
            <Button size="large" variant="outline" onClick={handleViewFullMenu} className="w-full sm:w-auto">
              View Menu
            </Button>
          </div>
        </motion.div>

        {/* RIGHT SHOWCASE */}
        <div className="relative flex items-center justify-center lg:ml-50 mt-8 lg:mt-0">
          {/* Glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[200px] sm:w-[280px] lg:w-[360px] h-[200px] sm:h-[280px] lg:h-[360px] rounded-full border border-warm-accent/30"
          />

          {/* Floating image container */}
          <motion.div
            animate={{ y: [0, 14, -14] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[180px] sm:w-[240px] lg:w-[320px] h-[180px] sm:h-[240px] lg:h-[320px] rounded-full overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <AnimatePresence mode="sync">
              <motion.img
                key={index}
                src={images[index]}
                alt="Featured Dessert"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          {/* Product tags */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-warm-accent scale-125" : "bg-warm-accent/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
