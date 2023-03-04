import { Currency } from "./currency";

export interface CurrencyValue {
  label: keyof typeof Currency;
  value: Currency;
}
