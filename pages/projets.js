import Head from "next/head";

import Layout from "../components/Layout/layout";
import Header from "../components/Header";
import CardProject from "../components/CardProject";

import dataProject from "../data/project";
 

// markup
const ProjetsPage = () => {
  return (
    <>
      <Head>
        <title>Morgane Tressens développeuse web projets réalisées</title>
        <meta name="description" content="Découvrez la liste des projets que j'ai réalisé seule ou en équipe." />
      </Head>
      <Layout>
        <Header />
        <h1>Projets réalisés</h1>
        <CardProject dataProject={dataProject} />
      </Layout>

    </>
  )
}

export default ProjetsPage;
