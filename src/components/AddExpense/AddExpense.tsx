import React from "react";
import { Button } from "../Button/Button";
import {
  // StyledAddExpense,
  Title,
  StyledInputForm,
  StyledButton,
  StyledAddExpense,
} from "./styled";

import { SubmitHandler, useForm } from "react-hook-form";
// import { text } from "stream/consumers";
import { useBudgetContext } from "../../context/BadgetContext/BadgetContex";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";

export const AddExpense = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { budget } = useBudgetContext();

  console.log(watch("name"));
  console.log(watch("price"));

  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<Expense> = ({ name, price }) => {
    if (budget) {
      console.log(name);
      addNewExpense({ name, price, id: 1 });
    } else {
      alert("Enter budget");
    }
  };
  return (
    <StyledAddExpense onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <StyledInputForm
        {...register("name", {
          required: "* expense is required",
          minLength: { value: 2, message: "* min 2 characters" },
          maxLength: { value: 15, message: "* max 15 characters" },
        })}
        type="text"
        placeholder="enter name ..."
      />

      <StyledInputForm
        {...register("price", {
          required: "* price is required",
          maxLength: { value: 6, message: "* max 6 characters" },
          valueAsNumber: true,
        })}
        type="number"
        placeholder="enter cost ..."
      />

      {errors.exampleRequired && <p>This field is required</p>}

      <input type="submit" />
    </StyledAddExpense>
  );
};
