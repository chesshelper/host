"use client"
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import ProductBlock from "@/components/items/ProductBlock/ProductBlock";
import { Product, products } from "@/app/products/preloaded";
import Link from "next/link";

const getRandomItems = (array: Product[], count: number, excludeAlias: string) => {
  const filteredArray = array.filter(item => item.alias?.toLowerCase() !== excludeAlias.toLowerCase());
  const shuffled = [...filteredArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const MoreSection:React.FC<{ excludeAlias: string }> = ({excludeAlias}) => {

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {    
    setData(getRandomItems(products, 3, excludeAlias)); // 3 random products in "Other Extensions" section
  }, [excludeAlias]);
  
  return (
    <section className={`content_wrapper ${style.section}`}>
      <SectionHeader
        title="Other Extensions"
        desc="Maximize your productivity and streamline your web usage"
        dashTitle="explore"
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
      {data.map((p) => (
            <ProductBlock
              id={p.id}
              key={p.logoSrc}
              logoSrc={`/images/logos/${p.alias}.svg`}
              desc={p.desc}
              title={p.title}
              alias={p.alias}
            />
          ))}
      </div>
      <div className={style.btn_sect}>
          <Link href="/products" className={style.btn_1}>Explore All Products</Link>
        </div>
    </section>
  );
};

export default MoreSection;
