"use client"
import React, { FC } from "react";
import style from "./style.module.css";
import Link from "next/link";
import { Product } from "@/app/products/preloaded";



const ProductBlock: FC<Omit<Product, "details" | "productType">> = ({ logoSrc, title, desc, alias }) => {
  const truncateDescription = (str:string) => (str.length > 129 ? str.slice(0, 129) + "..." : str);
  return (
    <article className={style.block}>
      <div className={style.header}>
        <div className={style.preview_img}>
          <img src={logoSrc} alt="Logo" />
        </div>
        <Link href="/" className={style.install_btn}>
          <img src="/icons/download.svg" alt="ic" />
          <span>Install</span>
        </Link>
      </div>

      <h3 className={style.title}>{title}</h3>
      <p className={style.desc}>
        {truncateDescription(desc)}
      </p>

      <Link href={`/products/${alias?.toLowerCase()}`} className={style.details_btn}>
        <span>View Details</span>
        <img src="/icons/right-arrow.svg" alt="ic" />
      </Link>
    </article>
  );
};

export default ProductBlock;
