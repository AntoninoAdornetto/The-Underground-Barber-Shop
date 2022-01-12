import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '@components/Navbar';
import Hero from '@components/Hero';
import Heading from '@components/Heading';
import Button from '@components/Button';
import { heroImageConfigs, heroHeadingConfigs, heroButtonConfigs } from '@helpers/siteConfigs';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Fjalla+One&family=Orelega+One&family=Pathway+Gothic+One&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Navbar navOptions={['About', 'Services', 'Contact', 'Gallery']} />
      <Hero
        image={heroImageConfigs.heroConcat()}
        rgba1="32,33,36,.829"
        rgba2="138,180,248,.274"
        heading={<Heading mainText={heroHeadingConfigs.heading} subText={heroHeadingConfigs.subText} />}
        button={
          <Button
            text={heroButtonConfigs.text}
            hrefVal={heroButtonConfigs.hrefVal}
            width={heroButtonConfigs.width}
            height={heroButtonConfigs.height}
            bgColor={heroButtonConfigs.bgColor}
            color={heroButtonConfigs.color}
            fontSize={heroButtonConfigs.fontSize}
          />
        }
      />
    </div>
  );
};

export default Home;
