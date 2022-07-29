import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import MainSection from "../src/components/mainSection";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Services from "../src/components/Services/Services";
import Cards from "../src/components/CardsSection/Cards";
import Tutorial from "../src/components/TutorialSection/Tutorial";
import Banks from "../src/components/Banks/Banks";
import Questions from "../src/components/Questions/Questions";
import Requisites from "../src/components/Requisites/Requisites";
import Footer from "../src/components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import telegramIcon from "../src/assets/svg/Telegram-icon2.svg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  console.log(isVisible);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;
      setIsVisible(200 >= (pageYOffset || 0));
    });
    return window.removeEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;
      setIsVisible(innerHeight >= pageYOffset);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Easy Visa Card</title>
        <meta
          keywords="Easy Visa Card, EasyVisaCard, банковские карты, Денежные переводы, открывает банковские карты со счетами, Оплачивайте иностранные сервисы с помощью VISA карт, 
Храните свои сбережения в долларах и евро в надежном банке, Вносите предоплату 15%, Нотариально заверенная доверенность на нашего сотрудника на русском языке, 24 700 ₽ + 10 000 ₽ депозит
(неснижаемый остаток на счете), Банк-клиент (веб и мобильное приложение), Активированная дебетовая карта, привязанная к любой выбранной Вами валюте, Мультивалютный счет в иностранном банке (доллары, евро и местная валюта), Активированная местная сим-карта, В Киргизии не требуется ИНН, Получаете 2 карты, VISA для платежей заграницей и ЭЛКАРТ, которая работает в системе МИР и принимает платежи из заграницы через систему PaySend, Расплачивайтесь банковскими картами в путешествиях без ограничений, СЕРВИС PAYSEND"
        ></meta>
      </Head>
      <main>
        <a
          target={"_blank"}
          rel="noreferrer"
          href={"https://t.me/easyvisacardbot"}
          className={
            !isVisible
              ? styles.telegramIconActive
              : styles.telegramIconNotActive
          }
        >
          {" "}
          <Image src={telegramIcon} />
        </a>
        <MainSection />
        <AboutUs />
        <Services />
        <Cards />
        <Tutorial />
        {/*<Banks />*/}
        <Questions />
        {/*<Requisites />*/}
        <Footer />
      </main>
    </div>
  );
}
