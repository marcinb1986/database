import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { ButtonWrapper, StyledButton } from "../Button/styles";

export interface ButtonProps {
  backgroundColor: string;
  title: string;
  fontWeigth: number;
  fontColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  backgroundColor,
  title,
  fontColor,
  fontWeigth,
  onPress,
}) => {
  return (
    <ButtonWrapper {...{ backgroundColor, fontColor, fontWeigth, onPress }}>
      <StyledButton {...{ title }} />
    </ButtonWrapper>
  );
};
