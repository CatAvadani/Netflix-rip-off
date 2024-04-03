"use client";

import showAgeRestriction from "@/app/components/ShowAgeRestriction";
import { useList } from "@/app/context/MyListContext";
import { movies } from "@/data/movies";
import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsHandThumbsUp } from "react-icons/bs";
import { IoIosPlay } from "react-icons/io";
import { LuCheck, LuPlus } from "react-icons/lu";

type PageProps = { params: { id: string } };

export default function MovieDetail({ params }: PageProps) {
  const { myList, toggleMyList } = useList();
  const isInMyList = myList.includes(params.id);
  const handleToggle = () => toggleMyList(params.id);

  const movie = movies.find((m) => m.id === params.id);
  return (
    <Container maxW={"7xl"} color={"white"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"movie image"}
            src={movie?.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "100%", lg: "100%" }}
            boxSize={"500px"}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {movie?.title}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {movie?.synopsis}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Movie Details
              </Text>

              <List spacing={3}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Year:
                  </Text>{" "}
                  {movie?.year}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Rating:
                  </Text>{" "}
                  {movie && showAgeRestriction(movie)}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Actors:
                  </Text>{" "}
                  {movie?.actors}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Genre:
                  </Text>{" "}
                  {movie?.genre}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Flex mt={5} alignItems={"center"} justifyContent={"space-between"}>
            <Flex gap={3}>
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
                label={isInMyList ? "Remove from My List" : "Add to My List"}
                placement="top"
                bg={"white"}
                color={"black"}
                p={2}
              >
                <Circle
                  size={"40px"}
                  border={" 1px solid white"}
                  color={"white"}
                  _hover={{ cursor: "pointer" }}
                  onClick={handleToggle}
                >
                  {" "}
                  {isInMyList ? (
                    <LuCheck
                      className="h-6 w-6 text-red-700"
                      onClick={handleToggle}
                    />
                  ) : (
                    <LuPlus className="h-6 w-6" onClick={handleToggle} />
                  )}
                </Circle>
              </Tooltip>
              <Tooltip
                hasArrow
                label="I Like This"
                placement="top"
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
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
