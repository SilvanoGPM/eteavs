'use client';

import { Fade } from '$components/animations/fade';
import { DefaultContainer } from '$components/default-container';
import { Pagination } from '$components/pagination';
import { PhotoLink } from '$components/photo-link';
import { useHeaderFilled } from '$hooks/use-header-filled';
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Skeleton,
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
          <Fade delay={500}>
            <Heading maxW="100%" fontSize="2xl" textAlign="center">
              Galeria
            </Heading>
          </Fade>

          <Fade delay={700}>
            <Text color="gray.500" maxW="550px" textAlign="center">
              Galeria de fotos da Escola Técnica Estadual Ariano Vilar Suassuna
            </Text>
          </Fade>
        </Center>

        {photosQuery.isLoading ? (
          <SimpleGrid
            w="full"
            px="4"
            spacing={4}
            minChildWidth={{ base: '220px', sm: '320px' }}
            justifyItems="center"
          >
            <Skeleton w="full" h={{ base: '220px', sm: '320px' }} />
            <Skeleton w="full" h={{ base: '220px', sm: '320px' }} />
            <Skeleton w="full" h={{ base: '220px', sm: '320px' }} />
            <Skeleton w="full" h={{ base: '220px', sm: '320px' }} />
            <Skeleton w="full" h={{ base: '220px', sm: '320px' }} />
            <Skeleton w="full" h={{ base: '220px', sm: '320px' }} />
          </SimpleGrid>
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
                  {photosQuery.data.map((photo, index) => (
                    <Box
                      as={Fade}
                      fraction={0.3}
                      key={photo.slug}
                      delay={index > 2 ? 0 : 1000 * (index + 1) * 0.5}
                      h={{ base: '320px', sm: '420px' }}
                      w="100%"
                    >
                      <PhotoLink key={photo.slug} photo={photo} />
                    </Box>
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
