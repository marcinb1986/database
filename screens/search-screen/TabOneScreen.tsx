import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { Text } from "react-native";
import { StyledContainer } from "../../styles/styles";
import { TabOneParamList } from "../../types";

interface IProps {
  navigation: StackNavigationProp<TabOneParamList, "SearchScreen">;
}
export const TabOneScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <Text>Działa</Text>
    </StyledContainer>
  );
};
