import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import TelegramIcon from "../../assets/svg/telegram-icon.svg";
import TopImage from "../../assets/png/top-img.png";
import ArrowRight from "../../assets/svg/arrowRight-icon.svg";

const MainSection = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <header>
          <div>
            <a href="#">
              <h2>EasyVisaCard</h2>
            </a>
          </div>
          <div className={style.navs}>
            {/*<a href="tel:">(Номер телефона)</a>*/}
            <span className={style.divider} />
            <a className={style.email} href="mailto:easyvisacard@gmail.com">easyvisacard@gmail.com</a>
            <span className={style.divider} />
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://t.me/easyvisacardbot"
            >
              <Image width={"24px"} src={TelegramIcon} />
            </a>
          </div>
        </header>

        <div className={style.block}>
          <h1>
            Дистанционно открываем счета и банковские карты в банках Кыргызстана
          </h1>
          <h3>БЫСТРО, ЛЕГАЛЬНО, НАДЕЖНО</h3>
          <Image src={TopImage} />
        </div>
      </div>
      <div className={style.radioBlock}>
        <div className={style.radioWrapper}>
          <div className={style.first}>
            <div className={style.second}>
              <h3>
                Денежные переводы в любой валюте по всему миру из России и в
                Россию в одном приложении.
              </h3>
            </div>
          </div>
        </div>
        <a
          className={style.tarifs}
          target={"_blank"}
          href={"Tarifs.pdf"}
          rel="noreferrer"
          download
        >
          <div>
            <span className={style.tarifBlock}>
              <h3>Ознакомиться с тарифами</h3>
              <Image src={ArrowRight} />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MainSection;
