import { Box } from "@chakra-ui/layout";
import {
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";
import { BiSolidChevronDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TiPencil } from "react-icons/ti";

export default function UserMenu() {
  return (
    <Menu>
      <MenuButton>
        <Icon as={BiSolidChevronDown} boxSize={6} />
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
