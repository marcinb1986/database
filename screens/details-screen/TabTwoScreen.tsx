import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC } from "react";
import { DetailsField } from "../../components/DetailsField";
import { StyledContainer } from "../../styles/styles";
import { TabTwoParamList } from "../../types";
import { colors } from "../../styles/variables";
import { Button } from "../../components/Button";

interface IProps {
  navigation: StackNavigationProp<TabTwoParamList, "DetailsScreen">;
}
export const TabTwoScreen: FC<IProps> = ({ navigation }) => {
  return (
    <StyledContainer>
      <DetailsField backgroundColor={colors.whiteColor} />
      <Button
        fontColor={colors.lightFontColor}
        fontWeigth={600}
        backgroundColor={colors.buttonBackground}
        title="Go back"
        onPress={() => {
          navigation.goBack;
        }}
      />
    </StyledContainer>
  );
};
