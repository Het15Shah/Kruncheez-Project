import { useState } from "react";
import Button from "./Button";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import CartDrawer from "./CartDrawer";
import CartButton from "./CartButton";
import { useNavigate } from "react-router-dom";

const AddToCartBtn = ({ item }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <button
      onClick={handleAdd}
      className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-cream transition-all duration-300 ${
        added
          ? "bg-rich-chocolate shadow-lg scale-105"
          : "bg-rich-chocolate shadow-md"
      }`}
      style={{ minWidth: "80px" }}
    >
      <AnimatePresence mode="wait">
        {added ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center justify-center gap-1"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Added
          </motion.span>
        ) : (
          <motion.span
            key="add"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            Add to Cart
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const handleViewFullMenu = () => {
    navigate("/menu");
  };

  const handlecustomorder = () => {
    navigate("/custom-cakes");
  };

  const handlecontactchef = () => {
    const phoneNumber = "+919876543210"; // Replace with actual phone number
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  const categories = [
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "cheesecakes", name: "Cheesecakes", icon: "🍰" },
    { id: "custom-cakes", name: "Custom Cakes", icon: "🎂" },
    { id: "kunafa", name: "Kunafa Specials", icon: "🍫" },
    { id: "pasta", name: "Italian Pasta", icon: "🍝" },
    { id: "mexican", name: "Mexican Delights", icon: "🌮" },
    { id: "beverages", name: "Beverages", icon: "☕" },
  ];

  const menuItems = [
    // Cheesecakes
    {
      id: 1,
      category: "cheesecakes",
      name: "Biscoff Cheesecake",
      description:
        "Velvety smooth cheesecake with crunchy Biscoff cookie base and caramel drizzle",
      price: "₹450",
      image: "🍰",
      badge: "Bestseller",
      ingredients: "Cream cheese, Biscoff cookies, caramel, butter",
    },
    {
      id: 2,
      category: "cheesecakes",
      name: "Classic New York Style",
      description:
        "Traditional rich and creamy cheesecake with graham cracker crust",
      price: "₹380",
      image: "🍰",
      badge: "Classic",
      ingredients: "Cream cheese, graham crackers, vanilla, eggs",
    },
    {
      id: 3,
      category: "cheesecakes",
      name: "Chocolate Lava Cheesecake",
      description: "Decadent chocolate cheesecake with molten chocolate center",
      price: "₹420",
      image: "🍫",
      badge: "Chocolate Lover",
      ingredients: "Dark chocolate, cream cheese, cocoa powder",
    },

    // Custom Cakes
    {
      id: 4,
      category: "custom-cakes",
      name: "Birthday Celebration Cake",
      description: "Custom designed cake for your special celebrations",
      price: "Starting ₹800",
      image: "🎂",
      badge: "Personalized",
      ingredients: "Available in multiple flavors and designs",
    },
    {
      id: 5,
      category: "custom-cakes",
      name: "Wedding Cake",
      description: "Elegant multi-tier wedding cakes with premium ingredients",
      price: "Starting ₹2500",
      image: "🎂",
      badge: "Premium",
      ingredients: "Premium ingredients, custom decorations",
    },
    {
      id: 6,
      category: "custom-cakes",
      name: "Anniversary Special",
      description: "Romantic themed cakes for anniversary celebrations",
      price: "Starting ₹1200",
      image: "🎂",
      badge: "Romantic",
      ingredients: "Fresh cream, seasonal fruits, premium chocolate",
    },

    // Kunafa Specials
    {
      id: 7,
      category: "kunafa",
      name: "Kunafa Chocolate Bar",
      description:
        "Middle Eastern-European fusion with crispy kunafa threads and Belgian chocolate",
      price: "₹350",
      image: "🍫",
      badge: "Fusion",
      ingredients: "Kunafa dough, Belgian chocolate, pistachios",
    },
    {
      id: 8,
      category: "kunafa",
      name: "Classic Kunafa",
      description:
        "Traditional Middle Eastern dessert with cheese filling and rose syrup",
      price: "₹320",
      image: "🍫",
      badge: "Traditional",
      ingredients: "Kunafa dough, akkawi cheese, rose syrup",
    },
    {
      id: 9,
      category: "kunafa",
      name: "Kunafa with Mango",
      description: "Seasonal mango kunafa with fresh mango pieces and cream",
      price: "₹380",
      image: "🍫",
      badge: "Seasonal",
      ingredients: "Fresh mango, kunafa dough, cream, pistachios",
    },

    // Italian Pasta
    {
      id: 10,
      category: "pasta",
      name: "Alfredo Pasta",
      description: "Creamy white sauce pasta with parmesan and herbs",
      price: "₹280",
      image: "🍝",
      badge: "Vegetarian",
      ingredients: "Pasta, cream, parmesan, butter, herbs",
    },
    {
      id: 11,
      category: "pasta",
      name: "Arrabbiata Pasta",
      description: "Spicy tomato sauce pasta with garlic and chili",
      price: "₹260",
      image: "🍝",
      badge: "Spicy",
      ingredients: "Pasta, tomatoes, garlic, chili, basil",
    },
    {
      id: 12,
      category: "pasta",
      name: "Pesto Pasta",
      description: "Fresh basil pesto pasta with cherry tomatoes and pine nuts",
      price: "₹290",
      image: "🍝",
      badge: "Fresh",
      ingredients: "Pasta, fresh basil, pine nuts, parmesan, olive oil",
    },

    // Mexican Delights
    {
      id: 13,
      category: "mexican",
      name: "Quesadilla Supreme",
      description:
        "Grilled tortilla with cheese, vegetables, and Mexican spices",
      price: "₹320",
      image: "🌮",
      badge: "Spicy",
      ingredients: "Tortilla, cheese, vegetables, Mexican spices",
    },
    {
      id: 14,
      category: "mexican",
      name: "Burrito Bowl",
      description: "Rice bowl with beans, vegetables, cheese, and salsa",
      price: "₹340",
      image: "🌮",
      badge: "Healthy",
      ingredients: "Rice, beans, vegetables, cheese, salsa",
    },
    {
      id: 15,
      category: "mexican",
      name: "Nachos Supreme",
      description: "Crispy nachos with cheese, jalapenos, and sour cream",
      price: "₹300",
      image: "🌮",
      badge: "Sharing",
      ingredients: "Nachos, cheese, jalapenos, sour cream, salsa",
    },

    // Beverages
    {
      id: 16,
      category: "beverages",
      name: "Special Coffee",
      description: "Premium coffee with our special blend and foam art",
      price: "₹120",
      image: "☕",
      badge: "Signature",
      ingredients: "Premium coffee beans, milk, foam art",
    },
    {
      id: 17,
      category: "beverages",
      name: "Fresh Lemonade",
      description: "Refreshing lemonade with mint and fresh lemon",
      price: "₹80",
      image: "🍋",
      badge: "Refreshing",
      ingredients: "Fresh lemon, mint, sugar, water",
    },
    {
      id: 18,
      category: "beverages",
      name: "Chocolate Shake",
      description: "Thick chocolate shake with ice cream and chocolate syrup",
      price: "₹150",
      image: "🥤",
      badge: "Dessert",
      ingredients: "Chocolate ice cream, milk, chocolate syrup",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream">
      <CartDrawer />
      <CartButton />
      {/* Menu Header */}
      <section className="pt-32 pb-16 bg-linear-to-b bg-white">
        <div className="text-center fade-in">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-warm-caramel"></div>
            <span className="text-warm-caramel uppercase tracking-[0.3em] text-xs font-medium">
              Check Our Best
            </span>
            <div className="w-12 h-0.5 bg-warm-caramel"></div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-deep-espresso mb-4 sm:mb-6">
            Our Menu
          </h1>
          <p className="text-lg sm:text-xl text-charcoal max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Discover our handcrafted selection of artisanal desserts,
            international cuisines, and beverages. Every item is prepared with
            love and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Button
              variant="primary"
              size="large"
              onClick={handleViewFullMenu}
              className="w-full sm:w-auto"
            >
              Order Online
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={handleViewFullMenu}
              className="w-full sm:w-auto"
            >
              Download Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <Section background="soft-blush" padding="medium">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-warm-caramel text-cream shadow-lg transform -translate-y-1"
                  : "bg-pure-white text-charcoal hover:bg-cream hover:shadow-md"
              }`}
            >
              <span className="mr-1 sm:mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </Section>

      {/* Menu Items Grid */}
      <Section background="cream" padding="large">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-pure-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Item Header */}
              <div className="relative p-4 sm:p-6 pb-2 sm:pb-4">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>
                  {item.badge && (
                    <span className="bg-warm-caramel text-cream text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-deep-espresso mb-2 group-hover:text-warm-caramel transition-colors">
                  {item.name}
                </h3>

                <p className="text-charcoal text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-2xl font-bold text-warm-caramel">
                    {item.price}
                  </span>

                  <AddToCartBtn item={item} />
                </div>
              </div>

              {/* Ingredients (Hidden by default, shown on hover) */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="border-t border-soft-blush pt-2 sm:pt-3">
                  <p className="text-xs text-gray-600">
                    <span className="font-medium">Ingredients:</span>{" "}
                    {item.ingredients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Special Offers Section */}

      {/* Special Offers Section */}
      <Section background="pure-white" padding="large">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-warm-caramel"></div>
            <span className="text-warm-caramel uppercase tracking-[0.3em] text-xs font-medium">
              Special Offers
            </span>
            <div className="w-12 h-0.5 bg-warm-caramel"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-deep-espresso mb-4"
          >
            Exclusive Deals
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-charcoal max-w-2xl mx-auto"
          >
            Sweeten your experience with our handpicked offers, crafted just for
            you
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {/* First Order Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            {/* Background Pattern - Using Kruncheez theme colors */}
            <div className="absolute inset-0 bg-linear-to-br from-warm-caramel to-rich-chocolate"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cream/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cream/10 rounded-full -ml-12 -mb-12"></div>

            {/* Content */}
            <div className="relative p-6 sm:p-8 text-center">
              {/* Icon with animation */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-4xl sm:text-5xl mb-3 sm:mb-4"
              >
                🎉
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-serif text-cream mb-2 sm:mb-3 font-bold">
                First Order
              </h3>

              <p className="text-cream/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Welcome to Kruncheez! Enjoy{" "}
                <span className="font-bold text-cream">20% off</span> on your
                first delightful order
              </p>

              {/* Button - Consistent placement */}
              <div className="mb-3 sm:mb-4">
                <Button
                  variant="outline"
                  size="small"
                  className="bg-cream text-deep-espresso hover:bg-cream hover:scale-105 transition-all duration-300 border-2 border-cream shadow-lg w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919876543210?text=Hi! I want to claim the first order discount - NEW2024",
                      "_blank",
                    )
                  }
                >
                  Claim Offer
                </Button>
              </div>

              {/* Coupon - Consistent placement */}
              <div className="inline-flex items-center gap-2 bg-cream/20 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-cream text-xs sm:text-sm font-medium">
                  NEW2024
                </span>
                <span className="text-cream/60 text-xs">• Auto-applied</span>
              </div>
            </div>
          </motion.div>

          {/* Birthday Special */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            {/* Background Pattern - Using Kruncheez theme colors */}
            <div className="absolute inset-0 bg-linear-to-br from-warm-caramel to-deep-espresso"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cream/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cream/10 rounded-full -ml-12 -mb-12"></div>

            {/* Content */}
            <div className="relative p-6 sm:p-8 text-center">
              {/* Icon with animation */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl sm:text-5xl mb-3 sm:mb-4"
              >
                🎂
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-serif text-cream mb-2 sm:mb-3 font-bold">
                Birthday Magic
              </h3>

              <p className="text-cream/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Celebrate your special day with a{" "}
                <span className="font-bold text-cream">complimentary cake</span>{" "}
                on us!
              </p>

              {/* Button - Consistent placement */}
              <div className="mb-3 sm:mb-4">
                <Button
                  variant="outline"
                  size="small"
                  className="bg-cream text-deep-espresso hover:bg-cream hover:scale-105 transition-all duration-300 border-2 border-cream shadow-lg w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919876543210?text=Hi! I want to register for the birthday special - BIRTHDAY2024",
                      "_blank",
                    )
                  }
                >
                  Register Now
                </Button>
              </div>

              {/* Coupon - Consistent placement */}
              <div className="inline-flex items-center gap-2 bg-cream/20 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-cream text-xs sm:text-sm font-medium">
                  BIRTHDAY2024
                </span>
                <span className="text-cream/60 text-xs">• Valid 7 days</span>
              </div>
            </div>
          </motion.div>

          {/* Group Order */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden"
          >
            {/* Background Pattern - Using Kruncheez theme colors */}
            <div className="absolute inset-0 bg-linear-to-br from-warm-caramel to-rich-chocolate"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cream/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cream/10 rounded-full -ml-12 -mb-12"></div>

            {/* Content */}
            <div className="relative p-6 sm:p-8 text-center">
              {/* Icon with animation */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-4xl sm:text-5xl mb-3 sm:mb-4"
              >
                👥
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-serif text-cream mb-2 sm:mb-3 font-bold">
                Party Perks
              </h3>

              <p className="text-cream/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Hosting a celebration? Get{" "}
                <span className="font-bold text-cream">15% off</span> on orders
                above ₹2000
              </p>

              {/* Button - Consistent placement */}
              <div className="mb-3 sm:mb-4">
                <Button
                  variant="outline"
                  size="small"
                  className="bg-cream text-deep-espresso hover:bg-cream hover:scale-105 transition-all duration-300 border-2 border-cream shadow-lg w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/919876543210?text=Hi! I want to claim the group order discount - PARTY15",
                      "_blank",
                    )
                  }
                >
                  Order Now
                </Button>
              </div>

              {/* Coupon - Consistent placement */}
              <div className="inline-flex items-center gap-2 bg-cream/20 px-3 sm:px-4 py-2 rounded-full">
                <span className="text-cream text-xs sm:text-sm font-medium">
                  PARTY15
                </span>
                <span className="text-cream/60 text-xs">• Min. ₹2000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="soft-blush" padding="large">
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-serif text-deep-espresso mb-3 sm:mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-base sm:text-lg text-charcoal mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            We love creating custom desserts and dishes! Tell us your
            preferences and we'll craft something special just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              variant="primary"
              size="large"
              onClick={handlecustomorder}
              className="w-full sm:w-auto"
            >
              Request Custom Order
            </Button>
            <Button
              variant="outline"
              size="large"
              onClick={handlecontactchef}
              className="w-full sm:w-auto"
            >
              Contact Chef
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MenuPage;
