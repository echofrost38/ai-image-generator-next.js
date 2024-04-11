"use client";

import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Input,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FaMagic, FaRegLightbulb, FaRegPaperPlane } from "react-icons/fa";
import { Project } from "@prisma/client";
import axios from "axios";
import { formatRelative } from "date-fns";
import Link from "next/link";
import { useMutation } from "react-query";
import { ProjectWithShots } from "../pages/StudioPage";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Image from "next/image";

const ProjectCard = ({
  project,
  handleRefreshProjects,
}: {
  project?: ProjectWithShots;
  handleRefreshProjects: () => void;
}) => {
  const {
    mutate: trainModel,
    isLoading: isModelLoading,
    isSuccess,
  } = useMutation(
    `train-model-${project?.id}`,
    (project: Project) =>
      axios.post(`/api/projects/${project.id}/train`, {
        prompt,
      }),
    {
      onSuccess: () => {
        handleRefreshProjects();
      },
    }
  );

  const isWaitingPayment = !project?.stripePaymentId;
  const isWaitingTraining =
    project?.stripePaymentId && !project?.replicateModelId;

  const isReady = project?.modelStatus === "succeeded";
  const isTraining =
    project?.modelStatus === "processing" ||
    project?.modelStatus === "pushing" ||
    project?.modelStatus === "starting" ||
    project?.modelStatus === "queued";

  return (
    <Box position="relative" width="100%" pt={4} pb={10} px={5}>
      <Flex width={"80%"} margin={"auto"} direction={"column"}>
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
        <Card width="100%" paddingX={{ md: 6 }} paddingY={2}>
          <CardBody>
            <Flex
              width="100%"
              alignItems={"center"}
              justifyContent={"space-between"}
              marginBottom={6}
            >
              <Flex
                width="100%"
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box flex="1">
                  <Text fontSize="2xl" fontWeight="semibold">
                    Studio <b>{"getRefinedStudioName(project!)"}</b>{" "}
                    {isReady && (
                      <Badge colorScheme="teal" bgColor={"buttonMain"}>
                        {project.credits} shots left
                      </Badge>
                    )}
                  </Text>
                  <Text
                    textTransform="capitalize"
                    fontSize="sm"
                    color="beige.500"
                  >
                    {formatRelative(
                      new Date(project?.createdAt ?? 0),
                      new Date()
                    )}
                  </Text>
                </Box>
                <Button leftIcon={<FaRegPaperPlane />} variant="ghost">
                  Share
                </Button>
              </Flex>
            </Flex>
            <Flex gap={5} marginBottom={5}>
              <Input
                shadow="lg"
                placeholder="Cowboy, Pirate, Jedi, Zombie…"
                paddingLeft={6}
                variant="unstyled"
                onChange={(e) => {
                  console.log(e.currentTarget.value);
                }}
              />
              <Button
                disabled={false}
                variant="brand"
                rightIcon={<FaMagic />}
                isLoading={false}
                textColor={"white"}
                type="submit"
                bgColor={"buttonMain"}
              >
                Generate
              </Button>
            </Flex>
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"space-"}
              gap={4}
              fontSize={17}
              marginBottom={6}
            >
              <FaRegLightbulb />
              <Box>
                use the keyword <b>{project?.name ?? "person"} person</b> as the
                subject in your prompt. First prompt can be slow, but following
                prompts will be faster{" "}
              </Box>
            </Flex>
            <Wrap gap={4}>
              <Flex width={90} height={90} borderRadius={"10%"}>
                <Image
                  src={"/prompts/sacha/astronaut.png"}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    borderRadius: "10%",
                  }}
                  alt="prompts-astronaut"
                />
              </Flex>
              <Flex direction={"column"} justifyContent={"space-between"}>
                <Flex direction={"column"}>
                  <Box fontWeight={"bold"} fontSize={18}>
                    An Illustration Patriot of a Babtise Person As an Astronaut.
                  </Box>
                  <Text
                    textTransform="capitalize"
                    fontSize="sm"
                    color="beige.500"
                  >
                    {formatRelative(
                      new Date(project?.createdAt ?? 0),
                      new Date()
                    )}
                  </Text>
                </Flex>
                <Flex
                  gap={0}
                  fontSize={14}
                  textAlign={"center"}
                  alignItems={"center"}
                  textColor={"beige.500"}
                >
                  <Button
                    paddingX={0}
                    paddingRight={1}
                    variant="ghost"
                    _hover={{ bg: "none" }}
                    isLoading={false}
                    textColor={"beige.500"}
                  >
                    Copy Prompt
                  </Button>
                  -
                  <Button
                    paddingX={1}
                    variant="ghost"
                    _hover={{ bg: "none" }}
                    isLoading={false}
                    textColor={"beige.500"}
                  >
                    Download
                  </Button>
                  -
                  <Button
                    paddingX={1}
                    paddingY={0}
                    variant="ghost"
                    _hover={{ bg: "none" }}
                    isLoading={false}
                    textColor={"beige.500"}
                  >
                    Share
                  </Button>
                </Flex>
              </Flex>
            </Wrap>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};

