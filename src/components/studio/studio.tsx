"use client";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Link,
  List,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { CheckedListItem } from "../home/Pricing";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

export interface StudioProps {
  user: string;
  dates: Date;
  images: string[];
}

const StudioComp = ({ user, dates, images }: StudioProps) => {

  const [isModalOpen, setIsModalOpen] = useState(true);
  interface DateResult {
    day: string;
    time: string; // in AM or PM
    isBeforeWeek: boolean;
  }
  const changeDate = (date: Date): DateResult => {
    // if the day is less than 7 days from today, return the day in name
    const today = new Date();
    const time = date.toTimeString().split(" ")[0];

    if (date.getDate() - today.getDate() < 7) {
      // add AM or PM to the time
      const formattedTime =
        parseInt(time.split(":")[0]) > 12
          ? `${parseInt(time.split(":")[0]) - 12}:${time.split(":")[1]} PM`
          : `${time} AM`;

      return {
        day: date.toDateString().split(" ")[0],
        time: formattedTime,
        isBeforeWeek: true,
      };
    }

    // add AM or PM to the time
    const formattedTime =
      parseInt(time.split(":")[0]) > 12
        ? `${parseInt(time.split(":")[0]) - 12}:${time.split(":")[1]} PM`
        : `${time} AM`;

    return {
      day: date.toDateString().split(" ")[0],
      time: formattedTime,
      isBeforeWeek: false,
    };
  };

  const finalDate = changeDate(dates);
  return (
    <Box textAlign="center" width="100%" >
      {false ? (
        <Box>
          <Spinner speed="1s" size="xl" />
          <Box mt={2} size="sm">
            Validating payment
          </Box>
        </Box>
      ) : (
        <Box textAlign="center" width="100%" position={"relative"}>
          {
            isModalOpen && (
              <Box
        position={"absolute"}
        left={0}
        right={0}
        top={10}
        bottom={0}
        bgColor={"white"}
        width={{ base: "100%", md: "75%" }}
        height={"80%"}
        marginLeft={"auto"}
        margin={"auto"}
        zIndex={10}
        gap={10}
      >
         <Button variant={"ghost"} position={"absolute"} top={0} right={0} width={4} onClick={() => {setIsModalOpen(false)}}>
              <CloseIcon width={3}/>
            </Button>
        <Flex
          alignItems={"center"}
          width={"100%"}
          direction={"column"}
          padding={5}
          margin={"auto"}
          gap={10}
        >
          <Box
            fontSize={23}
            fontWeight={"bold"}
            marginBottom={1}
            textAlign={"center"}
          >
            Your studio is ready to be trained! 🥳
          </Box>
          <Box>
            <HStack spacing={0}>
            <AvatarGroup size="md" max={10}>
            {images.map((url) => (
              <Avatar key={url} src={url} />
            ))}
          </AvatarGroup>
            </HStack>
          </Box>
          <Flex
                paddingY={10}
                alignItems={"center"}
                margin={"auto"}
                marginTop={0}
                justify={"center"}
                textColor={"white"}
                gap={3}
              >
                <Button
                  href="/dashboard"
                  as={Link}
                  variant="brand"
                  size="sm"
                  paddingY={3}
                  paddingX={6}
                  textColor="white"
                  fontFamily="poppins-medium"
                  bgColor="buttonMain"
                  fontSize={18}
                >
                  Unlock Now
                </Button>
                <Button bgColor={"#dddddd"} paddingX={6} paddingY={2}>
                  Try For Free
                </Button>
              </Flex>
        </Flex>

      </Box>
            )
          }
      
      <VStack spacing={4}>
        <Box fontWeight="black" fontSize="3.5rem">
          hhh
          <Box
            ml={1}
            as="span"
            fontWeight="500"
            color="coolGray.400"
            fontSize="1.2rem"
          >
            / studio
          </Box>
        </Box>
        <Box fontWeight="bold" fontSize="xl">
          Your Studio is ready to be trained!
        </Box>
        <List textAlign="left" spacing={1}>
          <CheckedListItem>
            <b>1</b> Studio with a <b>custom trained model</b>
          </CheckedListItem>
          <CheckedListItem>
            <b>{process.env.NEXT_PUBLIC_STUDIO_SHOT_AMOUNT}</b> avatars 4K
            generation
          </CheckedListItem>
          <CheckedListItem>
            <b>30</b> AI prompt assists
          </CheckedListItem>
          <CheckedListItem>
            Your Studio will be deleted 24 hours after your credits are
            exhausted
          </CheckedListItem>
        </List>
       <Flex gap={4}>
       <Button
          as={Link}
          variant="brand"
          href={`/api/checkout/session?ppi=1234`}
          bgColor={"buttonMain"}
        >
          Unlock Now - {}
        </Button>
        <Button bgColor={"#dddddd"} paddingX={6} paddingY={2}>
          Try For Free
        </Button>
       </Flex>
        <Box pt={4}>
          <AvatarGroup size="md" max={10}>
            {images.map((url) => (
              <Avatar key={url} src={url} />
            ))}
          </AvatarGroup>
        </Box>
      </VStack>
    </Box>
  )};
    </Box>
  );
  
};

