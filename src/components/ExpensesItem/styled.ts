import styled from "styled-components";
import cross from "../../assets/icons/cross.svg";

const StyledExpenseItem = styled.li`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ccd5ff;
`;

const StyledExpenseText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

const StyledItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const StyledButtonDelete = styled.button`
  width: 15px;
  height: 15px;
  border: none;
  background: url(${cross});
`;

export {
  StyledExpenseItem,
  StyledExpenseText,
  StyledItemBox,
  StyledButtonDelete,
};
