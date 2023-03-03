import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  const LINKS = [
    {
      title: "اطلاعیه ها",
      path: "/",
    },
    {
      title: "درباره ما",
      path: "/",
    },
    {
      title: "تماس با ما",
      path: "/",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box rounded="lg" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Logo />
          <Navbar links={LINKS} />
        </HStack>
        <Navbar.MoreItems />
      </Flex>
      <Navbar.ResponsiveNav links={LINKS} isOpen={isOpen} />
    </Box>
  );
};

export default Header;
