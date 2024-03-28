"use client";

import { Movie } from "@/data/movies";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface ListContextValue {
  myList: Movie[];
  addToMyList: (movie: Movie) => void;
  removeFromMyList: (movie: Movie) => void;
}

const ListContext = createContext<ListContextValue>({} as ListContextValue);

function ListProvider(props: PropsWithChildren) {
  const [myList, setMyList] = useState<Movie[]>([]);

  const addToMyList = (movie: Movie) => {
    if (!myList.some((m) => m.id === movie.id)) {
      setMyList([...myList, movie]);
    }
  };

  const removeFromMyList = (movie: Movie) => {
    setMyList(myList.filter((m) => m.id !== movie.id));
  };

  return (
    <ListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {props.children}
    </ListContext.Provider>
  );
}

export const useList = () => useContext(ListContext);
export default ListProvider;
