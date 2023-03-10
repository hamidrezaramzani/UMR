import wordBook from "@/utils/wordBook";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "../Header/Header";
interface MainLayoutProps {
  children: ReactNode;
  entity: string;
}

const MainLayout = ({ children, entity }: MainLayoutProps) => {
  return (
    <Container py="30px" maxWidth="container.lg">
      <Head>
        <title>{wordBook.pages[entity].title}</title>
        <meta name="description" content={wordBook.pages[entity].description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <Header />
      {children}
    </Container>
  );
};

export default MainLayout;
