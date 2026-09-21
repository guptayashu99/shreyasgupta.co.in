import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Page',
  robots: {
    index: false,
    follow: false,
  },
};

export default function WeddingPageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
