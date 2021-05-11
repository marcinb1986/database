import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { DetailsField } from "../../components/DetailsField";
import { StyledContainer } from "../../styles/styles";
import { colors } from "../../styles/variables";
import { Button } from "../../components/Button";
import { BottomTabParamList } from "../../types";

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList, "DetailsScreen">;
}
export const TabTwoScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <DetailsField backgroundColor={colors.whiteColor} />
      <Button
        fontColor={colors.darkFontColor}
        backgroundColor={colors.alert}
        title="Go back"
        onPress={() => {
          navigation.goBack;
        }}
      />
    </StyledContainer>
  );
};
