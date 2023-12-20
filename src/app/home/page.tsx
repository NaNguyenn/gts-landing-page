"use client";

import BannerSection from "./components/section-banner";
import BenefitsSection from "./components/section-benefits";
import FeaturesSection from "./components/section-features";
import FeedbackSection from "./components/section-feedback";
import HeroSection from "./components/section-hero";
import PricingSection from "./components/section-pricing";
import ProcedureSection from "./components/section-procedure";
import ProductSection from "./components/section-product";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <FeaturesSection />
      <ProcedureSection />
      <PricingSection />
      <FeedbackSection />
      <BannerSection />
    </>
  );
};

export default Home;
