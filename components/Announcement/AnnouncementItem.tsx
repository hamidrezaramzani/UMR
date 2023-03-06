import { Badge, Box, Heading, Image, Text } from "@chakra-ui/react";

function AnnouncementItem() {
  return (
    <Box width="100%" height="350px" px="5px">
      <Box width="100%">
        <Image
          src="https://picsum.photos/600/300"
          alt="it's fake image"
          width="100%"
          rounded="md"
          mb="5px"
        />
      </Box>
      <Heading size="20px" textAlign="left" mb="5px">
        <Badge colorScheme="green" dir="rtl" mb="5px">
          12 دی ماه 1401
        </Badge>{" "}
        <br />
        عنوان اطلاعیه اول
      </Heading>
      <Text textAlign="left" fontSize="13px">
        این متن اطلاعیه اول است که من دارم مینویسم برای اینکه یه متنی رو در این
        سایت داشته باشم برای همین باید مقدار متن باید زیاد باشه
      </Text>
    </Box>
  );
}

export default AnnouncementItem;
