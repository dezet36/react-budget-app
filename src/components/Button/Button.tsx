import React, { ReactNode } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  value: ReactNode;
  onClick?: () => void;
}

export const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <StyledButton type="submit" onClick={onClick}>
      {value}
    </StyledButton>
  );
};
