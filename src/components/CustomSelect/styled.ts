import { StylesConfig } from "react-select";
import { CurrencyValue } from "../../config/types";

export const selectStyles: StylesConfig<CurrencyValue> = {
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
    color: "black",
    backgroundColor: state.isFocused ? "#7CC6FE" : "white",
  }),
};
