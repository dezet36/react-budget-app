import { ReactNode } from "react";

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpense: (expense: Expense) => void;
  removeExpense: (id: number) => void;
}

export interface ExpensesContextProviderops {
  children: ReactNode;
}

export interface Expense {
  id: number;
  name: string;
  price: number;
}
