import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC, useEffect, useContext } from "react";
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
  useEffect(() => {});

  return (
    <StyledContainer>
      <SearchField />
      <DetailsField backgroundColor={colors.whiteColor} />
      <Button
        color={colors.buttonBackground}
        title="Show more"
        onPress={() => {
          navigation.navigate("DetailsScreen");
        }}
      />
    </StyledContainer>
  );
};
