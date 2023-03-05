import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
