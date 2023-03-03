import { HStack, Text, Flex, Box, Stack } from "@chakra-ui/react";
import Link from "next/link";
interface NavbarProps {
  links: { title: string; path: string }[];
}
const Navbar = ({ links }: NavbarProps) => {
  return (
    <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
      <>
        {links.map((link) => (
          <Link key={link.path} href={link.path}>
            <Text>{link.title}</Text>
          </Link>
        ))}
      </>
    </HStack>
  );
};

Navbar.MoreItems = () => {
  return (
    <Flex alignItems={"center"}>
      <Link href="/">
        <Text>ورود</Text>
      </Link>
    </Flex>
  );
};

interface ResponsiveNavProps extends NavbarProps {
  isOpen: boolean;
}
Navbar.ResponsiveNav = ({ isOpen, links }: ResponsiveNavProps) => {
  return isOpen ? (
    <Box pb={4} display={{ md: "none" }}>
      <Stack as={"nav"} spacing={4}>
        {links.map((link) => (
          <Link href={link.path}>
            <Text>{link.title}</Text>
          </Link>
        ))}
      </Stack>
    </Box>
  ) : null;
};

export default Navbar;
