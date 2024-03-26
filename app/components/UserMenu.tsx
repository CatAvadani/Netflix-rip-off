import { Box } from "@chakra-ui/layout";
import {
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TiPencil } from "react-icons/ti";

export default function UserMenu() {
  return (
    <Menu>
      <MenuButton
        width={"40px"}
        _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
        transition={"all 0.3s ease"}
      >
        <Image borderRadius='5px' src='https://rb.gy/g1pwyx' alt='user-img' />
      </MenuButton>
      <Portal>
        <MenuList bg={"#363434"} color={"white"} border={"none"}>
          <MenuItem bg={"#363434"}>
            <Box mr='1rem'>
              <FaRegUser />
            </Box>{" "}
            Account
          </MenuItem>
          <MenuDivider />
          <MenuItem bg={"#363434"}>
            <Box mr='1rem'>
              <TiPencil />
            </Box>{" "}
            Manage Profiles
          </MenuItem>
          <MenuItem bg={"#363434"}>
            <Box mr='1rem'>
              <IoMdHelpCircleOutline />
            </Box>{" "}
            Help Center
          </MenuItem>
          <MenuDivider />
          <MenuItem bg={"#363434"}>
            <Text ml={"2rem"}>Sign Out</Text>
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
}
