import * as React from "react";
import { FC, useEffect, useContext } from "react";

import { StackNavigationProp } from "@react-navigation/stack";

import { SearchField } from "../../components/SearchField";
import { Button } from "../../components/Button";
import { DetailsField } from "../../components/DetailsField";
import { Loading } from "../../components/Loading";
import { DetailsFieldChild } from "../../components/DetailsField/styles";
import { ApiContext } from "../../context/api-context";

import { StyledContainer } from "../../styles/styles";
import { BottomTabParamList } from "../../types";
import { colors } from "../../styles/variables";

interface IProps {
  navigation: StackNavigationProp<BottomTabParamList, "SearchScreen">;
}
export const TabOneScreen: FC<IProps> = ({ navigation }) => {
  // const [userName, setUserName] = useState("");
  // const [userData, setUserData] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // const handleUserName = (text: string) => {
  //   setUserName(text);
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchData = setTimeout(() => {
  //     fetch(`https://api.github.com/users/${userName}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setIsLoading(false);
  //         setUserData(data);
  //       });
  //   }, 500);
  //   return () => {
  //     clearTimeout(fetchData);
  //   };
  // }, [userName]);

  const { userName, setUserName, userData, fetchApi, isLoading } = useContext(
    ApiContext
  );

  const handleUserName = (text: string) => {
    setUserName(text);
  };

  useEffect(() => {
    fetchApi(userName);
  }, [userName]);

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
      </DetailsField>
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
