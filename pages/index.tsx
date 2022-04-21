import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/navbar';
import MainBanner from '../components/organisms/mainBanner';
import TransactionStep from '../components/organisms/transactionStep';
import FeaturedGame from '../components/organisms/featuredGame';
import Reached from '../components/organisms/reached';
import Story from '../components/organisms/story';
import Footer from '../components/organisms/footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
        <Navbar />
        <MainBanner />
        <TransactionStep />
        <FeaturedGame />
        <Reached />
        <Story />
        <Footer />
    </>
  );
};

export default Home;
