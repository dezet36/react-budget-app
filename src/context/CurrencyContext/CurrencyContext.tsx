import { createContext, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { CurrencyContextProviderProps, CurrencyContextValue } from "./types";

export const CurrencyContext = createContext<CurrencyContextValue>(
  {} as CurrencyContextValue
);

export const useCurrencyContext = () =>
  useContext<CurrencyContextValue>(CurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(
    () => ({
      currentCurrency: {
        label: "EUR",
        value: Currency.EUR,
      },
      currencies: [
        {
          label: "USD",
          value: Currency.USD,
        },
        {
          label: "EUR",
          value: Currency.EUR,
        },
        {
          label: "GBP",
          value: Currency.GBP,
        },
      ],
      setNewCurrency: (currentCurrency) => {
        setCurrencyContext((context) => ({ ...context, currentCurrency }));
      },
    })
  );

  return currencyContext;
};

export const CurrencyContextProvider = ({
  children,
}: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
