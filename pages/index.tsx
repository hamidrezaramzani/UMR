import MainLayout from "@/components/MainLayout/MainLayout";
import wordBook from "@/utils/wordBook";
import { Heading, Text } from "@chakra-ui/react";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{wordBook.general.homeTitle}</title>
        <meta name="description" content={wordBook.general.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        
      </MainLayout>
    </>
  );
}
