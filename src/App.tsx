import React from "react";
import { AppWrapper } from "./ui/styled";
import { Budget } from "./components/Budget/Budget";
import { Expenses } from "./components/Expenses/Expenses";
import { AddExpense } from "./components/AddExpense/AddExpense";

export const App = () => {
  return (
    <AppWrapper>
      <Budget />
      <Expenses />
      <AddExpense />
    </AppWrapper>
  );
};
