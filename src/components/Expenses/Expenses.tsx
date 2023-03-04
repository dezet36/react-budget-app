import React from "react";
import { StyleExpenses, Title, StyledInput } from "./style";

export const Expenses = () => {
  return (
    <StyleExpenses>
      <Title>Expenses</Title>
      <StyledInput placeholder="search ..." />
      {/* <ExpensesList /> */}
    </StyleExpenses>
  );
};
