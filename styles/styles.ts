import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styles/variables";

export const StyledContainer = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.mainBackgroundColor};
  min-height: 100%;
  width: 100%;
`;
