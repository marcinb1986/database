import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { Text } from "react-native";
import { StyledContainer } from "../../styles/styles";
import { TabTwoParamList } from "../../types";

interface IProps {
  navigation: StackNavigationProp<TabTwoParamList, "DetailsScreen">;
}
export const TabTwoScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <Text>Działa</Text>
    </StyledContainer>
  );
};
