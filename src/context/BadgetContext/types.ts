import { ReactNode } from "react";

export interface BudgetContextProviderProps {
  children: ReactNode;
}

export interface BudgetContext {
  budget: number;
  setNewBudget: (value: number) => void;
}
