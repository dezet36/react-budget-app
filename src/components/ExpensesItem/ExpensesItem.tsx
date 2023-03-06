import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import {
  StyledButtonDelete,
  StyledExpenseItem,
  StyledExpenseText,
  StyledItemBox,
} from "./styled";

import { Expense } from "../../context/ExpensesContext/types";

interface ExpenseItemProps {
  expense: Expense;
}

export const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  const {
    currentCurrency: { value },
  } = useCurrencyContext();
  const { removeExpense } = useExpensesContext();
  const handleDelete = () => {
    removeExpense(expense.id);
  };
  return (
    <StyledExpenseItem>
      <StyledExpenseText>{expense.name}</StyledExpenseText>
      <StyledItemBox>
        <Badge price={expense.price} />
        <StyledButtonDelete onClick={handleDelete}></StyledButtonDelete>
      </StyledItemBox>
    </StyledExpenseItem>
  );
};
