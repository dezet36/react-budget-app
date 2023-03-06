import React from "react";
import { useBudgetContext } from "../../context/BadgetContext/BadgetContex";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyleRemainig, StyledText } from "./style";

export const RemainingCard = () => {
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const remaining =
    budget - expenses.reduce((total, { price }) => total + price, 0);
  const isEditMode = remaining >= 0;
  return (
    <StyleRemainig $isEditMode={isEditMode}>
      <StyledText>
        {isEditMode
          ? `Remaining: ${value} ${remaining}`
          : `Overspending by: ${value} ${Math.abs(remaining)}`}
      </StyledText>
    </StyleRemainig>
  );
};
