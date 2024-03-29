import Head from 'next/head'
import '../styles/globals.scss'

import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Développeuse web Morgane Tressens</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Primary Meta Tags */}
        <meta name="title" content="Développeuse web — Morgane Tressens" />
        <meta name="description" content="Développeuse web pour créer des applications via le code React Symfony" />

        <link rel="author" href='Morgane Tressens' />
        <link rel='publisher' href='##' />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.morganetressens.com/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.morganetressens.com/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.morganetressens.com/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="https://www.morganetressens.com/images/favicon/site.webmanifest" />
        <link rel="mask-icon" href="https://www.morganetressens.com/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/*twitter metadata*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.tressensmorgane.com/" />
        <meta property="twitter:title" content="Développeuse web — Morgane Tressens" />
        <meta name="twitter:site" content="{siteMetadata.twitterHandle}" />
        <meta property="twitter:description" content="Développeuse web pour créer des applications via le code React Symfony" />
        <meta property="twitter:image" content="https://www.morganetressens.com/images/favicon/mstile-150x150.png" />
        { /*Open Graph / Facebook*/}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Portfolio Morgane Tressens" />
        <meta property="og:title" content="Développeuse web — Morgane Tressens" />
        <meta property="og:description" content="Développeuse web pour créer des applications via le code React Symfony" />
        <meta property="og:url" content="https://www.tressensmorgane.com/" />
        <meta property="og:image" content="https://www.morganetressens.com/images/favicon/android-chrome-384x384.png" />
        {/* canonical link */}
        <link rel="canonical" href="https://www.tressensmorgane.com" />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>

  )
}

export default MyApp
