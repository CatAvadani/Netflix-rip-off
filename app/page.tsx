import { movies } from "@/data/movies";
import { recommendedMovies } from "@/data/recommendedMovies";
import { Box } from "@chakra-ui/react";
import MoviesRow from "./components/MoviesRow";

export default function Home() {
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const adventureMovies = movies.filter((movie) =>
    movie.genre.includes("Adventure")
  );
  const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));

  return (
    // add the padding top to the Box component
    <Box color="red" pt="5rem" pb="5rem">
      <MoviesRow title="Trending Now" filteredMovies={trendingMovies} />
      <MoviesRow title="Recommended" filteredMovies={recommendedMovies} />
      <MoviesRow title="Adventure" filteredMovies={adventureMovies} />
      <MoviesRow title="Drama" filteredMovies={dramaMovies} />
    </Box>
  );
}
