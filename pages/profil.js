import Head from "next/head";

import Layout from "../components/Layout/layout";
import Header from '../components/Header/index';
import Profil from "../components/Profil";

// markup
const ProfilPage = () => {
  const file_data = [
    {
      id: 0,
      name: "Consultez mon C.V",
      file: "/download/morganetressens-cv.pdf",

    },
    {
      id: 1,
      name: "Consultez ma certification",
      file: "/download/morganetressens-opquast.pdf",
    },
  ]
  return (
    <>
      <Head>
        <title>Profil et compétences Morgane Tressens</title>
        <meta name="description" content="Je suis développeuse web & web mobile. Vous pouvez consulter mon CV ainsi que mes diplômes. Lisez mon parcours professionnel" />
      </Head>
      <Layout>
        <Header />
        <h1>Mon profil</h1>
        <Profil file_data={file_data} />
      </Layout>

    </>
  )
}

export default ProfilPage;
