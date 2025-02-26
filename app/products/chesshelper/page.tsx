"use client";
import Footer from "@/components/Footer/Footer";
import React from "react";
import CTASection from "@/components/sections/CTASection/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection/TestimonialSection";
import HeroProduct from "@/components/HeroProduct/HeroProduct";
import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";
import MoreSection from "@/components/sections/MoreSection/MoreSection";

const ChesshelperPage = () => {
  const PRODUCT_KEY:string = "CHESSHELPER";

  return (
    <div className="schema-purple">
      <HeroProduct productAlias={PRODUCT_KEY}/>
      <main>
        <FeaturesSection productAlias={PRODUCT_KEY}/>
        <TestimonialSection productAlias={PRODUCT_KEY}/>
        <MoreSection excludeAlias={PRODUCT_KEY}/>
        <CTASection/>
      </main>
      <Footer />
    </div>
  );
};

export default ChesshelperPage;
