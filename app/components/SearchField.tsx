import { Flex, FormControl, Icon, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

export default function SearchField() {
  const [show, setShow] = useState(false);
  const [searchedGenre, setSearchedGenre] = useState("");
  const router = useRouter();

  const handleClick = () => {
    setShow(!show);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/searchedMovies");
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedGenre(e.target.value);
  };
  return (
    <Flex>
      <FormControl
        as='form'
        display={"flex"}
        onSubmit={handleOnSubmit}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Input
          onChange={handleOnChange}
          value={searchedGenre}
          display={show ? "block" : "none"}
          placeholder='Search movies'
          bg='black'
          color='white'
          width={"300px"}
          _placeholder={{ color: "rgba(255,255,255,0.6)" }}
          _focus={{
            outline: "none",
          }}
          borderRadius='5px'
        />
        <Icon
          display={{ base: "none", md: "inline-block" }}
          _hover={{
            transform: "scale(1.2)",
            cursor: "pointer",
          }}
          transition={"all 0.3s ease"}
          fontSize={"2xl"}
          onClick={handleClick}
        >
          <CgSearch />
        </Icon>
      </FormControl>
    </Flex>
  );
}
