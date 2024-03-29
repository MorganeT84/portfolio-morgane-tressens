import Head from "next/head";

import Layout from "../components/Layout/layout";
import Header from '../components/Header/index';
import CardTech from "../components/CardTech";

import dataTechno from '../data/techno';

// markup
const TechnoPage = () => {
  return (
    <>
      <Head>
        <title>Les technologies explorées dans le développement web</title>
        <meta name="description" content="La liste des technologies que j'utilise." />
      </Head>
      <Layout>
        <Header />
        <h1>Les technologies explorées</h1>
        <CardTech dataTechno={dataTechno} />
      </Layout>

    </>
  )
}
export default TechnoPage;
