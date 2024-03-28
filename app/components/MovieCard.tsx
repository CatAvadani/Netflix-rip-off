"use client";

import { Movie } from "@/data/movies";
import { Link } from "@chakra-ui/next-js";
import { Box, Circle, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { BsHandThumbsUp } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";
import { LuCheck, LuChevronDown, LuPlus } from "react-icons/lu";

interface MovieProps {
  movie: Movie;
  isExpanded?: boolean;
  isInMyList?: boolean;
  onToggle: () => void;
}

export default function MovieCard({
  movie,
  isExpanded = false,
  isInMyList = false,
  onToggle,
}: MovieProps) {
  function showAgeRestriction() {
    switch (movie?.rating) {
      case "PG":
        return "8+";
      case "PG-13":
        return "13+";
      case "R":
        return "16+";
      default:
        return "ALL";
    }
  }

  return (
    <Box
      pos={"relative"}
      minW={"300px"}
      h={isExpanded ? "310px" : "200px"}
      overflow={"hidden"}
      borderRadius={"5px"}
      transition='all 0.3s ease'
      _hover={{
        h: "310px",
        w: ' base: "250px", md: " 320px"',

        p: "0",
      }}
      sx={{
        "&:hover": {
          transform: "scale(1.1)",
          zIndex: "10",
          position: "relative",
          ".cardBottom": {
            display: "block",
            height: "100%",
          },
          ".movieImage": {
            height: "150px",
          },
          ".image": {
            borderRadius: "5px 5px 0 0",
          },
        },
      }}
    >
      <Box pos={"relative"} h={"250px"} className='movieImage'>
        <Image
          className='image'
          src={movie?.thumbnail}
          h={"100%"}
          w={"100%"}
          alt={`image-${movie?.title}`}
          borderRadius={"5px"}
          objectFit='cover'
        />
        <Box
          pos='absolute'
          top='0'
          left='0'
          h='100%'
          w='100%'
          bg='rgba(0, 0, 0, 0.3)'
          borderRadius='5px'
        ></Box>

        <Text
          pos={"absolute"}
          bottom={"20%"}
          left={"5px"}
          color={"white"}
          fontSize={"1.2rem"}
          fontWeight={"bold"}
          p={2}
        >
          {movie?.title}
        </Text>
      </Box>

      <Image
        pos={"absolute"}
        src='/n-letter.svg'
        alt='n-letter'
        width={50}
        zIndex={2}
        top={"5%"}
        left={"5%"}
      />
      <Flex
        flexDir={"column"}
        bg={"#212121"}
        className='cardBottom'
        display={"none"}
        p={2}
      >
        <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
          <Flex gap={1}>
            <Circle
              size={"40px"}
              bg={"white"}
              color={"black"}
              _hover={{ cursor: "pointer" }}
            >
              <IoIosPlay fontSize={"1.5rem"} />
            </Circle>

            <Tooltip
              hasArrow
              label='Add to My List'
              placement='top'
              bg={"white"}
              color={"black"}
              p={2}
            >
              <Circle
                size={"40px"}
                border={" 1px solid white"}
                color={"white"}
                _hover={{ cursor: "pointer" }}
                onClick={onToggle}
              >
                {" "}
                {isInMyList ? (
                  <LuCheck
                    className='h-6 w-6 text-red-700'
                    onClick={onToggle}
                  />
                ) : (
                  <LuPlus className='h-6 w-6' onClick={onToggle} />
                )}
              </Circle>
            </Tooltip>
            <Tooltip
              hasArrow
              label='I Like This'
              placement='top'
              bg={"white"}
              color={"black"}
              p={2}
            >
              <Circle
                size={"40px"}
                border={" 1px solid white"}
                color={"white"}
                _hover={{ cursor: "pointer" }}
              >
                <BsHandThumbsUp fontSize={"1.5rem"} />
              </Circle>
            </Tooltip>
          </Flex>
          <Link href={`/movie/${movie?.id}`}>
            <Tooltip
              hasArrow
              label='More Info'
              placement='top'
              bg={"white"}
              color={"black"}
              p={2}
            >
              <Circle
                size={"40px"}
                border={" 1px solid white"}
                color={"white"}
                _hover={{ cursor: "pointer" }}
              >
                <LuChevronDown fontSize={"1.5rem"} />
              </Circle>
            </Tooltip>
          </Link>
        </Flex>
        <Flex justifyContent={"left"} alignItems={"center"} gap={4}>
          <Text color={"white"} maxW={"3rem"} textAlign={"center"} mt={4}>
            {movie?.year}
          </Text>
          <Text
            border={"1px solid white"}
            color={"white"}
            p={"0 0.4rem"}
            textAlign={"center"}
            mt={4}
          >
            {showAgeRestriction()}
          </Text>
        </Flex>
        <Text mt={4} color={"white"}>
          {movie?.genre}
        </Text>
      </Flex>
    </Box>
  );
}
