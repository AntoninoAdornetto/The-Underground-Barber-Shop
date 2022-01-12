import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import { heroImageConfigs } from '@helpers/siteConfigs';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Underground Barber Shop</title>
        <meta
          name="description"
          content="Specializing in mens haircuts, The Armanino Showroom (also known as The Underground Barbershop) is the spot to visit in Boise if you are looking for a great haircut"
        />
        <meta
          name="description"
          content="armanino, showroom, barbershop, haircut, boise, idaho, biagio, adornetto, fashion, style"
        />
      </Head>
      <Navbar navOptions={['About', 'Services', 'Contact', 'Gallery']} />
      <Hero
        image={heroImageConfigs.heroConcat()}
        rgba1="32,33,36,.829"
        rgba2="138,180,248,.274"
      />
    </div>
  );
};

export default Home;
