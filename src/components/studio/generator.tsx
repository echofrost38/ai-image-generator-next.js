"use client"
import {
    Box,
    Button,
    Flex,
    Card,
    CardBody,
    Wrap,
    VStack,
  } from "@chakra-ui/react";
  import {CiStar, CiHeart} from "react-icons/ci";
  import {Icon } from "@chakra-ui/react";
  import {CalendarIcon} from "@chakra-ui/icons"
  import Image from "next/image";

const GeneratorCard = () => {
    return (
      <>
      <Flex
        width={"76%"}
        justify={"center"}
        alignItems={"center"}
        marginX="auto"
        direction={"column"}
      >
        <Box>
          <Button>The Profile</Button>
        </Box>
        <Card width="100%" paddingX={{md:6}} paddingY={2}>
          <CardBody>
            <Wrap  justifyContent={"space-between"} spacingX={{base: "0", md:"15%"}}>
              <VStack spacing={0} width={{base: "100%", md:"60%"}}>
                <Box  paddingBottom={6} marginBottom={6} borderBottom={"2px"} borderColor={"#DBE5ED"} width={"100%"}>
                    <Flex fontSize={14} fontWeight={"bold"} textAlign={"center"} gap={3} alignItems={"center"}>
                        <Icon as={CiStar}  />
                        Studio Name
                    </Flex>
                    <Box marginTop={2} fontSize={13}>
                        Michael Jackson
                    </Box>
                </Box>
                <Box  paddingBottom={6} marginBottom={6} borderBottom={"2px"} borderColor={"#DBE5ED"} width={"100%"}>
                    <Flex fontSize={14} fontWeight={"bold"} textAlign={"center"} gap={3} alignItems={"center"}>
                        <CalendarIcon />
                        Avatar Prompts
                    </Flex>
                    <Box marginTop={2} fontSize={13}>
                    A Portrait Of Baptiste Person As An Astronaut
                    </Box>
                </Box>
                <Box width={"100%"} paddingBottom={4}>
                    <Flex fontSize={14} fontWeight={"bold"} textAlign={"center"} gap={3} alignItems={"center"}>
                        <Icon as={CiHeart}/>
                        Generated...
                    </Flex>
                    <Box marginTop={2} fontSize={13}>
                        Today at 10:00 AM
                    </Box>
                </Box>
              </VStack>
              <Flex  justify={"end"} alignItems={"center"}  width={{base: "100%", md: "25%"}} borderRadius={20} overflow={"hidden"}>
                <Image
                    width={300}
                    height={300}
            
                    style={
                        {
                            objectFit: "cover"
                        }
                    
                    }
                    alt="prompts image"
                    src="/prompts/romy/viking.png"
                />

              </Flex>
            </Wrap>
            <Flex bgColor={"#FAF6F5"} borderRadius={10} direction={{base:"column", md:"row"}} padding={{base: 5, md:8}} alignItems={"center"} justify={"space-between"} marginTop={{base: 5, md:8}}>
                <Box textAlign={"center"} fontStyle={"poppins"} fontSize={20} fontWeight={"bold"}>
                Do you want to create your own avatars?
                </Box>
                <Button bgColor={"buttonMain"} paddingX={8} marginY={{base:3, md:0}} textColor={"white"} variant="brand">
                    Yes, I Want!
                </Button>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
      <Flex
        width={"76%"}
        justify={"center"}
        alignItems={"center"}
        marginX="auto"
        // the below will be lost 
        marginTop={10}
        direction={"column"}
      >
        <Card width="100%" paddingX={{md:6}} paddingY={2}>
          <CardBody>
            <Wrap  justifyContent={"space-between"} spacingX={{base: "0", md:"15%"}}>
              <VStack spacing={0} width={{base: "100%", md:"60%"}}>
                <Box  paddingBottom={6} marginBottom={6} borderBottom={"2px"} borderColor={"#DBE5ED"} width={"100%"}>
                    <Flex fontSize={14} fontWeight={"bold"} textAlign={"center"} gap={3} alignItems={"center"}>
                        <Icon as={CiStar}  />
                        Studio Name
                    </Flex>
                    <Box marginTop={2} fontSize={13}>
                        Michael Jackson
                    </Box>
                </Box>
                <Box  paddingBottom={6} marginBottom={6} borderBottom={"2px"} borderColor={"#DBE5ED"} width={"100%"}>
                    <Flex fontSize={14} fontWeight={"bold"} textAlign={"center"} gap={3} alignItems={"center"}>
                        <CalendarIcon />
                        Avatar Prompts
                    </Flex>
                    <Box marginTop={2} fontSize={13}>
                    A Portrait Of Baptiste Person As An Astronaut
                    </Box>
                </Box>
                <Box width={"100%"} paddingBottom={4}>
                    <Flex fontSize={14} fontWeight={"bold"} textAlign={"center"} gap={3} alignItems={"center"}>
                        <Icon as={CiHeart}/>
                        Generated...
                    </Flex>
                    <Box marginTop={2} fontSize={13}>
                        Today at 10:00 AM
                    </Box>
                </Box>
              </VStack>
              <Flex  justify={"end"} alignItems={"center"}  width={{base: "100%", md: "25%"}} borderRadius={20} overflow={"hidden"}>
                <Image
                    width={300}
                    height={300}
            
                    style={
                        {
                            objectFit: "cover"
                        }
                    }        
                    alt="prompts-viking"        
                    src="/prompts/romy/viking.png"
                />

              </Flex>
            </Wrap>
          </CardBody>
        </Card>
        <Flex width={"100%"} bgColor={"#F8EBE7"} borderRadius={10} direction={{base:"column", md:"row"}} padding={{base: 5, md:8}} alignItems={"center"} justify={"space-between"} marginTop={{base: 5, md:8}}>
                <Box textAlign={"center"} fontStyle={"poppins"} fontSize={20} fontWeight={"bold"}>
                Do you want to create your own avatars?
                </Box>
                <Button bgColor={"buttonMain"} paddingX={8} marginY={{base:3, md:0}} textColor={"white"} variant={"brand"}>
                    Yes, I Want!
                </Button>
            </Flex>
        </Flex>
  </>)
}

export default GeneratorCard;
