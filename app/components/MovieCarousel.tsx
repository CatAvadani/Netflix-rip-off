"use client";

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
// Here we have used react-icons package for the icons
// And react-slick as our Carousel Lib
import { movies } from "@/data/movies";
import { InfoIcon, TriangleDownIcon } from "@chakra-ui/icons";
import Slider from "react-slick";

// Settings for the slider
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
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
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
      {/* Slider */}
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
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="70%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  <hr color="white"></hr>
                  {movie.title}
                  <hr color="white"></hr>
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
                  ></Button>
                </HStack>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
