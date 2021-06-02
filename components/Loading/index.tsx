import React, { FC } from "react";
import { Text } from "react-native";

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Text style={{ height: 30, alignSelf: "center", marginTop: 10 }}>
      {isLoading ? "Loading..." : null}
    </Text>
  );
};
