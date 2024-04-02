"use client";

import { movies } from "@/data/movies";
import {
  Box,
  Button,
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
import { LuPlus } from "react-icons/lu";
import { MdLocalShipping } from "react-icons/md";

type PageProps = { params: { id: string } };

export default function MovieDetail({ params }: PageProps) {
  const movie = movies.find((m) => m.id === params.id);
  // return (
  //     <Text mt={"10rem"} color={"white"}>{movie?.title}</Text>

  // )
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
            alt={"product image"}
            src={movie?.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
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
            {/* <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              $350.00 USD
            </Text> */}
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
            {/* <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> */}
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
                  {movie?.year}
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
                label="Add to My List"
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
                  <LuPlus fontSize={"1.5rem"} />
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

          {/* <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack> */}
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
