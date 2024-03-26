"use client";
import { MovieCarousel } from "./components/MovieCarousel";
import MoviesRow from "./components/MoviesRow";

export default function Home() {
  return (
    <div>
      <MovieCarousel />
      <Box color="red" pt="5rem">
        {/* Netflix */}
        <MoviesRow title="Trending Now" />
      </Box>
    </div>
  );
}
