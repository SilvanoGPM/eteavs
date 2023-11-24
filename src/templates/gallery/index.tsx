'use client';

import { DefaultContainer } from '$components/default-container';
import { Pagination } from '$components/pagination';
import { PhotoLink } from '$components/photo-link';
import { useHeaderFilled } from '$hooks/use-header-filled';
import {
  Center,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { PiNewspaperFill } from 'react-icons/pi';
import { useFindPhotos } from './use-find-photos';
import { usePagination } from './use-pagination';

export function GalleryTemplate() {
  useHeaderFilled(true);

  const { page, setPage } = usePagination();

  const photosQuery = useFindPhotos({ page, size: 8 });

  return (
    <>
      <Flex
        as={DefaultContainer}
        direction="column"
        mx="auto"
        w="full"
        py="16"
        px={{ base: '4' }}
      >
        <Center
          flexDir="column"
          w="full"
          mb="8"
          mt={{ base: '8', lg: '0' }}
          gap="2"
        >
          <Heading maxW="100%" fontSize="2xl" textAlign="center">
            Galeria
          </Heading>

          <Text color="gray.500" maxW="550px" textAlign="center">
            Galeria de fotos da Escola Técnica Estadual Ariano Vilar Suassuna
          </Text>
        </Center>

        {photosQuery.isLoading ? (
          <Center>
            <Spinner color="yellow.500" size="xl" />
          </Center>
        ) : (
          <>
            {photosQuery.data ? (
              <>
                <SimpleGrid
                  w="full"
                  px="4"
                  spacing={4}
                  minChildWidth={{ base: '220px', sm: '320px' }}
                  justifyItems="center"
                >
                  {photosQuery.data.map((photo) => (
                    <PhotoLink key={photo.slug} photo={photo} />
                  ))}
                </SimpleGrid>

                {photosQuery.total > 1 && (
                  <Center w="full">
                    <Pagination
                      currentPage={page}
                      onPageChange={setPage}
                      totalCountOfRegisters={photosQuery.total}
                      registersPerPage={10}
                      showResume={false}
                    />
                  </Center>
                )}
              </>
            ) : (
              <>
                <Center flexDir="column" gap="1">
                  <Icon as={PiNewspaperFill} fontSize="6xl" />
                  <Text color="gray.500" fontSize="2xl">
                    Nenhuma foto encontrada.
                  </Text>
                </Center>
              </>
            )}
          </>
        )}
      </Flex>
    </>
  );
}
