import React, { FC } from "react";
import { StyledTextInput, TextInputWrapper } from "../SearchField/styles";

export const SearchField: FC<any> = () => {
  return (
    <TextInputWrapper>
      <StyledTextInput placeholder="    type email adress" />
    </TextInputWrapper>
  );
};
