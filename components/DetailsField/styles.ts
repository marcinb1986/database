import styled from "styled-components/native";
import { View, Text } from "react-native";
import { colors, margins } from "../../styles/variables";

export const StyledDetailsField = styled(View)`
  background: ${(props: { backgroundColor: string }) => props.backgroundColor};
  width: 80%;
  height: 50vh;
  border-radius: 10px;
  margin-top: ${margins.margin};
  border: 1px solid ${colors.borderline};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailsFieldChild = styled(Text)`
  margin: ${margins.margin};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;
