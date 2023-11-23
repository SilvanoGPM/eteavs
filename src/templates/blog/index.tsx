'use client';

import { DefaultContainer } from '$components/default-container';
import { NewsLink } from '$components/news-link';
import { Pagination } from '$components/pagination';
import { useHeaderFilled } from '$hooks/use-header-filled';
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { PiNewspaperFill } from 'react-icons/pi';
import { useFindNews } from './use-find-news';
import { usePagination } from './use-pagination';

export function BlogTemplate() {
  useHeaderFilled(true);

  const { page, setPage } = usePagination();

  const newsQuery = useFindNews({ page, size: 10 });

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
            Blog
          </Heading>

          <Text color="gray.500" maxW="550px" textAlign="center">
            Notícias sobre a Escola Técnica Estadual Ariano Vilar Suassuna
          </Text>
        </Center>

        {newsQuery.isLoading ? (
          <Center>
            <Spinner color="yellow.500" size="xl" />
          </Center>
        ) : (
          <>
            {newsQuery.data ? (
              <>
                <SimpleGrid
                  w="full"
                  px="4"
                  spacing={4}
                  minChildWidth={{ base: '220px', sm: '320px' }}
                  justifyItems="center"
                >
                  {newsQuery.data.map((news) => (
                    <Box
                      key={news.slug}
                      pos="relative"
                      h={{ base: '220px', sm: '320px' }}
                      w="full"
                      role="group"
                      cursor="pointer"
                    >
                      <NewsLink news={news} />
                    </Box>
                  ))}
                </SimpleGrid>

                {newsQuery.total > 1 && (
                  <Center w="full">
                    <Pagination
                      currentPage={page}
                      onPageChange={setPage}
                      totalCountOfRegisters={newsQuery.total}
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
                    Nenhuma notícia encontrada.
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
