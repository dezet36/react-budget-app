import styled from "styled-components";

const StyleBudgetCard = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  height: 100px;
  border-radius: 10px;
  background-color: #7cc6fe;
`;

const StyleText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

const StyledInputBudget = styled.input`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  background-color: transparent;
  border: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StyledButtonBudget = styled.button`
  padding: 5px 20px;
  border-radius: 10px;
  background: #ffffff;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;

export { StyleBudgetCard, StyleText, StyledInputBudget, StyledButtonBudget };
