import type { Metadata } from "next";

const BASE_URL = "https://www.happydebtrelief.com";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
}: GenerateMetadataOptions): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = `${title} | Happy Debt Relief`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Happy Debt Relief",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

