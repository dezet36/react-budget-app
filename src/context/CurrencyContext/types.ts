import { Currency } from "../../config/currency";
import { ReactNode } from "react";
import { CurrencyValue } from "../../config/types";

export interface CurrencyContextProviderProps {
  children: ReactNode;
}

export interface CurrencyContextValue {
  currentCurrency: CurrencyValue;
  currencies: CurrencyValue[];
  setNewCurrency: (option: CurrencyValue) => void;
}
