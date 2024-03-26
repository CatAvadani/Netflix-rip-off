import { Flex, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

export default function SearchField() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
      <Input
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
    </Flex>
  );
}
