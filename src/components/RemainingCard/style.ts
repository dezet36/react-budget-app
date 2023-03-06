import styled from "styled-components";

interface RemainigProps {
  $isEditMode: boolean;
}

const StyleRemainig = styled.div<RemainigProps>`
  padding: 38px 20px;
  color: ${({ $isEditMode }: RemainigProps) =>
    $isEditMode ? "#000000" : "#FFFFFF"};
  background: ${({ $isEditMode }: RemainigProps) =>
    $isEditMode ? "#CCD5FF" : "#FF0000"};
  border-radius: 20px;
`;

const StyledText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export { StyleRemainig, StyledText };
