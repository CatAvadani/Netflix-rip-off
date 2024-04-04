"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ListContextValue {
  myList: string[];
  toggleMyList: (movieId: string) => void;
  isLoading: boolean;
}

const MyListContext = createContext({} as ListContextValue);

function MyListProvider(props: PropsWithChildren) {
  const [myList, setMyList] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedMyList = localStorage.getItem("myList");
    if (storedMyList) {
      setMyList(JSON.parse(storedMyList));
    }
    setIsLoaded(true);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList, isLoaded]);

  const toggleMyList = (movieId: string) => {
    const isAddedToList = myList.some((m) => m === movieId);

    if (isAddedToList) {
      setMyList(myList.filter((m) => m !== movieId));
    } else {
      setMyList([...myList, movieId]);
    }
  };
  return (
    <MyListContext.Provider
      value={{
        myList,
        toggleMyList,
        isLoading,
      }}
    >
      {props.children}
    </MyListContext.Provider>
  );
}

export const useList = () => useContext(MyListContext);
export default MyListProvider;
