import React from "react";
import Image from "next/image";
import style from "./Requisites.module.scss";
import { Box } from "@mui/material";
import TelegramIcon from "../../assets/svg/Telegram-icon2.svg";
import PDFIcon from "../../assets/svg/PDF-icon.svg";

const Requisites = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.blocks}>
        <div className={style.block_left}>
          <div className={style.blockHeader}>
            <h2>Реквизиты:</h2>
            <a href="#">
              <Image className={style.pdfIcon} src={PDFIcon} /> Скачать договор
            </a>
          </div>
          <div className={style.blockBody}>
            <p>Индивидуальный Предприниматель:</p>
            <Box sx={{ display: "grid", rowGap: "20px" }}>
              <p>
                <span>Руденко Никита Олегович</span>
              </p>
              <p>
                ИНН: <span>422195106821</span>{" "}
              </p>
              <p>
                Банк: <span>АО АЛЬФА-БАНК</span>
              </p>
              <p>
                БИК: <span>044525593</span>
              </p>
              <p>
                Кор. счёт: <span>30101810200000000593</span>
              </p>
              <p>
                Юридический адрес компании:{" "}
                <span>г. Москва, Мичуринский проспект, дом 5, офис 113</span>
              </p>
              <a href="#">Политика конфиденциальности</a>
            </Box>
          </div>
        </div>

        <div className={style.block_right}>
          <div className={`${style.card_1} ${style.card}`}>
            <div>
              <h3>Остались вопросы?</h3>
              <p>
                <a href="#">Напишите в Telegram</a> или{" "}
                <span>
                  <a href="#">на почту</a>
                </span>
              </p>
            </div>
          </div>
          <div className={`${style.card_2} ${style.card}`}>
            <div>
              <a href="#">
                <span className={style.highlight}>Подписывайтесь </span>
                <span>
                  на наш Telegram-канал, чтобы быть в курсе всех актуальных
                  новостей
                </span>
              </a>
            </div>
            <a
              href={"https://t.me/easyvisacardbot"}
              target={"_blank"}
              rel="noreferrer"
              className={style.telegramIcon}
            >
              <Image src={TelegramIcon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requisites;
