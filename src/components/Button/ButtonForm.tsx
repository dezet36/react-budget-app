import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

export const ButtonForm = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>Done</StyledButton>;
};
