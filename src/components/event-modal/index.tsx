import {
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import Countdown from 'react-countdown';
import { FaCalendar, FaTimes, FaWpforms } from 'react-icons/fa';

import bottomImg from '$assets/images/bottom.png';
import suassunaTecImg from '$assets/images/suassunatec.png';
import topImg from '$assets/images/top.png';

import { UnitBox } from './unit-box';

export function EventModal() {
  const disclosure = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal {...disclosure} size="full" motionPreset="slideInRight">
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image src={topImg.src} pos="absolute" top="0" left="0" />
          <Image src={bottomImg.src} pos="absolute" bottom="0" right="0" />

          <IconButton
            aria-label="Fechar modal"
            icon={<FaTimes />}
            pos="absolute"
            color="red"
            variant="unstyled"
            fontSize="3xl"
            top="4"
            right="4"
            onClick={disclosure.onClose}
          />

          <Center
            minH="95vh"
            flexDir="column"
            gap="8"
            py={{ base: '24', md: '0' }}
          >
            <Text
              color="green"
              textAlign="center"
              fontWeight="900"
              fontSize="2xl"
              textTransform="uppercase"
            >
              De 17 a 19 de Outubro <br /> Das 08H às 16H
            </Text>

            <Image
              width="150px"
              alt="Suassuna + Tec Logo"
              src={suassunaTecImg.src}
            />

            <Countdown
              date={new Date(2023, 9, 17, 7)}
              renderer={({ days, hours, minutes, seconds }) => (
                <Flex gap={{ base: '2', sm: '4', md: '8' }}>
                  <UnitBox label="Dias" unit={days} />
                  <UnitBox label="Horas" unit={hours} />
                  <UnitBox label="Minutos" unit={minutes} />
                  <UnitBox label="Segundos" unit={seconds} />
                </Flex>
              )}
            />

            <Flex gap="4" wrap="wrap" justify="center" align="center" w="full">
              <Button
                href="https://www.sympla.com.br/evento/1-suassuna-tec/2190900?_gl=1%2Au01t2y%2A_ga%2ANjI0NDI0NDcyLjE2OTYzNjIzNDI.%2A_ga_KXH10SQTZF%2AMTY5NjQ2MjczNS43LjEuMTY5NjQ2NDExMy4wLjAuMA&referrer=l.instagram.com"
                as={Link}
                isExternal
                leftIcon={<FaWpforms />}
                colorScheme="green"
                rounded="full"
                px="8"
                maxW="300px"
                w="full"
              >
                Cadastre-se
              </Button>

              <Button
                leftIcon={<FaCalendar />}
                colorScheme="green"
                rounded="full"
                px="8"
                maxW="300px"
                w="full"
              >
                Programação
              </Button>
            </Flex>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
