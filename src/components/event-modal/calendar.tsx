import { Slide, Slider } from '$components/slider';
import {
  Button,
  Center,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { FaInstagram, FaTimes } from 'react-icons/fa';

const images = [
  '/event/image-1.jpeg',
  '/event/image-2.jpeg',
  '/event/image-3.jpeg',
];

export function Calendar(props: UseDisclosureReturn) {
  const settings = {
    draggable: true,
    loop: true,
    navigation: true,
    pagination: { clickable: true },
    slidesPerView: 1,
    spaceBetween: 0,
  };

  return (
    <Modal {...props} size={{ base: 'md', md: '3xl' }} allowPinchZoom>
      <ModalOverlay />
      <ModalContent mx="4">
        <ModalHeader>Programação do Evento</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            flexDir="column"
            align="center"
            sx={{
              '.slide': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <Slider settings={settings} w="full">
              {images.map((image) => {
                return (
                  <Slide key={image} className="slide" itemID={image}>
                    <Center w="full" maxW="540px">
                      <Image
                        alt="Imagem sobre a programação do evento"
                        src={image}
                        w="full"
                        h="full"
                      />
                    </Center>
                  </Slide>
                );
              })}
            </Slider>
          </Flex>
        </ModalBody>

        <ModalFooter flexDir="column" gap="2" w="ful" mx="auto">
          <Button
            as={Link}
            isExternal
            href="https://www.instagram.com/suassuna.tec/"
            leftIcon={<FaInstagram />}
            w="full"
            colorScheme="green"
          >
            Acessar Instagram
          </Button>

          <Button
            leftIcon={<FaTimes />}
            w="full"
            colorScheme="red"
            onClick={props.onClose}
          >
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
