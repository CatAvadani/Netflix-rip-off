"use client";

import { Box, Image } from "@chakra-ui/react";

interface MovieProps {
  title: string;
  imageSrc: string;
  description: string;
}

export default function MovieCard({
  title,
  imageSrc,
  description,
}: MovieProps) {
  return (
    <Box
      pos={"relative"}
      minW={"300px"}
      h={220}
      overflow={"hidden"}
      borderRadius={"5px"}
    >
      <Image
        src={imageSrc}
        alt={`image-${title}`}
        borderRadius={"5px"}
        objectFit='cover'
      />
      <Image
        pos={"absolute"}
        src='/n-letter.svg'
        alt='n-letter'
        width={50}
        zIndex={50}
        top={"5%"}
        left={"5%"}
      />
    </Box>
  );
}
