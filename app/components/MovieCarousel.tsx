"use client";

import { movies } from "@/data/movies";
import { InfoIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export function MovieCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  function spliteTitle(title: string) {
    const words = title.split(" ");
    const midIndex = Math.ceil(words.length / 2);

    let firstHalf = " ";
    let secondHalf = " ";

    for (let i = 0; i < words.length; i++) {
      if (i < midIndex) {
        firstHalf += words[i] + " ";
      } else {
        secondHalf += words[i] + " ";
      }
    }
    return (
      <>
        <span style={{ color: "white" }}>{firstHalf}</span>
        <span style={{ color: "yellow" }}>{secondHalf}</span>
      </>
    );
  }

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {movies.map((movie, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={movie.thumbnail}
          >
            <Container
              size="container.lg"
              height="600px"
              position="relative"
              left={{ base: "0", md: "-20%" }}
            >
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="70%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  <hr color="white" style={{ width: "100%", height: 4 }}></hr>
                  {spliteTitle(movie.title)}
                  <hr color="white" style={{ width: "100%", height: 4 }}></hr>
                </Heading>
                <HStack spacing={4}>
                  <Button
                    bg="white"
                    color="black"
                    borderRadius={4}
                    leftIcon={<TriangleDownIcon />}
                  >
                    PLAY
                  </Button>
                  <Button
                    bg="rgba(255, 255, 255, 0.5)"
                    color="white"
                    borderRadius={4}
                    leftIcon={<InfoIcon />}
                  >
                    More Info
                  </Button>
                </HStack>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
