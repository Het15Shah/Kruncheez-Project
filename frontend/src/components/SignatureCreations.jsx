import Section from "./Section";
import Button from "./Button";

const SignatureCreations = () => {
  const creations = [
    {
      name: "Biscoff Cheesecake",
      description:
        "Our signature velvety smooth cheesecake with crunchy Biscoff cookie base and caramel drizzle",
      price: "₹450",
      image: "🍰",
      badge: "Bestseller",
    },
    {
      name: "Custom Celebration Cakes",
      description:
        "Any design, any occasion. We bring your vision to life with custom cakes for birthdays, weddings, and special moments",
      price: "Starting ₹800",
      image: "🎂",
      badge: "Personalized",
    },
    {
      name: "Kunafa Chocolate Bars",
      description:
        "Middle Eastern-European fusion with crispy kunafa threads and premium Belgian chocolate",
      price: "₹350",
      image: "🍫",
      badge: "Fusion",
    },
    {
      name: "Italian Pasta Platters",
      description:
        "Authentic handmade pasta with rich sauces, fresh ingredients, and traditional recipes",
      price: "₹280",
      image: "🍝",
      badge: "Savory",
    },
    {
      name: "Mexican Delights",
      description:
        "Spicy, flavorful Mexican dishes with authentic spices and fresh ingredients",
      price: "₹320",
      image: "🌮",
      badge: "Spicy",
    },
    {
      name: "Fresh Fruit Tarts",
      description:
        "Seasonal fresh fruits on creamy vanilla custard in buttery tart shells",
      price: "₹280",
      image: "🥧",
      badge: "Fresh",
    },
  ];

  return (
    <Section background="pure-white" padding="large">
      <div className="fade-in">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-deep-espresso mb-4">
            Our Signature Creations
          </h2>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            From our world-famous Biscoff cheesecakes to authentic international
            cuisines, every item is crafted with passion and the finest
            ingredients.
          </p>
        </div>

        {/* Creations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {creations.map((creation, index) => (
            <div key={index} className="card p-6 hover-lift stagger-children">
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl">{creation.image}</div>
                <span className="bg-warm-caramel text-cream text-xs px-2 py-1 rounded-full font-medium">
                  {creation.badge}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-deep-espresso mb-3">
                {creation.name}
              </h3>

              <p className="text-charcoal mb-4 leading-relaxed">
                {creation.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-warm-caramel">
                  {creation.price}
                </span>
                <Button variant="primary" size="small">
                  Order
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-soft-blush rounded-2xl p-8">
          <h3 className="text-2xl font-serif text-deep-espresso mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-charcoal mb-6 max-w-2xl mx-auto">
            We love creating custom desserts and dishes! Tell us your
            preferences and we'll craft something special just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="large">
              Request Custom Order
            </Button>
            <Button variant="outline" size="large">
              View Full Menu
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SignatureCreations;
