import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "../Header/Header";
interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container py="30px" maxWidth="container.lg">
      <Header />
      {children}
    </Container>
  );
};

export default MainLayout;
