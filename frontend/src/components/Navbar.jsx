import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import BrandLogo from "./BrandLogo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewFullMenu = () => {
    navigate("/menu");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      // Update scrolled state
      setIsScrolled(currentScrollY > 100);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 200) {
        setIsNavbarHidden(scrollDirection === "down");
      } else {
        setIsNavbarHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to content link for accessibility */}

      {/* Desktop Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isNavbarHidden
            ? "-translate-y-full"
            : isScrolled
              ? "bg-cream shadow-md"
              : "bg-transparent"
        }`}
      >
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <BrandLogo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`transition-colors duration-300 font-medium ${
                  location.pathname === "/"
                    ? "text-warm-caramel"
                    : "text-charcoal hover:text-warm-caramel"
                }`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={`transition-colors duration-300 font-medium ${
                  location.pathname === "/menu"
                    ? "text-warm-caramel"
                    : "text-charcoal hover:text-warm-caramel"
                }`}
              >
                Menu
              </Link>
              <a
                href="/custom-cakes"
                className="text-charcoal hover:text-warm-caramel transition-colors duration-300 font-medium"
              >
                Custom Cakes
              </a>
              <Link
                to="/our-story"
                className={`transition-colors duration-300 font-medium ${
                  location.pathname === "/our-story"
                    ? "text-warm-caramel"
                    : "text-charcoal hover:text-warm-caramel"
                }`}
              >
                Our Story
              </Link>
              <a
                href="/locations"
                className="text-charcoal hover:text-warm-caramel transition-colors duration-300 font-medium"
              >
                Locations
              </a>
              {/* <a
                href="/contact"
                className="text-charcoal hover:text-warm-caramel transition-colors duration-300 font-medium"
              >
                Contact
              </a> */}

              {/* Order Now CTA */}
              <Button
                variant="primary"
                size="small"
                onClick={handleViewFullMenu}
              >
                Order Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg bg-warm-caramel text-cream hover:bg-rich-chocolate transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <span className="w-6 h-0.5 bg-cream rounded-full mb-1"></span>
              <span className="w-6 h-0.5 bg-cream rounded-full"></span>
              <span className="w-6 h-0.5 bg-cream rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
          fixed inset-0 z-40 md:hidden transition-all duration-300 transform
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0 bg-deep-espresso bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>

          {/* Menu content */}
          <div className="relative bg-cream h-full w-80 max-w-sm shadow-xl">
            <div className="flex flex-col p-6 space-y-4">
              <Link
                to="/"
                className={`transition-colors duration-300 font-medium text-lg py-3 border-b border-soft-blush ${
                  location.pathname === "/"
                    ? "text-warm-caramel"
                    : "text-charcoal hover:text-warm-caramel"
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={`transition-colors duration-300 font-medium text-lg py-3 border-b border-soft-blush ${
                  location.pathname === "/menu"
                    ? "text-warm-caramel"
                    : "text-charcoal hover:text-warm-caramel"
                }`}
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
              <a
                href="/custom-cakes"
                className="text-charcoal hover:text-warm-caramel transition-colors duration-300 font-medium text-lg py-3 border-b border-soft-blush"
                onClick={closeMobileMenu}
              >
                Custom Cakes
              </a>
              <Link
                to="/our-story"
                className={`transition-colors duration-300 font-medium text-lg py-3 border-b border-soft-blush ${
                  location.pathname === "/our-story"
                    ? "text-warm-caramel"
                    : "text-charcoal hover:text-warm-caramel"
                }`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <a
                href="/locations"
                className="text-charcoal hover:text-warm-caramel transition-colors duration-300 font-medium text-lg py-3 border-b border-soft-blush"
                onClick={closeMobileMenu}
              >
                Locations
              </a>

              {/* Mobile Order Now CTA */}
              <div className="pt-4 border-t border-soft-blush">
                <Button
                  variant="primary"
                  size="large"
                  className="w-full"
                  onClick={() => {
                    closeMobileMenu();
                    handleViewFullMenu();
                  }}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
