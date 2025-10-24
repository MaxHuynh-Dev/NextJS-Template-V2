type StrapiSocialSeo = {
  social: 'Facebook' | 'Twitter';
  title: string;
  description: string;
  thumbnail: StrapiMedia;
};

type StrapiSeo = {
  metaTitle: string;
  metaDescription: string;
  metaImage: StrapiMedia;
  keywords: string;

  metaRobots: string;
  structuredData: string;
  metaViewport: string;
  openGraph: StrapiOpenGraph;
  socials: StrapiSocialSeo[];
};

type StrapiOpenGraph = {
  ogTitle: string;
  ogDescription: string;
  ogImage: StrapiMedia;
  ogUrl: string;
  ogType: string;
};
