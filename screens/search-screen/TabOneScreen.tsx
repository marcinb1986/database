import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { StyledContainer } from "../../styles/styles";
import { TabOneParamList } from "../../types";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
import { DetailsField } from "../../components/DetailsField";
import { colors } from "../../styles/variables";

interface IProps {
  navigation: StackNavigationProp<TabOneParamList, "SearchScreen">;
}
export const TabOneScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <SearchField />
      <Button
        fontColor={colors.darkFontColor}
        fontWeigth={600}
        color={colors.buttonBackground}
        children={"Show more"}
        onPress={() => {}}
      />
      <DetailsField color={colors.whiteColor} />
    </StyledContainer>
  );
};
