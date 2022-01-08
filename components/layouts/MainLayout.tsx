import type { ReactNode } from 'react';
import Footer from '../Footer';
import Navbar from '../organisms/Navbar';

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
