import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { StyledContainer } from "../../styles/styles";
import { BottomTabParamList } from "../../types";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
import { DetailsField } from "../../components/DetailsField";
import { colors } from "../../styles/variables";

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList, "SearchScreen">;
}
export const TabOneScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <SearchField />
      <Button
        color={colors.buttonBackground}
        title="Show more"
        onPress={() => {
          navigation.navigate("DetailsScreen");
        }}
      />
      <DetailsField backgroundColor={colors.whiteColor} />
    </StyledContainer>
  );
};
