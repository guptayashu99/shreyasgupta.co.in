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
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://shreyasgupta.co.in/#person',
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
        worksFor: {
          '@type': 'Organization',
          name: 'UKG',
          url: 'https://www.ukg.com',
        },
        hasOccupation: [
          {
            '@type': 'Role',
            roleName: 'Senior Agile Delivery Professional',
            startDate: '2025-12',
            occupationLocation: { '@type': 'Country', name: 'India' },
            worksFor: { '@type': 'Organization', name: 'UKG' },
          },
          {
            '@type': 'Role',
            roleName: 'IT Engineer — Agile & Automation',
            startDate: '2024-12',
            endDate: '2025-12',
            worksFor: { '@type': 'Organization', name: 'UKG' },
          },
          {
            '@type': 'Role',
            roleName: 'Software Engineer — QA & Salesforce',
            startDate: '2022-02',
            endDate: '2024-11',
            worksFor: { '@type': 'Organization', name: 'LTIMindtree' },
          },
          {
            '@type': 'Role',
            roleName: 'Associate Software Engineer',
            startDate: '2021-07',
            endDate: '2022-01',
            worksFor: { '@type': 'Organization', name: 'Mindtree Ltd' },
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': 'https://shreyasgupta.co.in/#certifications',
        name: 'Professional Certifications',
        description: 'Salesforce and Scrum Alliance certifications held by Shreyas Gupta',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Salesforce Certified Sales Cloud Consultant' },
          { '@type': 'ListItem', position: 2, name: 'Scrum Master Certified (SMC)' },
          { '@type': 'ListItem', position: 3, name: 'Salesforce Certified Platform App Builder' },
          { '@type': 'ListItem', position: 4, name: 'Certified Scrum Product Owner (CSPO)' },
          { '@type': 'ListItem', position: 5, name: 'Salesforce Certified Agentforce Specialist' },
          { '@type': 'ListItem', position: 6, name: 'Salesforce Certified Platform Developer' },
          { '@type': 'ListItem', position: 7, name: 'Salesforce Certified Platform Foundations' },
          { '@type': 'ListItem', position: 8, name: 'Salesforce Certified Platform Administrator' },
        ],
      },
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
