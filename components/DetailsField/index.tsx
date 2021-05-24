import React, { FC } from "react";
import { StyledDetailsField, StyledDetail } from "../DetailsField/styles";

export interface SearchFieldProps {
  backgroundColor: string;
  children: any;
}

export const DetailsField: FC<SearchFieldProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <StyledDetailsField {...{ backgroundColor }}>
      {/* <StyledDetail>{children}</StyledDetail> */}
      {children}
    </StyledDetailsField>
  );
};
