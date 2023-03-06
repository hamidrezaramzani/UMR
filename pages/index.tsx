import MainLayout from "@/components/MainLayout/MainLayout";
import wordBook from "@/utils/wordBook";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnnouncementItem from "@/components/Announcement/AnnouncementItem";
export default function Home() {
  const sliderSettings: Settings = {
    dots: true,
    autoplay: true,
    speed: 500,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      <Head>
        <title>{wordBook.general.homeTitle}</title>
        <meta name="description" content={wordBook.general.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <MainLayout>
        <HStack
          width="100%"
          height="80vh"
          justifyContent="center"
          alignItems="center"
        >
          <Box width={["100%", null, "50%"]}>
            <img src="/images/announcement.png" alt="" width="100%" />
          </Box>
          <Box width={["100%", null, "50%"]}>
            <Slider {...sliderSettings}>
              <AnnouncementItem />
              <AnnouncementItem />
              <AnnouncementItem />
            </Slider>
            <Box mt="35px" width="100%" mb="10px">
              <form>
                <Input placeholder="پست الکترونیکی" />
                <Alert
                  status="info"
                  colorScheme="cyan"
                  fontSize="14px"
                  my="10px"
                >
                  <AlertIcon />
                  جهت باخبر بودن از آخرین اطلاعیه ها ایمیل خود را وارد کنید
                </Alert>
                <Button colorScheme="yellow" width="100%" fontSize="14px">
                  ثبت پست الکترونیکی
                </Button>
              </form>
            </Box>
          </Box>
        </HStack>
      </MainLayout>
    </>
  );
}
