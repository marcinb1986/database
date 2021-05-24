import React, { FC } from "react";
import { StyledDetailsWrapper, StyledDetail } from "./styles";

interface DetailsProps {
  selectionColor?: string | undefined;
}
export const DetailsData: FC<DetailsProps> = ({ children, selectionColor }) => {
  return (
    <StyledDetailsWrapper>
      <StyledDetail selectionColor={selectionColor}>{children}</StyledDetail>
    </StyledDetailsWrapper>
  );
};
