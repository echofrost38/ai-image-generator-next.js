import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { HiArrowRight, HiBadgeCheck } from "react-icons/hi";
import { formatStudioPrice } from "@/core/utils/prices";

export const CheckedListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ListItem>
    <ListIcon fontSize="xl" as={HiBadgeCheck} /> {children}
  </ListItem>
);

const Pricing = () => {
  return (
    <SimpleGrid width="100%" spacing={6} columns={{ base: 1, md: 2 }} textColor="textHomePage">
      <Flex
        backgroundColor="white"
        border="4px solid black"
        borderRadius={10}
        padding={8}
        transition="all 250ms"
        flexDirection="column"
        justifyContent={"space-between"}
      >
        <Box>
        <Text mt={2} fontWeight="black" fontSize={{base: "2xl", md:"3xl"}}>
        Wanna try it for free?
        </Text>
        <Text mt={2} mb={4}>
        You can try our demo studio for free. 
        </Text>
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
            paddingRight={6}
            paddingLeft={3}
            width={{ base: "100%", md: "55%" }}
            iconSpacing={2}
            marginBottom={{ base: 0, md: 6 }}
            rightIcon={<HiArrowRight />}
            outline={"none"}
            >

            Try for free now
          </Button>
      </Flex>
      <Box
        backgroundColor="white"
        border="4px solid black"
        borderRadius={10}
        padding={8}
        transition="all 250ms"
      >
        <Tag
          border="1px solid black"
          borderRadius={1}
          paddingX={2}
          paddingY={0}
          marginY={0}
          size={"sm"}
          color="white"
          backgroundColor="buttonMain"
        >
          {/* 1 Studio + {process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT} shots */}
          Demo Studio
        </Tag>

        <Box mt={2} fontWeight="black" fontSize="3.5rem">
          {formatStudioPrice()}
          {/* <Box
            ml={1}
            as="span"
            fontWeight="500"
            color="coolGray.400"
            fontSize="1.2rem"
          >
            / studio
          </Box> */}
        </Box>

        <List mt={2} mb={4} spacing={1}>
          <CheckedListItem>
            {/* <b>1</b> Studio with a <b>custom trained model</b> */}
            1 demo Studio 
          </CheckedListItem>
          <CheckedListItem>
            <b>{process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT}</b> avatars 4K
            generation
          </CheckedListItem>
          <CheckedListItem>
            <b>30</b> AI prompt assists
          </CheckedListItem>
          <CheckedListItem>Craft your own prompt</CheckedListItem>
          {/* <CheckedListItem>Sponsorship development 🖤</CheckedListItem> */}
        </List>
      </Box>
    </SimpleGrid>
  );
};

export default Pricing;
