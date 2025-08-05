import { useEffect } from 'react';
import { smoothScroll } from '../utils/smoothScroll';
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize smooth scrolling on mobile
    if (typeof window !== 'undefined') {
      smoothScroll.init();
    }

    // Add smooth scrolling CSS
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
      }
      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }
      }
      * {
        -webkit-overflow-scrolling: touch;
      }
      .smooth-scroll {
        -webkit-overflow-scrolling: touch;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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
        <title>St Joseph Catholic Church Kahawa Sukari | Faith Community in Nairobi Kenya</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
