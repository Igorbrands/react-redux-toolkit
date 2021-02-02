import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { RootState } from "../store/ConfigureStore";
import { Themes } from "./themes";

const Theme: React.FC = ({ children }) => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return <ThemeProvider theme={Themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
