"use client";

import BannerSection from "./components/section-banner";
import BenefitsSection from "./components/section-benefits";
import FeaturesSection from "./components/section-features";
import FeedbackSection from "./components/section-feedback";
import HeroSection from "./components/section-hero";
import ProductSection from "./components/section-product";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <FeaturesSection />
      <FeedbackSection />
      <BannerSection />
    </>
  );
};

export default Home;
