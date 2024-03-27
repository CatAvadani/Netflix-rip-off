import { movies } from "@/data/movies";
import { Box } from "@chakra-ui/react";
import MoviesRow from "./components/MoviesRow";

export default function Home() {
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  return (
    // add the padding top to the Box component
    <Box color='red' pt='5rem' pb='5rem'>
      <MoviesRow title='Trending Now' filteredMovies={trendingMovies} />
    </Box>
  );
}
