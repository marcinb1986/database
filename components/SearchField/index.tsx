import React, { FC } from "react";
import { StyledTextInput, TextInputWrapper } from "../SearchField/styles";

export const SearchField: FC<any> = ({ value, onChangeText }) => {
  return (
    <TextInputWrapper>
      <StyledTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Github user"
      />
    </TextInputWrapper>
  );
};
