import * as React from "react";
import { FC } from "react";
import { useContext } from "react";

import { StackNavigationProp } from "@react-navigation/stack";

import { Button } from "../../components/Button";
import { DetailsField } from "../../components/DetailsField";
import { ApiContext } from "../../context/api-context";

import { StyledContainer } from "../../styles/styles";
import { colors } from "../../styles/variables";
import { BottomTabParamList } from "../../types";
import { DetailsFieldChild } from "../../components/DetailsField/styles";

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList, "DetailsScreen">;
}
export const TabTwoScreen: FC<IProps> = ({ navigation }) => {
  const { userData } = useContext(ApiContext);

  return (
    <StyledContainer>
      <DetailsField backgroundColor={colors.whiteColor}>
        <DetailsFieldChild>
          {`name: ${userData?.name ? userData.name : ""}`}
        </DetailsFieldChild>
        <DetailsFieldChild>
          {`node id: ${userData?.node_id ? userData.node_id : ""}`}
        </DetailsFieldChild>
        <DetailsFieldChild>
          {`company: ${userData?.company ? userData.company : ""}`}
        </DetailsFieldChild>
        <DetailsFieldChild>
          {`hireable: ${userData?.hireable ? userData.hireable : ""}`}
        </DetailsFieldChild>
        <DetailsFieldChild>
          {`public repos: ${
            userData?.public_repos ? userData.public_repos : ""
          }`}
        </DetailsFieldChild>
      </DetailsField>
      <Button
        color={colors.buttonBackground}
        title="Go back"
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      />
    </StyledContainer>
  );
};
