import React from "react";
import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { CurrencyValue } from "../../config/types";
import { selectStyles } from "./styled";

export const CustomSelect = () => {
  const { currencies, currentCurrency, setNewCurrency } = useCurrencyContext();
  const handleOption = (option: SingleValue<CurrencyValue>) => {
    if (option) {
      setNewCurrency(option);
    }
  };
  return (
    <Select
      styles={selectStyles}
      onChange={handleOption}
      value={currentCurrency}
      options={currencies}
      isMulti={false}
    />
  );
};
