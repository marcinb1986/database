import styled from "styled-components/native";
import { View } from "react-native";
import { colors } from "../../styles/variables";

export const StyledDetailsField = styled(View)`
  background: ${(props: { backgroundColor: string }) => props.backgroundColor};
  width: 80%;
  height: 50vh;
  border-radius: 10px;
  margin-top: 5vh;
  border: 1px solid ${colors.borderline};
`;
