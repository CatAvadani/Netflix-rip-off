"use client";
import { movies } from "@/data/movies";
import { Box, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useList } from "../context/MyListContext";

export default function MyListPage() {
  const { myList, toggleMyList } = useList();

  return (
    <Box color={"white"} mt={"10rem"}>
      <SimpleGrid
        width="80%"
        m="2rem auto"
        alignContent={"center"}
        mt="5rem"
        columns={{ base: 1, md: 2, lg: 3 }}
        gap={10}
      >
        {myList.map((movieId) => (
          <MovieCard
            key={movieId}
            movie={movies.find((movie) => movieId === movie.id)}
            isInMyList={true}
            onToggle={() => toggleMyList(movieId)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
