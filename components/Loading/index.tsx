import React, { FC } from "react";
import { Text } from "react-native";

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return isLoading ? <Text>Loading...</Text> : null;
};
