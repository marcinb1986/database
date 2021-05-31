import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { DetailsField } from "../../components/DetailsField";
import { StyledContainer } from "../../styles/styles";
import { colors } from "../../styles/variables";
import { Button } from "../../components/Button";
import { BottomTabParamList, RootStackParamList } from "../../types";
import { DetailsFieldChild } from "../../components/DetailsField/styles";

interface IProps {
  navigation: StackNavigationProp<RootStackParamList, "DetailsScreen">;
}
export const TabTwoScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <DetailsField backgroundColor={colors.whiteColor}>
        <DetailsFieldChild>Działa</DetailsFieldChild>
      </DetailsField>
      <Button
        color={colors.buttonBackground}
        title="Go back"
        onPress={() => {
          navigation.navigate("Root");
        }}
      />
    </StyledContainer>
  );
};
