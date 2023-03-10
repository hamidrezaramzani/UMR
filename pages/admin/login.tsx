import MainLayout from "@/components/MainLayout/MainLayout";
import wordBook from "@/utils/wordBook";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const AdminLogin = () => {
  return (
    <MainLayout entity="adminAuth">
      <Flex width="100%" justifyContent="center">
        <Box width="50%" py="50px">
          <form>
            <FormControl>
              <FormLabel>{wordBook.fields.admin.auth.username}</FormLabel>
              <Input type="text" />
            </FormControl>
            <br />
            <FormControl>
              <FormLabel>{wordBook.fields.admin.auth.password}</FormLabel>
              <Input type="password" />
            </FormControl>
            <br />

            <Button colorScheme="yellow" width="100%" size="sm">
              ورود به پنل مدیریت
            </Button>
          </form>
        </Box>
      </Flex>
    </MainLayout>
  );
};

export default AdminLogin;
