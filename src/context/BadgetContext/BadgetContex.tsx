import { createContext, useContext, useState } from "react";
import { BudgetContextProviderProps, BudgetContext } from "./types";

const BudgetsContext = createContext<BudgetContext>({} as BudgetContext);

export const useBudgetContext = () => useContext(BudgetsContext);

const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContext>(() => ({
    budget: 0,
    setNewBudget: (value) => {
      setBudgetContext((context) => ({
        ...context,
        budget: value,
      }));
    },
  }));
  return budgetContext;
};

export const BudgetContextProvider = ({
  children,
}: BudgetContextProviderProps) => {
  return (
    <BudgetsContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetsContext.Provider>
  );
};
