import React, { useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { useInput } from "../../hooks/useInput";
import { StyleExpenses, Title, StyledInput, EmptyText } from "./style";
import { Expense } from "../../context/ExpensesContext/types";

export const Expenses = () => {
  const searchValue = useInput();
  // const debouncedValue = useDebounce(searchValue.value);
  const [sortedExpenses, setSortedExpenses] = useState<Expense[]>();
  const { expenses, removeExpense } = useExpensesContext();
  return (
    <StyleExpenses>
      <Title>Expenses</Title>
      <StyledInput placeholder="seach..." />
      <ExpensesList expenses={[]} />
      <EmptyText>Oooops 🙈</EmptyText>
    </StyleExpenses>
  );
};

// import { InputSearch } from "../InputSearch/InputSearch";

// import { Title } from "../Title/Title";
// import { EmptyText, StyledExpenses } from "./styles";
// import { ExpenseProduct } from "../../types/types";

// import { useDebounce } from "../../hooks/useDebounce";

// export const Expenses = () => {
//   const { expenses } = useExpensesContext();
//   const searchValue = useInput();
//   const debouncedValue = useDebounce(searchValue.value);
//   const [sortedExpenses, setSortedExpenses] = useState<ExpenseProduct[]>();

//   return (
//     <StyledExpenses>
//       <Title title="Expenses" />
//       <InputSearch placeholder="seach..." />
//       <ExpensesList expenses={[]} />
//       <EmptyText>Oooops 🙈</EmptyText>
//     </StyledExpenses>
//   );
// };
