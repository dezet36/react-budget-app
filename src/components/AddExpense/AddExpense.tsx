import React from "react";
import { Button } from "../Button/ButtonForm";
import {
  Title,
  StyledInputForm,
  StyledAddExpense,
  ErrorMessage,
} from "./styled";

import { SubmitHandler, useForm } from "react-hook-form";

import { useBudgetContext } from "../../context/BadgetContext/BadgetContex";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Expense } from "../../context/ExpensesContext/types";

export const AddExpense = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Expense>();

  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const { addNewExpense } = useExpensesContext();

  const onSubmit: SubmitHandler<Expense> = ({ name, price }) => {
    addNewExpense({ name, price, id: 1 });
    reset();
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
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      <StyledInputForm
        {...register("price", {
          required: "* price is required",
          maxLength: { value: 6, message: "* max 6 characters" },
          valueAsNumber: true,
        })}
        type="number"
        placeholder="enter cost ..."
      />
      {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
      <Button children="Done" />
    </StyledAddExpense>
  );
};
