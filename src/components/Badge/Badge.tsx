import React from "react";
import { BadgeHeader, Title, StyledBadge } from "./style";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { RemainingCard } from "../RemainingCard/RemainingCard";
import { SpentCard } from "../SpentCard/SpentCard";

export const Badge = () => {
  return (
    <StyledBadge>
      <BadgeHeader>
        <Title>Budget App</Title>
        {/* <CustomSelect /> */}
      </BadgeHeader>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledBadge>
  );
};
