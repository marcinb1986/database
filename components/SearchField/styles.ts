import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors, margins } from "../../styles/variables";

export const StyledTextInput = styled(TextInput)`
  height: 5vh;
  width: 80%;
  background: ${colors.whiteColor};
  border: ${colors.borderline};
  border-radius: 10px;
  margin-top: ${margins.margin};
`;

export const TextInputWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;
