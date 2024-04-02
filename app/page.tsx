import { movies } from "@/data/movies";
import { recommendedMovies } from "@/data/recommendedMovies";
import { Box } from "@chakra-ui/react";
import { MovieCarousel } from "./components/MovieCarousel";
import MoviesRow from "./components/MoviesRow";

export default function Home() {
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const adventureMovies = movies.filter((movie) =>
    movie.genre.includes("Adventure")
  );
  const thrillerMovies = movies.filter((movie) =>
    movie.genre.includes("Thriller")
  );
  const recommendedByUs = recommendedMovies.filter(
    (movie) =>
      !movie.genre.includes("Thriller") &&
      !movie.genre.includes("Adventure") &&
      !movie.isTrending
  );

  return (
    <div>
      <MovieCarousel />
      <Box mt="-1rem" pb="5rem">
        <MoviesRow title="Trending Now" filteredMovies={trendingMovies} />
        <MoviesRow title="Recommended" filteredMovies={recommendedByUs} />
        <MoviesRow title="Adventure" filteredMovies={adventureMovies} />
        <MoviesRow title="Thriller" filteredMovies={thrillerMovies} />
      </Box>
    </div>
  );
}
