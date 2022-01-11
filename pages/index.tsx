import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

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
    </div>
  );
};

export default Home;
