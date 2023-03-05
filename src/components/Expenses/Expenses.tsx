import React, { useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { useInput } from "../../hooks/useInput";
import { StyleExpenses, Title, StyledInput, EmptyText } from "./style";
import { Expense } from "../../context/ExpensesContext/types";

export const Expenses = () => {
  const searchValue = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);

  return (
    <StyleExpenses>
      <Title>Expenses</Title>
      <StyledInput {...searchValue} placeholder="search ..." />
      {filteredExpenses.length ? (
        <ExpensesList expenses={filteredExpenses} />
      ) : (
        <EmptyText>Oooops 🙈</EmptyText>
      )}
    </StyleExpenses>
  );
};
