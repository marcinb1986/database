import { TextInput, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/variables";

export const StyledTextInput = styled(TextInput)`
  height: 40px;
  width: 80%;
  background: ${colors.inputBgcColor};
  border: ${colors.borderline};
  margin-top: 50px;
  border-radius: 10px;
`;

export const TextInputWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
`;
