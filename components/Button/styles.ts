import { TouchableOpacity, Button } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/variables";

export const ButtonWrapper = styled(TouchableOpacity)`
  border-radius: 10px;
  height: 40px;
  width: 40%;
  margin-top: 5vh;
`;

export const StyledButton = styled(Button)`
  background: ${(props: { backgroundColor: string }) => props.backgroundColor};
`;
