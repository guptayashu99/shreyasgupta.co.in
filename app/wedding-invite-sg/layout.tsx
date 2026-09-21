import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Groom Side Wedding Invitation',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GroomInviteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
