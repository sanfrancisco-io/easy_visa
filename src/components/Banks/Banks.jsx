import React from "react";
import Image from "next/image";
import style from "./Banks.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import KG from "../../assets/png/KG.jpeg";
import { Box } from "@mui/material";
import MarkIcon from "../../assets/svg/Mark-icon.svg";
import { accKG } from "../../constants/constants";
import Plus from "../../common/components/Plus/Plus";

const theads = ["Банки", "Стоимость услуги", "Необходимые документы", "Сроки"];

const Banks = () => {
  const [expandedKG, setExpandedKG] = React.useState(false);

  return (
    <div className={style.wrapper}>
      <Accordion
        className={style.accordion}
        sx={{ padding: "40px", borderRadius: "30px" }}
        expanded={expandedKG}
        onChange={() => setExpandedKG(!expandedKG)}
      >
        <AccordionSummary
          className={style.wrappHeaderAcc}
          expandIcon={<Plus expanded={expandedKG} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexShrink: 0,
              justifyContent: "flex-start",
            }}
          >
            <Image width={60} height={30} src={KG} />
            <span className={`${style.nameOfCountry} titleAcc`}>Киргизия</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className={style.detailHeader}>
            {theads.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Box>
          <Box className={style.detailBody}>
            {accKG.map(
              ({ id, logoBank, url, price, docks, deadLine, helperText }) => (
                <>
                  <div key={id} className={style.detail}>
                    <div className={style.bank}>
                      <Image src={logoBank} />
                      <a href={url}>{url}</a>
                    </div>
                    <div className={style.price}>
                      <h4>{price}</h4>
                      <p>{helperText}</p>
                    </div>

                    <div className={style.docks}>
                      {docks.map((item, index) => (
                        <p key={index}>
                          <Image src={MarkIcon} />
                          {item}
                        </p>
                      ))}
                    </div>
                    <p className={style.deadLine}>{deadLine}</p>
                  </div>
                  {accKG[accKG.length - 1].id !== id && (
                    <Box sx={{ borderTop: "1px dotted #000" }}></Box>
                  )}
                </>
              )
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Banks;
