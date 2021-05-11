import React, { FC } from "react";
import { GestureResponderEvent, TextComponent } from "react-native";
import { ButtonWrapper, StyledButton } from "../Button/styles";

export interface ButtonProps {
  backgroundColor: string;
  title: string;
  fontColor: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: FC<ButtonProps> = ({
  backgroundColor,
  title,
  fontColor,
  onPress,
}) => {
  return (
    <ButtonWrapper {...{ onPress, fontColor }}>
      <StyledButton {...{ title, backgroundColor }} />
    </ButtonWrapper>
  );
};
