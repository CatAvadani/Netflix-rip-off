"use client";
import { movies } from "@/data/movies";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Icon, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

interface MoviesRowProps {
  title: string;
}

export default function MoviesRow({ title }: MoviesRowProps) {
  return (
    <Box color={"#f1e6e6"} h={"20rem"} bg={"green"} p={5}>
      <Text
        cursor={"pointer"}
        fontWeight={"bold"}
        transition={"all 0.3s easy"}
        _hover={{ color: "white" }}
      >
        {title}
      </Text>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        _groupActive={{}}
        pos={"relative"}
        ml={"-1"}
      >
        <Icon
          as={ChevronLeftIcon}
          fontSize={"3rem"}
          p={"1"}
          bg={"rgba(255,255, 255, 0.3)"}
          borderRadius={"50%"}
          cursor={"pointer"}
          opacity={"0"}
          _hover={{ transform: "scale(1.1)" }}
          _groupHover={{ opacity: "100" }}
          transition={"all 0.3s easy"}
        />

        {movies.map((movie) => (
          <MovieCard
            key={movie.title}
            imageSrc={movie.thumbnail}
            title={movie.title}
            description={movie.synopsis}
          />
        ))}

        <Icon
          as={ChevronRightIcon}
          fontSize={"3rem"}
          p={"1"}
          bg={"rgba(255,255, 255, 0.3)"}
          borderRadius={"50%"}
          cursor={"pointer"}
          opacity={"0"}
          transition={"all 0.3s easy"}
        />
      </Box>
    </Box>
  );
}
