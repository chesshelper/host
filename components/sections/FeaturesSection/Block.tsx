import React, { FC } from "react";
import style from "./style.module.css";
import TextWithFragment from "@/components/TextWithFragments";
import { PrevFeature } from "@/app/products/preloaded";

const Block: FC<PrevFeature> = ({ icon, description, title }) => {
  return (
    <article className={style.block}>
      <div className={style.header}>
        <div className={style.icon}>
          {icon}
        </div>
        <h3 className={style.title}><TextWithFragment text={title}/></h3>
      </div>
      <p className={style.desc}><TextWithFragment text={description}/></p>
    </article>
  );
};

export default Block;
