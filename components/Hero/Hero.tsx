import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import style from "./style.module.scss";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import TextWithFragment from "../TextWithFragments";
import Image from "next/image";


const Hero = () => {
  const t = useTranslations();

  const SHORTCUTS = [
    "SPOPLUS",
    "IGPLUS",
    "DOHABIT",
    "LICHESSHELPER",
    "MEMENTO"
  ]

  return (
    <header className={style.wrapper}>
      <div className={style.wrapper_texture}>
      <Navbar />
      <div className={clsx(style.content, "content_wrapper")}>
        <h1 className={style.title}>{<TextWithFragment text={(t("HeroMain.title"))} fragments/>}</h1>
        {/* <AnimatedText text={t("HeroMain.title")}/> */}
        <p className={style.desc}><TextWithFragment text={t("HeroMain.subtitle")}/></p>

        <div className={style.shortcuts}>
          {SHORTCUTS.map(item => <Link key={item} href={"/products/" + item.toLowerCase()} className={style.shortcuts_act}>
            <Image width={65} height={65} src={`/images/logos/${item}.svg`} alt={item} className={clsx(style.shortcuts_act_image, style["shortcuts_act_image__" + item])} />
          </Link>)}
        </div>
        <div className={style.btn_sect}>
          <Link href="/products" className={style.btn_1}>{t("global.explore_btn")}</Link>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Hero;
