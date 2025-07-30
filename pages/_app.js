import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="St. Joseph Catholic Church Kahawa Sukari - A welcoming community of faith" />
        <meta name="keywords" content="Catholic Church, Kahawa Sukari, St. Joseph, Mass Times, Church Events" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="St. Joseph Catholic Church Kahawa Sukari" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://stjosephchurchkahawasukari.org" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
