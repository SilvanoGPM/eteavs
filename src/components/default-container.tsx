import { Container, ContainerProps } from '@chakra-ui/react';

export function DefaultContainer(props: ContainerProps) {
  return <Container maxW="7xl" px={['4', '4', '8']} {...props} />;
}
