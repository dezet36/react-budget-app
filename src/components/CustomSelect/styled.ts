import { StylesConfig } from "react-select";
import { CurrencyContextValue } from "../../context/CurrencyContext/types";

export const selectStyles: StylesConfig<CurrencyContextValue> = {
  control: (baseStyles) => ({
    ...baseStyles,
    height: "30px",
    width: "85px",
    borderRadius: "5px",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    textAlign: "center",
    color: "#000",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? "#7CC6FE" : "white",
  }),
};
