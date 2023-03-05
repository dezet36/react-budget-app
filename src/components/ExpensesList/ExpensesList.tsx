import React from "react";
import { Badge } from "../Badge/Badge";
import { ExpenseItem } from "../ExpensesItem/ExpensesItem";
import { Expense } from "../../context/ExpensesContext/types";
import { StyledExpenseList } from "./styled";

interface ExpensesListProps {
  expenses: Expense[];
}

export const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <StyledExpenseList>
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </StyledExpenseList>
  );
};
