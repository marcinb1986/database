import { View, Text } from "react-native";
import styled from "styled-components/native";

export const StyledDetailsWrapper = styled(View)`
  margin: 10px;
  text-align: center;
  height: 20px;
  width: 100px;
`;

export const StyledDetail = styled(Text)`
  ${(props: { selectionColor: string | undefined }) => props.selectionColor};
`;
