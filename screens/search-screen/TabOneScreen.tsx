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
        fontColor={colors.lightFontColor}
        fontWeigth={600}
        backgroundColor={colors.buttonBackground}
        title="Show more"
        onPress={() => navigation.goBack()}
      />
      <DetailsField backgroundColor={colors.whiteColor} />
    </StyledContainer>
  );
};
