import Head from 'next/head'

import Footer from 'src/components/Footer';
import PageHeader from 'src/content/landingPage/PageHeader';
import PageNotFound from 'src/content/status/404Status';


function Home() {
  return (
    <>
      <Head>
        <title>2BNK</title>
        <meta name="description" content="2BNK - Framework completo para sua Fintech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader/>
      <PageNotFound/>
      <Footer/>
    </>
  )
}

export default Home;
