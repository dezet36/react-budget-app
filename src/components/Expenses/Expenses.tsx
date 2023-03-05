import React, { useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { useInput } from "../../hooks/useInput";
import { StyleExpenses, Title, StyledInput, EmptyText } from "./style";
import { Expense } from "../../context/ExpensesContext/types";
import { useDebounce } from "../../hooks/useDebounce";

export const Expenses = () => {
  const searchValue = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  const debouncedValue = useDebounce(searchValue, 400);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) =>
        expense.name.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    );
  }, [debouncedValue, expenses]);

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
