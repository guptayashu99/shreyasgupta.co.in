import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Page',
  openGraph: {
    title: 'Amisha & Shreyas | Wedding Celebration',
    images: [{ url: 'https://shreyasgupta.co.in/company-logos/Wedding_Logo.png', alt: 'Amisha and Shreyas wedding logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Amisha & Shreyas | Wedding Celebration',
    images: ['https://shreyasgupta.co.in/company-logos/Wedding_Logo.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function WeddingPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
