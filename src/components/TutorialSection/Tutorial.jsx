import React from "react";
import Image from "next/image";
import style from "./Tutorial.module.scss";
import HowPic from "../../assets/png/how.png";
import { useMediaQuery } from "@mui/material";

const Tutorial = () => {
  const isTabletMax = useMediaQuery("(min-width:1100px)");

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Как происходит оформление:</h2>
      <div className={style.blocks}>
        {isTabletMax && (
          <div>
            <Image src={HowPic} />
          </div>
        )}
        <div className={style.steps}>
          <div className={style.step}>
            <div>1</div>{" "}
            <p>
              Вы <span>оставляете заявку</span> через Telegram
            </p>
          </div>
          <div className={style.step}>
            <div>2</div>{" "}
            <p>
              Наш <span>менеджер консультирует вас по открытию счетов</span> и
              банковских карт
            </p>
          </div>
          <div className={style.step}>
            <div>3</div>{" "}
            <p>
              Вносите <span>предоплату 15%</span>
            </p>
          </div>
          <div className={style.step}>
            <div>4</div>{" "}
            <p>
              <span>Высылаем вам заполненную доверенность. </span>
            </p>
          </div>
        </div>
        <div className={style.steps}>
          <div className={style.step}>
            <div>5</div>{" "}
            <p>
              Делаете<span> нотариально заверенную доверенность </span> и
              заверенную копию загранпаспорта на нашего менеджера.{" "}
              <span>Наш курьер </span> проверяет <span>документы </span> и
              передает из банку
            </p>
          </div>
          <div className={style.step}>
            <div>6</div>{" "}
            <p>
              Мы <span>открываем</span> Вам{" "}
              <span>счет, выпускаем банковскую</span> карту{" "}
              <span>и сим карту</span> местного оператора связи
            </p>
          </div>
          <div className={style.step}>
            <div>7</div>{" "}
            <p>
              Присылаем Вам фотографию Вашей карты,{" "}
              <span>Вы вносите остаточный платеж 70%</span>
            </p>
          </div>
          <div className={style.step}>
            <div>8</div>{" "}
            <p>
              <span className={style.lastStep}>
                Отправляем Вам банковскую карту, сим-карту и оригинал
                доверенности курьерской службой.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={style.btn}>
        {" "}
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://t.me/easyvisacardbot"
        >
          <button>Оставить заявку</button>
        </a>
      </div>
      {/*<div className={style.footer}>*/}
      {/*  <h2>Банки с которыми мы работаем</h2>*/}
      {/*  <p>*/}
      {/*    Список банков постоянно пополняется, но из-за большого количества*/}
      {/*    обращений, имеются ограничения по квотам для граждан Российской*/}
      {/*    Федерации.*/}
      {/*  </p>*/}
      {/*</div>*/}
    </div>
  );
};

export default Tutorial;