export default StudioComp;

{
  /* <Flex width={"100%"} position={"relative"}>
      <Box
        position={"absolute"}
        left={0}
        right={0}
        top={10}
        bottom={0}
        bgColor={"white"}
        width={{ base: "100%", md: "75%" }}
        height={"80%"}
        marginLeft={"auto"}
        margin={"auto"}
        zIndex={10}
        gap={10}
      >
        <Flex
          alignItems={"center"}
          width={"100%"}
          direction={"column"}
          padding={5}
          margin={"auto"}
          gap={10}
        >
          <Box
            fontSize={23}
            fontWeight={"bold"}
            marginBottom={1}
            textAlign={"center"}
          >
            Your studio is ready to be trained! 🥳
          </Box>
          <Box>
            <HStack spacing={0}>
              {images.map((image, index) => (
                <Box
                  key={index}
                  width={{ base: 14, md: 16 }}
                  height={{ base: 14, md: 16 }}
                  borderRadius={"100%"}
                  bgColor={index % 2 ? "black" : "red"}
                  border={"white"}
                  borderColor={"#abc"}
                  marginX={-1}
                  zIndex={index}
                >
                  <img
                    src={image}
                    alt="studio"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
                    }}
                  />
                </Box>
              ))}
            </HStack>
          </Box>
          <Flex
                paddingY={10}
                alignItems={"center"}
                margin={"auto"}
                marginTop={0}
                justify={"center"}
                textColor={"white"}
                gap={3}
              >
                <Button
                  bgColor={"buttonMain"}
                  paddingX={6}
                  paddingY={2}
                  textColor={"white"}
                  variant={"brand"}
                >
                  Unlock Now
                </Button>
                <Button bgColor={"#dddddd"} paddingX={6} paddingY={2}>
                  Try For Free
                </Button>
              </Flex>
        </Flex>

      </Box>
      <Card textColor={"black"} width={"100%"}>
        <CardBody>
          <Flex fontWeight="bold" fontSize={30}>
            Studio {user}
          </Flex>
          <Flex
            marginBottom={5}
            textColor={"#555"}
            fontSize={12}
            fontWeight={"bold"}
          >
            {finalDate.isBeforeWeek ? "Last" : ""} {finalDate.day}{" "}
            {finalDate.time}
          </Flex>
          <Flex width={"100%"} justify={"center"} align={"middle"}>
            <Flex direction={"column"} align={"center"}>
              <Flex direction={"column"} align={"center"}>
                <Flex marginY={5}>
                  <Box fontSize={44} fontWeight={"bold"}>
                    $12
                  </Box>
                  <Flex
                    marginTop={4}
                    justify={"center"}
                    textAlign={"center"}
                    flexDirection={"column-reverse"}
                  >
                    /Studio
                  </Flex>
                </Flex>
                <Box fontSize={18} fontWeight={"bold"} marginBottom={1}>
                  Your studio is ready to be trained!
                </Box>
                <List mt={2} textAlign="left">
                  <CheckedListItem>
                    <b>1</b> Studio with a <b>custom trained model</b>{" "}
                  </CheckedListItem>
                  <CheckedListItem>
                    <b>100</b> Avatars 4k generation{" "}
                  </CheckedListItem>
                  <CheckedListItem>
                    <b>30</b> AI prompt assists
                  </CheckedListItem>
                  <CheckedListItem>
                    Your studio will be deleted 24 hours after your credits are
                    exhausted
                  </CheckedListItem>
                </List>
              </Flex>

            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex> */
}
