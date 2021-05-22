import React, { FC } from "react";
import { StyledDetailsWrapper, StyledDetail } from "./styles";

interface DetailsProps {
  color?: string;
}
export const DetailsData: FC<DetailsProps> = ({ children, color }) => {
  return (
    <StyledDetailsWrapper {...{ color }}>
      <StyledDetail>{children}</StyledDetail>
    </StyledDetailsWrapper>
  );
};
