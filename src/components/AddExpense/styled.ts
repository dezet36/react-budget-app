import styled from "styled-components";

const StyledAddExpense = styled.form`
  display: grid;
  gap: 30px;
`;

const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const StyledInputForm = styled.input`
  padding-left: 15px;
  height: 50px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999999;
  }
  &:focus-visible {
    outline: none;
  }

  @media (max-width: 390px) {
    padding: 13px 10px;
    font-size: 12px;
  }
`;

const StyledButton = styled.button`
  padding: 15px 0;
  color: #fff;
  border: none;
  border-radius: 10px;
  background-color: #23c9ff;
  transition: 0.2s;
  cursor: pointer;
`;
export { StyledButton };

export { StyledAddExpense, Title, StyledInputForm };
