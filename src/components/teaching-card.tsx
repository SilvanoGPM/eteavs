import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { PiArrowRightBold } from 'react-icons/pi';

interface TeachingCardProps {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

export function TeachingCard({
  image,
  title,
  description,
  onClick,
}: TeachingCardProps) {
  return (
    <Flex
      rounded="2xl"
      overflow="hidden"
      direction="column"
      minH="480px"
      w="full"
      maxW="340px"
      bg="white"
      color="blue.600"
      shadow="2xl"
    >
      <Image w="full" h="40%" src={image} />

      <Flex direction="column" p="4">
        <Heading as="h4" fontSize={{ base: 'xl', md: '2xl' }}>
          {title}
        </Heading>
        <Text fontSize="sm" mt={{ base: '2', md: '4' }} color="gray.700">
          {description}
        </Text>
      </Flex>

      <Spacer />

      <Button
        variant="customSolid"
        mx="4"
        mb={{ base: '4', md: '8' }}
        minH="40px"
        rightIcon={<Icon as={PiArrowRightBold} />}
        onClick={onClick}
      >
        Saiba Mais
      </Button>
    </Flex>
  );
}
