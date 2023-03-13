import Head from 'next/head';

import Layout from '../components/Layout/layout';
import Home from '../components/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title> Portfolio Développeuse Web Morgane Tressens</title>
        <meta name="description" content="Je suis développeuse web & web mobile. Mon intérêt pour le design, l’architecture, l’expérience utilisateur et la programmation me pousse à me diversifier un maximum pour concevoir et réaliser des sites web du cahier des charges à la mise en ligne. Je suis prête à participer à la réalisation de vos projets." />
      </Head>
      <Layout>
        <Home />
      </Layout>

    </>
  )
};
