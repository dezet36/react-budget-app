import { ReactNode } from "react";

export interface ExpensesContextValue {
  expenses: Expense[] | [];
  addNewExpense: (value: number) => void;
  removeExpense: (id: string) => void;
}

export interface ExpensesContextProviderops {
  children: ReactNode;
}

export interface Expense {
  id: string;
  name: string;
  price: number;
}
