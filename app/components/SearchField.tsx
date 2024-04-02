"use client";
import { Flex, FormControl, IconButton, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { useSearchMovie } from "../context/SearchMovieContext";

export default function SearchField() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const { setSearchMovies } = useSearchMovie();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearchMovies(searchQuery);
    router.push("/searchMovies");
    setSearchQuery("");
  };

  const handleClick = () => {
    setShow(!show);
    if (!searchQuery) setSearchQuery("");
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
      <FormControl
        as="form"
        onSubmit={handleSubmit}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <Input
          pos={{ base: "absolute", md: "relative" }}
          top={{ base: "100%" }}
          right={{ base: "1%", md: "0" }}
          width={{ base: "250px", md: "300px" }}
          mt={{ base: "2rem", md: "0" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          display={show ? "block" : "none"}
          placeholder="Action, Drama, Thriller..."
          bg="rgba(0,0,0,0.5)"
          color="white"
          _placeholder={{ color: "rgba(255,255,255,0.6)" }}
          _focus={{
            bg: "rgba(0,0,0,0.5)",
            outline: "none",
          }}
          borderRadius="5px"
        />
        <IconButton
          type="submit"
          aria-label="search-button"
          color={"white"}
          _hover={{
            bg: "transparent",
            color: "#b7b3b3",
            transform: "scale(1.2)",
            cursor: "pointer",
            border: "none",
          }}
          transition={"all 0.3s ease"}
          fontSize={"2xl"}
          bg={"transparent"}
          onClick={handleClick}
        >
          <CgSearch />
        </IconButton>
      </FormControl>
    </Flex>
  );
}
