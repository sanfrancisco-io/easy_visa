import React, { useState } from "react";
import style from "./Questions.module.scss";
import { Box } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import Plus from "../../common/components/Plus/Plus";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import {
  firstAnswers,
  secondAnswers,
  thirdAnswers,
  fourthAnswers,
  fifthAnswers,
} from "../../constants/constants";

const Questions = () => {
  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);
  const [thirdQuestion, setThirdQuestion] = useState(false);
  const [fourthQuestion, setFourthQuestion] = useState(false);
  const [fifthQuestion, setFifthQuestion] = useState(false);
  return (
    <div className={style.wrapper}>
      <h2>Вопросы и ответы</h2>

      <Box className={style.questions}>
        <Accordion
          sx={{
            padding: "40px",
            borderRadius: "30px",
            border: `1px solid ${firstQuestion ? "#00dfbd" : "#cad9ec"}`,
          }}
          expanded={firstQuestion}
          onChange={() => setFirstQuestion(!firstQuestion)}
        >
          <AccordionSummary
            className={style.wrappHeaderAcc}
            expandIcon={<Plus expanded={firstQuestion} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <span
                className={`titleAcc ${style.titleOfQuestion} ${
                  secondQuestion
                    ? style.activeQuestion
                    : style.notActiveQuestion
                }`}
              >
                Кто Вы, и почему я могу Вам доверять?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {firstAnswers.map(({ id, answer }) => (
              <p className={style.answer} key={id}>
                {id}. {answer}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            padding: "40px",
            borderRadius: "30px",
            border: `1px solid ${firstQuestion ? "#00dfbd" : "#cad9ec"}`,
          }}
          expanded={secondQuestion}
          onChange={() => setSecondQuestion(!secondQuestion)}
        >
          <AccordionSummary
            className={style.wrappHeaderAcc}
            expandIcon={<Plus expanded={secondQuestion} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <span
                className={`titleAcc ${style.titleOfQuestion} ${
                  secondQuestion
                    ? style.activeQuestion
                    : style.notActiveQuestion
                }`}
              >
                Разве это безопасно — отправлять свои документы в другую страну?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p className={style.answer}>
              Единственный документ, требующийся нам в оригинальном виде — это
              доверенность.
            </p>
            {secondAnswers.map(({ id, answer }) => (
              <p className={style.answer} key={id}>
                {id}. {answer}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            padding: "40px",
            borderRadius: "30px",
            border: `1px solid ${thirdQuestion ? "#00dfbd" : "#cad9ec"}`,
          }}
          expanded={thirdQuestion}
          onChange={() => setThirdQuestion(!thirdQuestion)}
        >
          <AccordionSummary
            className={style.wrappHeaderAcc}
            expandIcon={<Plus expanded={thirdQuestion} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <span
                className={`titleAcc ${style.titleOfQuestion} ${
                  thirdQuestion ? style.activeQuestion : style.notActiveQuestion
                }`}
              >
                Сможете ли Вы получить доступ к моему счету и вывести деньги?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {thirdAnswers.map(({ id, answer }) => (
              <p className={style.answer} key={id}>
                {answer}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            padding: "40px",
            borderRadius: "30px",
            border: `1px solid ${fourthQuestion ? "#00dfbd" : "#cad9ec"}`,
          }}
          expanded={fourthQuestion}
          onChange={() => setFourthQuestion(!fourthQuestion)}
        >
          <AccordionSummary
            className={style.wrappHeaderAcc}
            expandIcon={<Plus expanded={fourthQuestion} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
                justifyContent: "space-between",
                width: "fit-content",
              }}
            >
              <span
                className={`titleAcc ${style.titleOfQuestion} ${
                  fourthQuestion
                    ? style.activeQuestion
                    : style.notActiveQuestion
                }`}
              >
                Сколько времени занимает весь процесс?
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {fourthAnswers.map(({ id, answer }) => (
              <p className={style.answer} key={id}>
                {answer}
              </p>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
};

export default Questions;
