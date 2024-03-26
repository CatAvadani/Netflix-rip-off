"use client";
import { movies } from "@/data/movies";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";

interface MoviesRowProps {
  title: string;
}

export default function MoviesRow({ title }: MoviesRowProps) {
  return (
    <Box p={2} mt={3} color={"#b7b3b3"}>
      <Text
        cursor={"pointer"}
        fontWeight={"bold"}
        fontSize={{ base: "1.2rem", md: "1.5rem" }}
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
          pos={"absolute"}
          left={"5%"}
          top={"50%"}
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
        <Flex
          alignItems={"center"}
          gap={"0.3rem"}
          overflowX={"scroll"}
          scrollBehavior={"smooth"}
          h={"25rem"}
          m={"0"}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              imageSrc={movie.thumbnail}
              title={movie.title}
              description={movie.synopsis}
              genre={movie.genre}
            />
          ))}
        </Flex>
        <Icon
          as={ChevronRightIcon}
          pos={"absolute"}
          right={"5%"}
          top={"50%"}
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
