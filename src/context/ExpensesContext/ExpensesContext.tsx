import { createContext, useContext, useState } from "react";
import { ExpensesContextProviderops, ExpensesContextValue } from "./types";

const ExpensesContext = createContext<ExpensesContextValue>(
  {} as ExpensesContextValue
);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(
    () => {
      return {
        expenses: [],
        addNewExpense: (value) => {
          setExpensesContext((contex) => ({
            ...contex,
            expenses: [...contex.expenses, value],
          }));
        },

        removeExpense: (id) => {
          setExpensesContext((context) => ({
            ...context,
            expenses: context.expenses.filter((expense) => expense.id !== id),
          }));
        },
      };
    }
  );
  return expensesContext;
};

export const useExpensesContext = () =>
  useContext<ExpensesContextValue>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderops) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
