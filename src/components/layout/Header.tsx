import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Popover,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { HiLogout } from "react-icons/hi";
import { IoIosFlash } from "react-icons/io";
import { SettingsIcon, CalendarIcon, QuestionIcon } from "@chakra-ui/icons";
import { FaRegUser } from "react-icons/fa";

const Header = ({ session }: { session: Session | null }) => {
  return (
    <Flex
      width="100%"
      flexDirection="column"
      marginX="auto"
      maxWidth="container.lg"
      px="2"
    >
      <Flex justifyContent="space-between" py={4} as="footer">
        <Flex
          role="group"
          as={Link}
          href="/"
          alignItems="center"
          fontWeight="bold"
          fontSize="2xl"
        >
          <Image
            style={{ marginLeft: "-30px" }}
            src="/logo.png"
            alt={"logo"}
            width="200px"
          />
        </Flex>
        <HStack spacing={1}>
          <Button
            as={Link}
            href="/prompts"
            colorScheme="buttonMain"
            variant="ghost"
            size="sm"
          >
            Prompts
          </Button>
          {session ? (
            <>
              <Tooltip hasArrow label="Public gallery">
                <Button
                  href={`/gallery/${session.userId}`}
                  as={Link}
                  colorScheme="beige"
                  variant="ghost"
                  size="sm"
                >
                  My Gallery
                </Button>
              </Tooltip>
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
                Dashboard
              </Button>
              <Popover placement="bottom-start">
                <PopoverTrigger>
                  
                    <IconButton
                      
                      aria-label="Profile"
                      icon={<SettingsIcon as={FaRegUser} />}
                      size="md"
                      colorScheme="beige"
                      padding={0}
                      margin={0}
                      variant="ghost"
                      // onClick={() => {
                      //   signOut({ callbackUrl: "/" });
                      // }}
                    />
                  
                </PopoverTrigger>
                <PopoverContent width={"15rem"}>
                  <PopoverArrow />
                  <PopoverBody rowGap={3}>
                    <Button
                      borderRadius={4}
                      as={Link}
                      href={"/billings"}
                      variant="ghost"
                      leftIcon={<SettingsIcon />}
                      width={"100%"}
                      justifyContent="flex-start"
                    >
                      Billings
                    </Button>
                    <Button
                      borderRadius={4}
                      as={Link}
                      href={"/plans"}
                      variant="ghost"
                      leftIcon={<CalendarIcon />}
                      width={"100%"}
                      justifyContent="flex-start"
                    >
                      Plans
                    </Button>
                    <Button
                      borderRadius={4}
                      as={Link}
                      href={"/terms"}
                      variant="ghost"
                      leftIcon={<QuestionIcon />}
                      width={"100%"}
                      justifyContent="flex-start"
                    >
                      Help Center
                    </Button>
                    <Button
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                      }}
                      borderRadius={4}
                      as={Link}
                      href={"/"}
                      variant="ghost"
                      leftIcon={<HiLogout />}
                      width={"100%"}
                      justifyContent="flex-start"
                    >
                      Logout
                    </Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </>
          ) : (
            <Button
              href="/login"
              borderRadius={4}
              as={Link}
              variant="brand"
              size="sm"
              width="4rem"
              height="1.8rem"
              textColor={"white"}
              colorScheme="buttonMain"
              bgColor="buttonMain"
            >
              Log in
            </Button>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Header;
