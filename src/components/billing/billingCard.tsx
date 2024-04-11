import { CheckCircleIcon } from "@chakra-ui/icons";
import { Card, Button, CardBody, Box, Flex, List } from "@chakra-ui/react";
import { CheckedListItem } from "../home/Pricing";

export interface BillingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}
const BillingCard = (billingProps: BillingCardProps) => {
  return (
    <Card
      width={{ base: "100%", md: "23%" }}
      bgColor={billingProps.isPopular ? "#ccc" : ""}
      _hover={{ scale: "105%", bgColor: "#ccc"}}
    >
      <CardBody>
        <Box height={"2rem"}>
          <Box
            fontSize={10}
            paddingX={1}
            borderRadius={4}
            bgColor="GrayText"
            width={"36%"}
            textAlign={"center"}
          >
            {billingProps.isPopular ? "Most popular" : " "}
          </Box>
        </Box>

        <Box marginBottom={6} fontSize={18} fontWeight={"medium"}>
          {billingProps.title}
        </Box>
        <Box fontFamily={"poppins"} fontSize={34} fontWeight="bold">
          $ {billingProps.price}
        </Box>
        <Button
          variant="brand"
          bgColor="buttonMain"
          textColor="white"
          borderRadius={3}
          width="100%"
          _hover={{ scale: "105%" }}
        >
          Subscribe
        </Button>
        <Box marginTop={6} marginBottom={2} fontSize={12}>
          This includes
        </Box>
        <Box fontSize={12}>
          <List mt={4} textAlign="left">
            {billingProps.features.map((feature, index) => (
              // <Flex key={index} textColor="black" marginY={1} align={"center"} gap={2}>
              //   <CheckCircleIcon color="#" />
              //   <Box>
              //   {feature}
              //   </Box>
              // </Flex>
              <CheckedListItem key={index}>{feature}</CheckedListItem>
            ))}
          </List>
        </Box>
      </CardBody>
    </Card>
  );
};

export default BillingCard;
