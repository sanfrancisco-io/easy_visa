import React from "react";
import Image from "next/image";
import style from "./Cards.module.scss";
import { Box } from "@mui/material";
import MarkIcon from "../../assets/svg/Mark-icon.svg";

const list1 = [
  "В Киргизии не требуется ИНН",
  "Получаете 2 карты, VISA для платежей заграницей и ЭЛКАРТ, которая работает в системе МИР и принимает платежи из заграницы через систему PaySend",
  "Обе карты работают в одном банковском приложении",
  "Конвертация валют между картами по банковскому курсу.",
];

const list2 = [
  "Мультивалютный счет в иностранном банке (доллары, евро и местная валюта)",
  "Активированная дебетовая карта, привязанная к любой выбранной Вами валюте",
  "Банк-клиент (веб и мобильное приложение)",
  "Активированная местная сим-карта.",
];
const Cards = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.cardBlock}>
        <Box sx={{ background: "#0090ff" }}>
          <h3>
            Расплачивайтесь банковскими картами в путешествиях без ограничений
          </h3>
          <p>
            Банковские карты VISA, выпущенные за пределами Российской Федерации,
            принимаются за границей без сбоев. Совершайте покупки в online
            магазинах и не переживайте об ограничениях.
          </p>
        </Box>
        <Box sx={{ background: "#00dfbd" }}>
          <h3>СЕРВИС PAYSEND</h3>
          <p>
            Теперь вы можете переводить деньги с платежных карт VISA,
            ChinaUnionPay, MasterCard, МИР на карту ЭЛКАРТ. Это возможно
            благодаря сервису Paysend. В течении нескольких минут деньги придут
            на карту из любой точки мира, а отправитель оплачивает коммиссию.
          </p>
        </Box>
      </div>
      <div className={style.secondCardsBlock}>
        <div className={style.cardBlock}>
          <Box className={style.background} sx={{ backgroundColor: "#1b1a22" }}>
            <h3>В чем преимущества счета в банке Кыргызстана:</h3>
            {list1.map((item, index) => (
              <p key={index}>
                <Image src={MarkIcon} />
                {item}
              </p>
            ))}
          </Box>
          <Box className={style.secondCardsBlock_2} sx={{ background: "#fff" }}>
            <h3>Что Вы получаете:</h3>
            {list2.map((item, index) => (
              <p key={index}>
                <Image src={MarkIcon} />
                {item}
              </p>
            ))}
            <a
              target={"_blank"}
              rel="noreferrer"
              href={"https://t.me/easyvisacardbot"}
            >
              Оставить заявку
            </a>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Cards;
