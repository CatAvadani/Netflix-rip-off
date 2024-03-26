"use client";

import { Box, Circle, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import { BsHandThumbsUp } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";
import { LuChevronDown, LuPlus } from "react-icons/lu";

interface MovieProps {
  title: string;
  imageSrc: string;
  description: string;
  genre: string;
}

export default function MovieCard({ title, imageSrc, genre }: MovieProps) {
  return (
    <Box
      pos={"relative"}
      minW={"300px"}
      h={220}
      overflow={"hidden"}
      borderRadius={"5px"}
      transition='all 0.3s ease'
      _hover={{
        h: "350",
        p: "0",
        transform: "scale(1.1)",
        zIndex: "10",
      }}
      sx={{
        "&:hover": {
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
          src={imageSrc}
          h={"100%"}
          w={"100%"}
          alt={`image-${title}`}
          borderRadius={"5px"}
          objectFit='cover'
        />

        <Text
          pos={"absolute"}
          bottom={"20%"}
          left={"5px"}
          color={"white"}
          bg={"rgba(0,0,0,0.4)"}
          fontSize={"1.2rem"}
          fontWeight={"bold"}
          p={2}
        >
          {title}
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
        bg={"#141414"}
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
              >
                <LuPlus fontSize={"1.5rem"} />
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
        </Flex>
        <Text
          border={"1px solid white"}
          color={"white"}
          maxW={"3rem"}
          textAlign={"center"}
          mt={7}
        >
          16+
        </Text>
        <Text mt={7} color={"white"}>
          {genre}
        </Text>
      </Flex>
    </Box>
  );
}
