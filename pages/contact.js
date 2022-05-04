import Head from "next/head";

import Layout from "../components/Layout/layout";
import Header from '../components/Header/index';

// markup
const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contactez développeuse web Morgane Tressens</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Layout>
        <Header />
        <h1>Contactez-moi</h1>
      </Layout>

    </>
  )
}

export default ContactPage;
