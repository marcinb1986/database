import React, { FC } from "react";
import { StyledDetailsField } from "../DetailsField/styles";
import { colors } from "../../styles/variables";

export interface SearchFieldProps {
  color: string;
}

export const DetailsField: FC<SearchFieldProps> = ({ color }) => {
  return <StyledDetailsField {...{ color }} />;
};
