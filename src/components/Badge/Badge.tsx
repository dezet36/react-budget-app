import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styled";

interface BadgeProps {
  price: number;
}

export const Badge = ({ price }: BadgeProps) => {
  const { currentCurrency } = useCurrencyContext();
  return (
    <StyledBadge>
      {currentCurrency.value} {price}
    </StyledBadge>
  );
};
