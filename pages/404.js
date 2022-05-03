import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout/layout";
import Header from '../components/Header/index';

// markup
const NotFoundPage = () => {
  return (
    <>
     <Head>
        <title>404 Morgane Tressens</title>
        <meta name="description" content="cette page n'existe pas" />
      </Head>
      <Layout>
      <Header />
         <h1>Cette pas n'existe pas ....</h1>
      <Link href='/' passHref>
        <a>retour à la page d'accueil</a>
      </Link>
       
      </Layout>
     
    </>
  )
}

export default NotFoundPage
