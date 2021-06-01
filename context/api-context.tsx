import React, { createContext, FC, ReactNode, useState, useMemo } from "react";

interface ApiContextValue {
  userName: string;
  setUserName: (text: any) => void;
  userData: string[] | undefined;
  fetchApi: (userName: string) => void;
}

export const ApiContext = createContext<ApiContextValue>({
  userName: " ",
  setUserName: () => undefined,
  userData: [],
  fetchApi: () => undefined,
});

export const ApiContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = (userName: string) => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
      });
  };

  const value = useMemo(
    () => ({
      userName,
      userData,
      setUserName,
      fetchApi,
    }),
    [userName]
  );
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};
