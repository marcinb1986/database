import React, { FC } from "react";
import { GestureResponderEvent, TextComponent } from "react-native";
import { ButtonWrapper, StyledButton } from "../Button/styles";

export interface ButtonProps {
  color: string;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: FC<ButtonProps> = ({ color, title, onPress }) => {
  return (
    <ButtonWrapper>
      <StyledButton {...{ title, onPress, color }} />
    </ButtonWrapper>
  );
};
