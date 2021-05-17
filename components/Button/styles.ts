import { TouchableOpacity, Button } from "react-native";
import styled from "styled-components/native";
import { margins } from "../../styles/variables";

export const ButtonWrapper = styled(TouchableOpacity)`
  height: 40px;
  width: 40%;
  margin-top: ${margins.marginTop};
`;

export const StyledButton = styled(Button)`
  color: ${(props: { color: string }) => props.color};
`;
