import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shreyas Gupta - Agile Delivery Professional',
  description:
    'Portfolio of Shreyas Gupta — Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
  alternates: {
    canonical: 'https://shreyasgupta.co.in',
  },
  openGraph: {
    title: 'Shreyas Gupta - Agile Delivery Professional',
    description:
      'Portfolio of Shreyas Gupta — Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
    url: 'https://shreyasgupta.co.in',
    siteName: 'Shreyas Gupta',
    images: [{ url: 'https://shreyasgupta.co.in/profile.jpg', width: 600, height: 600, alt: 'Shreyas Gupta' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Gupta - Agile Delivery Professional',
    description:
      'Portfolio of Shreyas Gupta — Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
    images: ['https://shreyasgupta.co.in/profile.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e27',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shreyas Gupta',
    jobTitle: 'Agile Delivery Professional',
    description:
      'Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
    url: 'https://shreyasgupta.co.in',
    image: 'https://shreyasgupta.co.in/profile.jpg',
    email: 'work@shreyasgupta.co.in',
    telephone: '+91-9560483058',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Delhi',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.linkedin.com/in/shreyasgupta99/',
      'https://www.salesforce.com/trailblazer/shreyasgupta',
    ],
    knowsAbout: [
      'Agile Delivery',
      'Scrum',
      'Salesforce',
      'GTM Systems',
      'Product Ownership',
      'QA Automation',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
