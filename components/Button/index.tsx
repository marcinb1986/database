import React, { FC } from "react";
import { GestureResponderEvent } from "react-native";
import { ButtonWrapper, StyledButton } from "../Button/styles";

export interface ButtonProps {
  color: string;
  children: string;
  fontColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  color,
  children,
  fontColor,
  onPress,
}) => {
  return (
    <ButtonWrapper {...{ color, fontColor, onPress }}>
      <StyledButton>{children}</StyledButton>
    </ButtonWrapper>
  );
};
