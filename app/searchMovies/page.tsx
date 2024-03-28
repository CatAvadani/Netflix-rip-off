"use client";
import { movies } from "@/data/movies";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useSearchMovie } from "../context/SearchMovieContext";

export default function SearchMovies() {
  const { searchMovies } = useSearchMovie();

  const searchedMovies = movies.filter((movie) =>
    movie.genre.toLowerCase().includes(searchMovies)
  );

  return (
    <Box color={"white"} mt={"10rem"}>
      <SimpleGrid
        width='80%'
        m='2rem auto'
        alignContent={"center"}
        mt='5rem'
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={10}
      >
        {searchedMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            imageSrc={movie.thumbnail}
            genre={movie.genre}
            description=''
            isExpanded={true}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
