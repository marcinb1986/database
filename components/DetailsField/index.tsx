import React, { FC } from "react";
import { StyledDetailsField } from "../DetailsField/styles";

export interface SearchFieldProps {
  backgroundColor: string;
}

export const DetailsField: FC<SearchFieldProps> = ({ backgroundColor }) => {
  return <StyledDetailsField {...{ backgroundColor }} />;
};
