"use client";

import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box bg={"black"} color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Stack direction={"row"} spacing={6}>
              <FaFacebookF size={25} color={"white"} />
              <FaInstagram size={25} color={"white"} />
              <FaTwitter size={25} color={"white"} />
              <FaYoutube size={25} color={"white"} />
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Audio Description
            </Box>
            <Box as="a" href={"#"}>
              Investor Relations
            </Box>
            <Box as="a" href={"#"}>
              Legal Notices
            </Box>
            <Box as="a" href={"#"}>
              Advert choices
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Jobs
            </Box>
            <Box as="a" href={"#"}>
              Cookie Preferences
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Gift Cards
            </Box>
            <Box as="a" href={"#"}>
              Terms of Use
            </Box>
            <Box as="a" href={"#"}>
              Corporate Information
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <Box as="a" href={"#"}>
              Media Center
            </Box>
            <Box as="a" href={"#"}>
              Privacy
            </Box>
            <Box as="a" href={"#"}>
              Contact us
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>© 2024 Netflix rip off project</Text>
        </Container>
      </Box>
    </Box>
  );
}
