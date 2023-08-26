import { Metadata } from 'next';

import { Main } from '$components/main';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return <Main />;
}
