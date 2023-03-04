import styled from "styled-components";

const StyleExpenses = styled.div`
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

const StyledInput = styled.input`
  padding-left: 15px;
  height: 50px;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #999999;
  }

  @media (max-width: 390px) {
    padding: 13px 10px;
    font-size: 12px;
  }
`;

const EmptyText = styled.p`
  justify-self: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export { StyleExpenses, Title, StyledInput, EmptyText };
