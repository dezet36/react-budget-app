import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyleSpentCard, StyledText } from "./style";

export const SpentCard = () => {
  const { expenses } = useExpensesContext();
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const getSpentSum = expenses.reduce(
    (totalExpenses, { price }) => totalExpenses + +price,
    0
  );
  return (
    <StyleSpentCard>
      <StyledText>
        Spent so far: {value} {getSpentSum}
      </StyledText>
    </StyleSpentCard>
  );
};
