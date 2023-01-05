import Head from 'next/head'
import Footer from 'src/components/Footer';
import { Banner } from 'src/content/landingPage/Banner';
import PageHeader from 'src/content/landingPage/PageHeader';
import { Features } from '../src/content/landingPage/Features/index';



function Home() {
  return (
    <>
      <Head>
        <title>2BNK-Plataforma completa para seu produto</title>
        <meta name="description" content="2BNK - Framework completo para sua Fintech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader/>
      <Banner/>
      <Features/>
      <Footer/>
    </>
  )
}

export default Home;
