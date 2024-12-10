import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string;
}

export function MetaTags({ title, description, keywords }: MetaTagsProps) {
  return (
    <Helmet>
      <title>{title} | PC Express Le Mans</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}