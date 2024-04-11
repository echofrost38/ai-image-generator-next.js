import { Box, Button, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Demo from "./Demo";

const Hero = () => {
  return (
    <Box px={{ base: 2, md: 6 }}>
      <SimpleGrid
        as="main"
        minHeight="30rem"
        flex="1"
        flexDirection="column"
        marginX="auto"
        maxWidth="container.lg"
        columns={{ base: 1, lg: 2 }}
        px={{ base: 4, lg: 0 }}
        py={{ base: 10, lg: 0 }}
        gap={{ base: 10, lg: 0 }}
      >
        <VStack
          className="color"
          alignItems={{ base: "center", sm: "flex-start" }}
          spacing={10}
          justifyContent="center"
          flexDirection="column"
        >
          <Box textAlign={{ base: "center", sm: "left" }}>
            <Box
              mb={3}
              as="h1"
              maxWidth="43rem"
              lineHeight={{ base: "2.6rem", sm: "4rem" }}
              fontSize={{ base: "2.6rem", sm: "4rem" }}
              fontWeight="black"
              textColor="textHomePage"
            >
              Imagination is the limit
            </Box>
            <Box
              as="h2"
              maxWidth="30rem"
              fontSize={{ base: "xl", sm: "3xl" }}
              lineHeight={{ base: "xl", sm: "3xl" }}
              textColor="textHomePage"
            >
              <b>Generate avatars</b> that perfectly capture{" "}
              <b>your unique style</b>
            </Box>
          </Box>
          <Button
            borderRadius={0}
            as={Link}
            href="/dashboard"
            variant="brand"
            size="lg"
            colorScheme="buttonMain"
            bgColor="buttonMain"
            textColor={"white"}
            iconSpacing={2}
            rightIcon={<HiArrowRight />}
          >
            Create avatars now
          </Button>
        </VStack>
        <Flex alignItems="center">
          <Demo />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Hero;
