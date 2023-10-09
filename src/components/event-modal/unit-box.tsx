import { Flex, Text } from '@chakra-ui/react';

interface UnitBoxProps {
  label: string;
  unit: number;
}

export function UnitBox({ label, unit }: UnitBoxProps) {
  return (
    <Flex
      direction="column"
      textAlign="center"
      w={{ base: '60px', sm: '90px', md: '110px' }}
    >
      <Text fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} fontWeight="bold">
        {String(unit).padStart(2, '0')}
      </Text>{' '}
      <Text
        textTransform="uppercase"
        fontSize={{ base: 'x-small', sm: 'md', md: 'lg' }}
        color="gray.700"
      >
        {label}
      </Text>
    </Flex>
  );
}
