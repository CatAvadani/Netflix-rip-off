"use client";

import {
  Avatar,
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";

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
    <Center py={6}>
      <Box
        pos={"relative"}
        maxW={"345px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={imageSrc} fill alt='Example' />
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
            zIndex={100}
          >
            {title}
          </Text>
        </Box>
        <Stack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
          <Text color={"gray.500"}>{description}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={imageSrc} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{title}</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
