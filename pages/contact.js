import Head from "next/head";

import Layout from "../components/Layout/layout";
import Header from '../components/Header/index';
import Contact from "../components/Contact";

// markup
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contactez développeuse web Morgane Tressens</title>
        <meta name="description" content="Je suis développeuse web, Contactez-moi pour plus d'informations" />
      </Head>
      <Layout>
        <Header />
        
        <Contact />
      </Layout>

    </>
  )
}

export default ContactPage;
