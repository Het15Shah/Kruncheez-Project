import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import FeaturedCollection from "./components/FeaturedCollection";
import Reviews from "./components/Reviews";
import Section from "./components/Section";
import Button from "./components/Button";
import OurStory from "./components/OurStory";
import OurStoryPage from "./components/OurStoryPage";
import LocationsSection from "./components/LocationSection";
import ContactFooter from "./components/ContactFooter";
import MenuPage from "./components/MenuPage";
import CustomCakesPage from "./components/CustomCakesPage";
import PageTransition from "./components/PageTransition";
import LoadingOverlay from "./components/LoadingOverlay";
import { CartProvider } from "./components/CartContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Dynamic padding component to handle navbar hide/show
const DynamicPadding = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(80); // Default navbar height

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // When navbar is hidden (scrolling down), reduce padding to 0
      // When navbar is visible (scrolling up or at top), restore padding
      if (scrollY > 200) {
        setNavbarHeight(0);
      } else {
        setNavbarHeight(80);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div style={{ paddingTop: `${navbarHeight}px` }}>{children}</div>;
};

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const renderPage = () => {
    switch (currentPage) {
      case "menu":
        return <MenuPage />;
      case "custom-cakes":
        return <CustomCakesPage />;
      case "our-story":
        return <OurStoryPage />;
      default:
        return (
          <>
            <Hero />
            <OurStory />
            <FeaturedCollection />
            <SocialProof />
            <LocationsSection />
          </>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen scroll-smooth">
        {/* Loading Overlay */}
        <LoadingOverlay isLoading={isLoading} />

        {/* Navigation */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Main Content */}
        <main id="main">
          <DynamicPadding>
            {/* <PageTransition> */}
            <Routes>
              {/* Hero Section */}
              <Route path="/our-story" element={<OurStoryPage />} />

              {/* Home page with Our Story preview */}
              <Route path="/" element={renderPage()} />

              {/* Menu Page */}
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/locations" element={<LocationsSection />} />
              {/* Custom Cakes Page */}
              <Route path="/custom-cakes" element={<CustomCakesPage />} />
            </Routes>

            {/* Locations Section */}
            {/* <LocationsSection /> */}

            {/* Contact Section */}
            <ContactFooter />
            {/* </PageTransition> */}
          </DynamicPadding>
        </main>

        {/* Footer */}
      </div>
    </CartProvider>
  );
}

export default App;
