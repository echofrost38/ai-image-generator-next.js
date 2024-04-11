"use client";

import { Box, Button, Flex, Stack, Switch, Container, Wrap, Link } from "@chakra-ui/react";
import BillingCard from "./billingCard";
import { ArrowBackIcon } from "@chakra-ui/icons";

const PlanPage = () => {
  return (
    <>
    <Flex justify="center" align="center">
      <Flex width={"90%"}>
        <Button variant="ghost">
        <Flex width={"100%"} pb={0} justify={"start"}>
          <Button
            paddingLeft={0}
            _hover={{ bg: "none" }}
            leftIcon={<ArrowBackIcon />}
            textColor={"beige.500"}
            variant="ghost"
            as={Link}
            href="/dashboard"
          >
            Back to Dashboards
          </Button>
        </Flex>
        </Button>
      </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginY={10}
      >
        <Stack spacing={4}>
          <Flex justifyContent="center" alignItems="center" gap={2} fontWeight="poppins">
            <Box fontSize={13} textColor="textHomePage">
              Billed monthly
            </Box>
            <Switch/>
            <Box fontSize={13} textColor="textHomePage">
              Billed annually
            </Box>
          </Flex>
        </Stack>
      </Flex>

      <Flex justify={"center"} marginBottom={10}>
        <Wrap justify={"space-around"} width={"90%"} flex={"wrap"}>
          <BillingCard
            title="Starter"
            price="9.99"
            features={[
              "Unlimited projects",
              "Unlimited storage",
              "Cancel anytime",
            ]}
          />
          <BillingCard
            
            title="Plus"
            price="19"
            features={[
              "All Basic features",
              "Priority support",
              "Unlimited users",
            ]}
          />
          <BillingCard
            title="Enterprise"
            price="49"
            features={[
              "All Pro features",
              "Unlimited users",
              "Personalized onboarding",
            ]}
            isPopular={true}
          />
          <BillingCard
            title="Premium"
            price="99"
            features={[
              "All Enterprise features",
              "Unlimited users",
              "Personalized onboarding",
            ]}
          />
        </Wrap>
      </Flex>
    </>
  );
};

export default PlanPage;
