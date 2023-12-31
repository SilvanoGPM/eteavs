import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

import { PiArrowRightBold, PiCaretRightFill } from 'react-icons/pi';
import { SlideFade } from './animations/slide-fade';

interface TeachingCardProps {
  image: string;
  title: string;
  description: string;
  body: ReactNode;
}

export function TeachingCard({
  image,
  title,
  description,
  body,
}: TeachingCardProps) {
  const modalDisclosure = useDisclosure();

  return (
    <>
      <Flex
        flex="1"
        rounded="2xl"
        overflow="hidden"
        direction="column"
        h="550px"
        w="full"
        minW="340px"
        maxW="340px"
        bg="white"
        color="blue.600"
        shadow="xl"
      >
        <Box w="full" h="40%" overflow="hidden">
          <Image w="full" h="full" src={image} objectFit="cover" />
        </Box>

        <Flex direction="column" p="4">
          <SlideFade delay={300} direction="down">
            <Heading as="h4" fontSize={{ base: 'xl', md: '2xl' }}>
              {title}
            </Heading>
          </SlideFade>

          <SlideFade delay={500} direction="down">
            <Text fontSize="sm" mt={{ base: '2', md: '4' }} color="gray.700">
              {description}
            </Text>
          </SlideFade>
        </Flex>

        <Spacer />

        <Button
          variant="customSolid"
          mx="4"
          mb={{ base: '4', md: '8' }}
          minH="40px"
          rightIcon={<Icon as={PiArrowRightBold} />}
          onClick={modalDisclosure.onOpen}
        >
          Saiba Mais
        </Button>
      </Flex>

      <Modal {...modalDisclosure} size="3xl" motionPreset="slideInBottom">
        <ModalOverlay />

        <ModalContent mx="4">
          <ModalHeader>
            <ModalCloseButton />
            <Heading as="h2" fontSize="2xl">
              {title}
            </Heading>
          </ModalHeader>

          <ModalBody
            sx={{
              img: {
                display: 'inline-block',
              },
            }}
          >
            {body}
          </ModalBody>

          <ModalFooter>
            <Button
              as={Link}
              w="full"
              isExternal
              href="https://sisacad.educacao.pe.gov.br/sissel/"
              size={{ base: 'sm', sm: 'md' }}
              variant="customSolid"
              rightIcon={<Icon as={PiCaretRightFill} />}
              filter="auto"
              _hover={{ textDecor: 'none', brightness: '0.9' }}
            >
              Inscreva-se aqui
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
