import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC, useEffect, useState } from "react";
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
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({});

  const handleUserName = (text: string) => {
    setUserName(text);
  };

  useEffect(() => {
    const fetchData = setTimeout(() => {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => setUserData(data));
      console.log(userData);
    }, 500);

    return () => {
      clearTimeout(fetchData);
    };
  }, [userName]);

  return (
    <StyledContainer>
      <SearchField value={userName} onChangeText={handleUserName} />
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
