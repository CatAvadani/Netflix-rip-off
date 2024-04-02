"use client";

import { BellIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchField from "./SearchField";
import UserMenu from "./UserMenu";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <Box>
      <Flex
        bg={
          isScrolled
            ? "#141414"
            : "linear-gradient(to bottom, black, rgba(0, 0, 0, 0.7) 48%, rgba(0, 0, 0, 0))"
        }
        position={{ base: "relative", md: "fixed" }}
        top={0}
        left={0}
        width={"100%"}
        zIndex={100}
        color={"white"}
        minH={"70px"}
        py={{ base: 2 }}
        px={{ base: 4, md: 10 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            color="red"
            _hover={{ bg: "transparent" }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems={"center"}
        >
          <Link href="/">
            <Image src="/logo1.svg" alt="logo" width="180px" />
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          alignItems={"center"}
          direction={"row"}
          spacing={5}
        >
          <SearchField />
          <Text
            display={{ base: "none", md: "inline-block" }}
            _hover={{ color: "#b7b3b3", cursor: "pointer" }}
            transition={"all 0.3s ease"}
          >
            Children
          </Text>
          <Icon
            display={{ base: "none", md: "inline-block" }}
            _hover={{
              color: "#b7b3b3",
              cursor: "pointer",
            }}
            transition={"all 0.3s ease"}
            fontSize={"2xl"}
          >
            <BellIcon />
          </Icon>
          <UserMenu />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Text
            color={"white"}
            fontWeight={400}
            _hover={{ color: "#b7b3b3", cursor: "pointer" }}
            transition={"all 0.3s ease"}
          >
            {navItem.label}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"black"} p={4} display={{ md: "none" }} ml={2}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle} bg={"black"} mt={4}>
      <Box
        bg={"black"}
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={400}
          color={"white"}
          transition={"all 0.3s ease"}
          _hover={{ color: "#E50913", cursor: "pointer", ml: "5px" }}
        >
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Films",
    href: "#",
  },
  {
    label: "New & Popular",
    href: "#",
  },
  {
    label: "My List",
    href: "myList",
  },
  {
    label: "Watch Again",
    href: "#",
  },
];
