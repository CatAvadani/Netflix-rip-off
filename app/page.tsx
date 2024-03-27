"use client";
import { MovieCarousel } from "./components/MovieCarousel";
import MoviesRow from "./components/MoviesRow";
import { Box } from "@chakra-ui/react";

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
