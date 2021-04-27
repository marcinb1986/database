import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { StyledContainer } from "../../styles/styles";
import { TabOneParamList } from "../../types";
import { SearchField } from "../../components/SearchField";

interface IProps {
  navigation: StackNavigationProp<TabOneParamList, "SearchScreen">;
}
export const TabOneScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <SearchField />
    </StyledContainer>
  );
};
