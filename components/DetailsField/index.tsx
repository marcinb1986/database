import React, { FC } from "react";
import { StyledDetailsField, DetailsFieldChild } from "../DetailsField/styles";

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
      <DetailsFieldChild>{children}</DetailsFieldChild>
    </StyledDetailsField>
  );
};
