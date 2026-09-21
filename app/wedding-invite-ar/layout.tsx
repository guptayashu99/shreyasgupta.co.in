import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bride Side Wedding Invitation',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrideInviteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
