import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGames from '../components/organisms/FeaturedGames';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';

function Home() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Head>
        <title>Storegg - Easy Game Topup Platform</title>
      </Head>
      <Navbar />
      <div className="container">
        <MainBanner />
        <TransactionStep />
        <FeaturedGames />
        <Reached />
        <Story />
      </div>
      <Footer />
    </>
  );
}

export default Home;
