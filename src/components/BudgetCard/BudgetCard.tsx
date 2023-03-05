import React from "react";
import { useBudgetContext } from "../../context/BadgetContext/BadgetContex";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import {
  StyleBudgetCard,
  StyleText,
  StyledInputBudget,
  StyledButtonBudget,
} from "./style";

export const BudgetCard = () => {
  const { budget, setNewBudget } = useBudgetContext();
  const [isEditMode, toggleMode] = useToggle(false);
  const { currentCurrency } = useCurrencyContext();

  const inputBudget = useInput();

  const handleSave = () => {
    setNewBudget(Number(inputBudget.value));
    toggleMode();
  };
  return (
    <StyleBudgetCard>
      {isEditMode ? (
        <>
          <StyledInputBudget
            placeholder="Enter Budget ..."
            type="number"
            {...inputBudget}
          />
          <StyledButtonBudget type="button" onClick={handleSave}>
            Save
          </StyledButtonBudget>
        </>
      ) : (
        <>
          <StyleText>
            Budget: {currentCurrency.value}
            {budget}
          </StyleText>
          <StyledButtonBudget type="button" onClick={handleSave}>
            Edit
          </StyledButtonBudget>
        </>
      )}
    </StyleBudgetCard>
  );
};
