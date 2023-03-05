import React, { FC, ReactNode } from "react";
import { GlobalContextProvider } from "./type";
import { BudgetContextProvider } from "../BadgetContext/BadgetContex";
import { CurrencyContextProvider } from "../CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "../ExpensesContext/ExpensesContext";

const providers = [
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
];

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {providers.reduceRight((total, Provider) => {
        return <Provider>{total}</Provider>;
      }, children)}
    </>
  );
};
