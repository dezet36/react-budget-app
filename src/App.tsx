import React from "react";
import { AppWrapper } from "./ui/styled";
import { Badge } from "./components/Badge/Badge";
import { Expenses } from "./components/Expenses/Expenses";
import { AddExpense } from "./components/AddExpense/AddExpense";

export const App = () => {
  return (
    <AppWrapper>
      <Badge />
      <Expenses />
      <AddExpense />
    </AppWrapper>
  );
};
