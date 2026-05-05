import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shreyas Gupta - Agile Delivery Professional',
  description:
    'Portfolio of Shreyas Gupta — Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
  openGraph: {
    title: 'Shreyas Gupta - Agile Delivery Professional',
    description:
      'Portfolio of Shreyas Gupta — Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
    url: 'https://shreyasgupta.co.in',
    siteName: 'Shreyas Gupta',
    images: [{ url: '/profile.jpg', width: 800, height: 800, alt: 'Shreyas Gupta' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Gupta - Agile Delivery Professional',
    description:
      'Portfolio of Shreyas Gupta — Agile Delivery Professional and Scrum Master with 5+ years of experience in Salesforce GTM systems.',
    images: ['/profile.jpg'],
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
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
