"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

interface SearchContextValue {
  searchMovies: string;
  setSearchMovies: (value: string) => void;
}

const SearchMovieContext = createContext({} as SearchContextValue);

function SearchMovieProvider(props: PropsWithChildren) {
  const [searchMovies, setSearchMovies] = useState<string>("");

  return (
    <SearchMovieContext.Provider
      value={{
        searchMovies,
        setSearchMovies,
      }}
    >
      {props.children}
    </SearchMovieContext.Provider>
  );
}

export const useSearchMovie = () => useContext(SearchMovieContext);

export default SearchMovieProvider;