export default ProjectCard;

{
  /* <VStack spacing={4} alignItems="flex-start">
        <Flex width="100%">
          <Box flex="1">
            <Text fontSize="2xl" fontWeight="semibold">
              Studio <b>{getRefinedStudioName(project)}</b>{" "}
              {isReady && (
                <Badge colorScheme="teal" bgColor={"buttonMain"}>{project.credits} shots left</Badge>
              )}
            </Text>
            <Text textTransform="capitalize" fontSize="sm" color="beige.500">
              {formatRelative(new Date(project.createdAt), new Date())}
            </Text>
          </Box>
          <ProjectDeleteButton
            handleRemove={() => {
              handleRefreshProjects();
            }}
            projectId={project.id}
          />
        </Flex>

        {isWaitingPayment && (
          <FormPayment
            handlePaymentSuccess={() => {
              handleRefreshProjects();
            }}
            project={project}
          />
        )}

        {isWaitingTraining && (
          <>
            <VStack overflow="hidden" width="100%" spacing={4}>
              <Box fontWeight="bold" fontSize="xl">
                Your Studio is ready to be trained!
              </Box>
              <AvatarGroup size="lg" max={10}>
                {project.imageUrls.map((url) => (
                  <Avatar key={url} src={url} />
                ))}
              </AvatarGroup>
              <Button
                variant="brand"
                rightIcon={<IoIosFlash />}
                isLoading={isModelLoading || isSuccess}
                onClick={() => {
                  trainModel(project);
                }}
              >
                Start Training
              </Button>
            </VStack>
          </>
        )}

        {isReady && (
          <Center overflow="hidden" width="100%" marginX="auto">
            <VStack spacing={7}>
              {!project.shots.length ? (
                <VStack spacing={0}>
                  <span>{`You don't have any prompt yet`}.</span>
                  <b>Go to your studio to add one !</b>
                </VStack>
              ) : (
                <AvatarGroup size="xl" max={10}>
                  {project.shots
                    .filter((shot) => Boolean(shot.outputUrl))
                    .map((shot) => (
                      <Avatar key={shot.outputUrl} src={shot.outputUrl!} />
                    ))}
                </AvatarGroup>
              )}
              <Button
                rightIcon={<HiArrowRight />}
                variant="brand"
                href={`/studio/${project.id}`}
                as={Link}
              >
                View my Studio
              </Button>
            </VStack>
          </Center>
        )}
      </VStack>

      {isTraining && (
        <Center marginX="auto">
          <VStack spacing={7}>
            <Spinner size="xl" speed="2s" />
            <Text textAlign="center" maxW="20rem">
              The studio is creating{" "}
              <b>the custom model based on your uploaded photos</b>. This
              operation usually takes ~20min.
            </Text>
          </VStack>
        </Center>
      )}

      {project.modelStatus === "failed" && (
        <Center marginX="auto">
          <Text my={10} color="red.600" textAlign="center">
            We are sorry but the creation of the model failed. Please contact us
            by email so we can fix it/refund you.
          </Text>
        </Center>
      )} */
}
