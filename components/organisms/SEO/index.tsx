import Head from 'next/head';
import React from 'react';

interface SEOTypes {
  title?: string,
  description?: string,
  image?: string
}

export default function SEO({
  title,
  description,
  image,
}: Partial<SEOTypes>) {
  return (
    <Head>
      <title>{title || 'StoreGG - Get a New Experience in Gaming'}</title>
      <meta name="description" content={description || 'We help million game player to topup their loved games'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="image" content={image} />

      <meta name="og:title" content={title || 'StoreGG - Get a New Experience in Gaming'} />
      <meta name="og:type" content="website" />
      <meta name="og:description" content={description || 'We help million game player to topup their loved games'} />
      <meta name="og:image" content={image} />

      <meta name="twitter:title" content={title || 'StoreGG - Get a New Experience in Gaming'} />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:description" content={description || 'We help million game player to topup their loved games'} />
      <meta name="twitter:image" content={image} />

      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#4d17e2" />
      <meta name="keywords" content="games,topup,game store,topup game,storegg,storegg topup" />
    </Head>
  );
}
