import React from "react";
import Image from "next/image";
import style from "./Services.module.scss";
import NetflixPic from "../../assets/png/Netflix.png";
import SteamPic from "../../assets/png/Steam.png";
import SpotifyPic from "../../assets/png/Spotify.png";
import AppStorePic from "../../assets/png/AppStore.png";
import PokerStarPic from "../../assets/png/PokerStar.png";
import BinancePic from "../../assets/png/Binance.png";
import Background from "../../assets/svg/Bacgkground.svg";

const Services = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.firstBlock}>
        <h3>
          Оплачивайте иностранные сервисы с помощью VISA карт.
        </h3>
        <div>
          Карты Киргизского банка принимаются к оплате всеми иностранными сервисами без ограничений. Продлевайте
          действующие аккаунты и оплачивайте новые.
        </div>
        <a target={"_blank"} rel="noreferrer" href="https://t.me/easyvisacardbot">
          <button>Оставить заявку</button>
        </a>
      </div>
      <div className={style.secondBlock}>
        <Image src={Background} />
        <div className={style.content}>
          <h3>
            Храните свои сбережения в долларах и евро в надежном банке
          </h3>
          <p>
            <span>Будьте уверены в сохранности своих средств</span> и управляйте
            операциями через online-банк.{" "}
            <span>Конвертируйте валюты</span> в одном приложении.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
