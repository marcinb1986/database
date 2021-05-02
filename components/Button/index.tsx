import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { ButtonWrapper, StyledButton } from "../Button/styles";

export interface ButtonProps {
  color: string;
  children: string;
  fontWeigth: number;
  fontColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  color,
  children,
  fontColor,
  fontWeigth,
  onPress,
}) => {
  return (
    <ButtonWrapper {...{ color, fontColor, fontWeigth, onPress }}>
      <StyledButton>{children}</StyledButton>
    </ButtonWrapper>
  );
};
