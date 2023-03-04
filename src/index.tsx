import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./context/GlobalContext/GlobalContext";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { BudgetContextProvider } from "./context/BadgetContext/BadgetContex";
import { CurrencyContextProvider } from "./context/CurrencyContext/CurrencyContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider
    components={[
      BudgetContextProvider,
      ExpensesContextProvider,
      CurrencyContextProvider,
    ]}
  >
    <App />
  </AppContextProvider>
);
