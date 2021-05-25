import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { FC, useEffect, useState } from "react";
import { StyledContainer } from "../../styles/styles";
import { BottomTabParamList } from "../../types";
import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
import { DetailsField } from "../../components/DetailsField";
import { colors } from "../../styles/variables";
import { Loading } from "../../components/Loading";
import { DetailsFieldChild } from "../../components/DetailsField/styles";

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList, "SearchScreen">;
}
export const TabOneScreen: FC<IProps> = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleUserName = (text: string) => {
    setUserName(text);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = setTimeout(() => {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          setUserData(data);
        });
    }, 500);
    return () => {
      clearTimeout(fetchData);
    };
  }, [userName]);

  console.log(userData?.id);

  return (
    <StyledContainer>
      <SearchField value={userName} onChangeText={handleUserName} />
      <Loading isLoading={isLoading} />
      <Button
        color={colors.buttonBackground}
        title="Clear User"
        onPress={() => {
          setUserName("");
        }}
      />
      <DetailsField backgroundColor={colors.whiteColor}>
        <DetailsFieldChild>
          {`id : ${userData?.id ? userData.id : ""}`}
        </DetailsFieldChild>
        <hr />
        <DetailsFieldChild>
          {`Location : ${userData?.location ? userData.location : ""}`}
        </DetailsFieldChild>
        <hr />
        <DetailsFieldChild>
          {`GitHub user from :${"\n"} ${
            userData?.created_at ? userData.created_at : ""
          }`}
        </DetailsFieldChild>

        {/* {`id : ${userData?.id ? userData.id : ""}`}
        {`location : ${userData?.location ? userData.location : ""}`}
        {`GitHub user from : ${
          userData?.created_at ? userData.created_at : ""
        }`} */}
      </DetailsField>
      {userData && userData.id}
      <Button
        color={colors.buttonBackground}
        title="Show more!"
        onPress={() => {
          navigation.navigate("DetailsScreen");
        }}
      />
    </StyledContainer>
  );
};
