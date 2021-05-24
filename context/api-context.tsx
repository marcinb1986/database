// import React, { createContext, useState, useMemo, FC, ReactNode } from "react";
// import { interpolateNode } from "react-native-reanimated";

// type AssetType = {
//   login: string;
//   id: number;
//   avatar_url: string;
//   name: string;
//   location: string;
//   repos_url: string;
//   public_repos: number;
// };
// interface AssetContextValue {
//   assets: any;
//   setData: (assets: AssetType[]) => any;
//   fetchData: () => any;
//   loading: false;
// }
// export const ApiContext = createContext<AssetContextValue>({
//   assets: undefined,
//   setData: () => undefined,
//   fetchData: () => undefined,
//   loading: false,
// });

// export const ApiContextProvider: FC<{ children: ReactNode }> = ({
//   children,
// }) => {

//   const [login, setLogin] = useState("");
//   const [id, setId] = useState("");
//   const [avatarUrl, setAvatarUrl] = useState("");
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [reposUrl, setReposUrl] = useState("");
//   const [publicRepos, setPublicRepos] = useState("");

//   const apiAdress: string = "https://api.github.com/users/";

//   const fetchData = fetch(`{apiAdress}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data);
//     });

//   const setData = ({
//     login,
//     id,
//     avatar_url,
//     name,
//     location,
//     repos_url,
//     public_repos,
//   }) => {
//     setLogin(login);
//     setAvatarUrl(avatar_url);
//     setName(name);
//     setLocation(location);
//     setReposUrl(repos_url);
//     setPublicRepos(public_repos);
//   };
// };

// import {createContext, ReactNode, useState, useMemo} from 'react';

// const ApiContext = createContext(undefined)

// export const ApiContextProvider: any({children}:{children:ReactNode}) {

//   const [userName, setUserName] = useState("");
//   const [login, setLogin] = useState("");
//   const [id, setId] = useState("");
//   const [avatarUrl, setAvatarUrl] = useState("");
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [reposUrl, setReposUrl] = useState("");
//   const [publicRepos, setPublicRepos] = useState("");

//   const fetchData = () => {fetch(`https://api.github.com/users/${userName}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data);
//     })};

//   const setData = ({
//     login,
//     id,
//     avatar_url,
//     name,
//     location,
//     repos_url,
//     public_repos,
//   }) => {
//     setLogin(login);
//     setAvatarUrl(avatar_url);
//     setName(name);
//     setLocation(location);
//     setReposUrl(repos_url);
//     setPublicRepos(public_repos);
//   };

//     const value = useMemo (() => ({userName, setUserName, fetchData}), [userName,setUserName, fetchData])

//     return  <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
// };
