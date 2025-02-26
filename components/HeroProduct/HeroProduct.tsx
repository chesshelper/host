import React, { FC } from "react";
import HeaderGradient from "@/components/HeaderGradient";
import Navbar from "@/components/Navbar/Navbar";
import DButton from "@/components/DButton/DButton";
import EmblaCarousel from "@/components/carousel/EmblaCarousel";

import style from "./style.module.css";
import "@/app/inriasans.css";
import { Product, products } from "@/app/products/preloaded";
import { EmblaOptionsType } from "embla-carousel";


type HeroProductProps = {
  productAlias: Product["alias"]
}

const HeroProduct:React.FC<HeroProductProps> = ({productAlias}) => {
  const ITEM = products.find(p => p.alias === productAlias);
  

  const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true }
  const SLIDES = Array.from(Array(ITEM?.details.slides_count)).map((_, i) => `/images/previews/${productAlias}/en/${i}.png`);
  console.log(SLIDES);

  
const formatter = new Intl.NumberFormat('fr-FR');
const formattedTestimonial = ITEM?.details?.stats
  ? {
      users: formatter.format(ITEM.details.stats.users),
      reviews: formatter.format(ITEM.details.stats.reviews),
      rating: ITEM.details.stats.rating.toFixed(1), // rating should have one decimal place
    }
  : null;

  

  return (
    <header className={style.wrapper}>
      <HeaderGradient keyProp={ITEM!.colorScheme}/>
      <Navbar />
      <div className={`content_wrapper ${style.content}`}>
        
        <div className={style.content_group1}>
          <div className={style.title_group}>
            <div className={style.title_logo}>
              <img src={`/images/logos/${ITEM?.alias}.svg`} alt="Logo"/>
            </div>
            <h1 className={style.title}>{ITEM?.title.split(" ")[0]}</h1>
            {ITEM?.version ? <span className={style.version}>v.{ITEM.version}</span> : ''}
          </div>
          <p className={style.desc}>{ITEM?.desc}</p>
          <div className={style.btn_sect}>
            <DButton links={ITEM!.details.links} productType={ITEM!.productType}/>
          </div>
        </div>
        
        <div className={style.content_group2}>
          {!ITEM?.details.slides_count || ITEM?.details.slides_count === 0 
          ? "" 
          : <EmblaCarousel slides={SLIDES} options={OPTIONS} isVertical={ITEM.productType === "APPLICATION"} />}
        </div>

      </div>
      {formattedTestimonial ? 
        <HeroTestimonial 
        users={formattedTestimonial.users} 
        reviews={formattedTestimonial.reviews} 
        rating={formattedTestimonial.rating} 
        /> : ""}
    </header>
  );
};


// string as it was formatted
const HeroTestimonial:FC<{users: string, reviews: string, rating: string}> = ({users, reviews, rating}) => {
  return (
    <div className={style.stats}>

      <div className={style.stats_item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6C18 7.5913 17.3679 9.11742 16.2426 10.2426C15.1174 11.3679 13.5913 12 12 12C10.4087 12 8.88258 11.3679 7.75736 10.2426C6.63214 9.11742 6 7.5913 6 6C6 4.4087 6.63214 2.88258 7.75736 1.75736C8.88258 0.632141 10.4087 0 12 0ZM12 15C18.63 15 24 17.685 24 21V24H0V21C0 17.685 5.37 15 12 15Z" fill="currentColor"/>
        </svg>
        <span className={style.stats_text}>{users}+ users</span>
      </div>

      <div className={style.stats_item}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7508 20.2002L20.9955 10.9555C19.4403 10.3058 18.0278 9.35706 16.8381 8.16311C15.6436 6.97321 14.6944 5.56026 14.0445 4.00451L4.79982 13.2492C4.0786 13.9704 3.71736 14.3316 3.40737 14.7291C3.04163 15.1984 2.72773 15.706 2.47116 16.2428C2.25491 16.6978 2.09367 17.1828 1.77118 18.1502L0.0687419 23.2538C-0.0096131 23.4875 -0.0212382 23.7384 0.0351729 23.9783C0.091584 24.2182 0.213795 24.4377 0.38807 24.6119C0.562344 24.7862 0.781773 24.9084 1.02169 24.9648C1.26161 25.0212 1.51251 25.0096 1.74618 24.9313L6.84975 23.2288C7.81846 22.9063 8.3022 22.7451 8.75718 22.5288C9.29633 22.2722 9.80089 21.9601 10.2709 21.5926C10.6684 21.2826 11.0296 20.9214 11.7508 20.2002ZM23.5604 8.3906C24.4822 7.46884 25 6.21867 25 4.9151C25 3.61153 24.4822 2.36136 23.5604 1.4396C22.6386 0.517839 21.3885 9.71232e-09 20.0849 0C18.7813 -9.71232e-09 17.5312 0.517839 16.6094 1.4396L15.5007 2.54831L15.5482 2.68705C16.0944 4.25047 16.9885 5.66944 18.1631 6.83691C19.3655 8.04663 20.8341 8.95838 22.4517 9.49931L23.5604 8.3906Z" fill="currentColor"/>
      </svg>
        <span className={style.stats_text}>{reviews}+ reviews</span>
      </div>

      <div className={style.stats_item}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.78125 24L6.8125 15.1263L0 9.15789L9 8.36842L12.5 0L16 8.36842L25 9.15789L18.1875 15.1263L20.2188 24L12.5 19.2947L4.78125 24Z" fill="currentColor"/>
        </svg>
        <span className={style.stats_text}>{rating} rating</span>
      </div>

    </div>
  )
}

export default HeroProduct;
