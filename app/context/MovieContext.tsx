import { Movie } from "@/data/movies";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface MovieContextValue {
  movies: Movie[];
}

const MovieContext = createContext({} as MovieContextValue);

function MovieProvider(props: PropsWithChildren) {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <MovieContext.Provider
      value={{
        movies,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}

export const useMovie = () => useContext(MovieContext);
export default MovieProvider;
