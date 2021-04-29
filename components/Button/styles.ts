import { TouchableOpacity, Button } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/variables";

export const ButtonWrapper = styled(TouchableOpacity)`
  background: ${(props: { color: string }) => props.color};
  border-radius: 10px;
  height: 100px;
  width: 60%;
`;

export const StyledButton = styled(Button)`
  color: ${colors.darkFontColor};
`;
