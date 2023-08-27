import { Center, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';

import logoImg from '$assets/images/logo.png';

export function Logo(props: FlexProps) {
  return (
    <Center h="100px" {...props}>
      <Link href="/" aria-label="Ir para o início">
        <Image
          alt="Letras E T E, acrônimo para escola técnica estadual com fundo azul."
          w="120px"
          src={logoImg.src}
        />
      </Link>
    </Center>
  );
}
