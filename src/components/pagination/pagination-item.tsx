import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  onPageChange: (page: number) => void;
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  onPageChange,
  number,
  isCurrent = false,
}: PaginationItemProps) {
  return (
    <Button
      onClick={() => onPageChange(number)}
      size="sm"
      fontSize="xs"
      width="4"
      bg="yellow.500"
      borderColor="yellow.500"
      isDisabled={isCurrent}
      _disabled={{
        bg: 'yellow.400',
        borderColor: 'yellow.400',
        cursor: 'default',
      }}
      _hover={{
        _disabled: {
          bg: 'yellow.400',
          borderColor: 'yellow.400',
        },
      }}
    >
      {number}
    </Button>
  );
}
