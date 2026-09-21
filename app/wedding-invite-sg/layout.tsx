import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Groom Side Wedding Invitation',
  openGraph: {
    title: 'Shreyas & Amisha | Groom Side Wedding Invitation',
    images: [{ url: 'https://shreyasgupta.co.in/company-logos/Wedding_Logo.png', alt: 'Amisha and Shreyas wedding logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Shreyas & Amisha | Groom Side Wedding Invitation',
    images: ['https://shreyasgupta.co.in/company-logos/Wedding_Logo.png'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function GroomInviteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
