import brandLogo from "../assets/brand_logo.jpg";

const BrandLogo = () => {
  return (
    <div className="flex items-center">
      {/* Logo Container with matching navbar background */}
      <div className="relative w-12 h-12 bg-warm-caramel rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden">
        {/* Brand Logo Image */}
        <img
          src={brandLogo}
          alt="KRUNCHEEZ Brand Logo"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Brand Name for larger displays */}
      <h1 className="text-2xl font-serif text-deep-espresso ml-4 hidden sm:block">
        KRUNCHEEZ Cafe & Patisserie
      </h1>
    </div>
  );
};

export default BrandLogo;
