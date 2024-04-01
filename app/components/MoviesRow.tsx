"use client";
import { Movie } from "@/data/movies";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useList } from "../context/MyListContext";
import MovieCard from "./MovieCard";

interface MoviesRowProps {
  title: string;
  filteredMovies: Movie[];
}

export default function MoviesRow({ title, filteredMovies }: MoviesRowProps) {
  const [showChevrons, setShowChevrons] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const { myList, toggleMyList } = useList();

  const handleClick = (direction: string) => {
    setIsScrolled(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "right"
          ? scrollLeft + clientWidth
          : scrollLeft - clientWidth;

      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      p={2}
      mt={"-4rem"}
      color={"white"}
      pl={8}
      onMouseEnter={() => setShowChevrons(true)}
      onMouseLeave={() => setShowChevrons(false)}
      role='group'
    >
      <Text
        maxW={"10rem"}
        pos={"relative"}
        mb={"-4.5rem"}
        cursor={"pointer"}
        fontWeight={"bold"}
        fontSize={{ base: "1rem", md: "1.4rem" }}
        transition={"all 0.3s easy"}
      >
        {title}
      </Text>
      <Box display={"flex"} flexWrap={"wrap"} pos={"relative"}>
        <Icon
          pos={"absolute"}
          left={"5px"}
          top={"45%"}
          as={ChevronLeftIcon}
          fontSize={"3.5rem"}
          p={"1"}
          bg={"rgba(43, 42, 42, 0.8)"}
          opacity={showChevrons ? "1" : "0"}
          color={"white"}
          borderRadius={"50%"}
          cursor={"pointer"}
          zIndex={"100"}
          _hover={{ transform: "scale(1.1)" }}
          transition={"all 0.3s easy"}
          onClick={() => handleClick("left")}
        />
        <Flex
          ref={rowRef}
          alignItems={"center"}
          gap={"0.3rem"}
          overflowX={"scroll"}
          overflow={"hidden"}
          scrollBehavior={"smooth"}
          h={"22rem"}
          m={"0"}
          pos={"relative"}
        >
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isInMyList={myList?.some((m) => m === movie.id)}
              onToggle={() => toggleMyList(movie.id)}
            />
          ))}
        </Flex>
        <Icon
          as={ChevronRightIcon}
          pos={"absolute"}
          right={"5px"}
          top={"45%"}
          fontSize={"3.5rem"}
          p={"1"}
          bg={"rgba(43, 42, 42, 0.8)"}
          color={"white"}
          borderRadius={"50%"}
          cursor={"pointer"}
          opacity={showChevrons ? "1" : "0"}
          zIndex={"100"}
          transition={"all 0.3s easy"}
          onClick={() => handleClick("right")}
        />
      </Box>
    </Box>
  );
}
