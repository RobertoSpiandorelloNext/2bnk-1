import Head from 'next/head'
import Footer from 'src/components/Footer';
import { Banner } from 'src/content/landingPage/Banner';
import PageHeader from 'src/content/landingPage/PageHeader';
import { Features } from '../src/content/landingPage/Features/index';

function Home() {
  return (
    <>
      <Head>
        <title>2BNK - Plataforma completa para seu Produto Digital</title>
        <meta name="description" content="Governança, Segurança, Infraestrutura Escalável e uma arquiterura moderna que atende os mais rígidos padrões de conformidade do mercado." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#317EFB" />
        <meta property="og:description" content="Crie sua própria startup com uma sólida base de governança, segurança, arquitetura e infraestrutura." />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image" itemProp="image" content="https://www.2bnk.com/Logo.png" />
        <meta property="og:image:secure" itemProp="image" content="https://www.2bnk.com/Logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.2bnk.com" />
        <meta property="og:image:width" content="192" />
        <meta property="og:image:height" content="192" />
        <meta property="og:updated_time" content="1440432930" />
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
