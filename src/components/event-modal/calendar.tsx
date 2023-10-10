import { Slide, Slider } from '$components/slider';
import {
  Button,
  Center,
  Flex,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
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
      <ModalContent bg="#F5F7F4">
        <ModalBody p="0" pos="relative">
          <Flex
            pb="8"
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
            <Slider w="full" settings={settings}>
              {images.map((image) => {
                return (
                  <Slide key={image} className="slide" itemID={image}>
                    <Center w="full" pb="8">
                      <Image
                        roundedTop="md"
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

        <ModalFooter flexDir="column" gap="2" w="full" mx="auto">
          <Button
            rounded="full"
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
            rounded="full"
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
