import { Box, Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import Link from "next/link";

export interface SubscribeModalProps {
    buttonOnClick: string;
    title: string;
    description: string;
    buttonName: string;
}


const SubscribeModal = ({ buttonOnClick, title, description, buttonName}: SubscribeModalProps) => {
    const {isOpen ,onOpen, onClose}  = useDisclosure({defaultIsOpen: true});
     return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen}  onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={0}>
            <ModalCloseButton textColor={"#ddd"} fontSize={20} padding={0}  margin={0}/>
            <ModalBody pb={6}>
                <Flex direction={"column"}  paddingY={8} gap={2}>
                    <Box fontSize={35} fontWeight={"bold"}>
                        {title} 😎
                    </Box>
                    <Box fontWeight={14}>
                        {description}
                    </Box>
                    <Button marginTop={8} bgColor='buttonMain' width={"100%"} textColor={"white"} variant={"brand"} _hover={{scale: 1.3}} as={Link} href={buttonOnClick}>
                    {buttonName}
                </Button>
                </Flex>
            </ModalBody>
        </ModalContent>
      </Modal>
    )
};

export default SubscribeModal;