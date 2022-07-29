import React from "react";
import style from "./Plus.module.scss";
import { Box } from "@mui/material";
const Plus = ({ expanded }) => {
  return (
    <Box className={`${expanded ? 'activePlus' : 'plus'} ${!expanded ? style.active : style.notActive}`}></Box>
  );
};

export default Plus;
