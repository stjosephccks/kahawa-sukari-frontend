import Head from 'next/head';

export default function SEO({ 
  title = 'St. Joseph Catholic Church Kahawa Sukari',
  description = 'A welcoming community of faith at St. Joseph Catholic Church Kahawa Sukari',
  keywords = 'Catholic Church, Kahawa Sukari, St. Joseph, Mass Times, Church Events',
  image = 'https://stjosephchurchkahawasukari.org/images/og-image.jpg',
  url = 'https://stjosephchurchkahawasukari.org',
  type = 'website'
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon - make sure to add your favicon.ico to public directory */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
