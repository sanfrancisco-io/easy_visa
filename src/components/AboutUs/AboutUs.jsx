import React from "react";
import style from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={style.block}>
      <div className={style.content}>
        <div className={style.content}>EasyVisaCard оперативно</div> и легально открывает банковские
      </div>{" "}
      <div className={style.content}>
        карты со счетами{" "}
        <span>
          в долларах, евро, рублях и местной валюте на граждан Российской
          Федерации
        </span>{" "}
      </div>
      <div className={style.content}>по ноториально заверенной доверенности </div>
      <div className={style.content}>
        <span>в различных</span> банках Кыргызстана.
      </div>
    </div>
  );
};

export default AboutUs;
