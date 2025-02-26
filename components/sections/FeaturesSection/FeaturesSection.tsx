"use client";
import React, { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";
import { Product, products } from "@/app/products/preloaded";

export interface FeaturesBlock {
  iconUrl: string;
  title: string;
  desc: string;
}

const FeaturesSection: React.FC<{ productAlias: Product["alias"] }> = ({
  productAlias,
}) => {
  const ITEM = products.find((p) => p.alias === productAlias);
  const FEATURES = ITEM?.details.preview_features;

  if (!FEATURES) return null;
  return (
    <section className="content_wrapper">
      <SectionHeader
        title="Explore it Amazing Features"
        desc="Some of the key features that you might find useful"
        dashTitle="features"
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
        {FEATURES.map((post) => (
          <Block
            key={post.title}
            title={post.title}
            icon={post.icon}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
