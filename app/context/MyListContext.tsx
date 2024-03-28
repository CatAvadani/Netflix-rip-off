"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ListContextValue {
  myList: string[];
  toggleMyList: (movieId: string) => void;
}

const MyListContext = createContext({} as ListContextValue);

function MyListProvider(props: PropsWithChildren) {
  const [myList, setMyList] = useState<string[]>([]);

  const toggleMyList = (movieId: string) => {
    const isAddedToList = myList.some((m) => m === movieId);
    if (isAddedToList) {
      // Ta bort
      setMyList(myList.filter((m) => m !== movieId));
    } else {
      // Lägg till
      setMyList([...myList, movieId]);
    }
  }
    return (
      <MyListContext.Provider value={{
         myList,
          toggleMyList
         }}>
        {props.children}
      </MyListContext.Provider>
    );
  }


export const useList = () => useContext(MyListContext);
export default MyListProvider;
