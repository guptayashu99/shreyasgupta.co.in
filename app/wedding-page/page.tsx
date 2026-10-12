import Link from 'next/link';

const options = [
  {
    side: "Groom Side",
    name: 'Shreyas',
    description: 'View the groom-side invitation and celebration details.',
    href: '/wedding-invite-sg',
  },
  {
    side: 'Bride Side',
    name: 'Amisha',
    description: 'View the bride-side invitation and celebration details.',
    href: '/wedding-invite-ar',
  },
];

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#5b1e2a_0%,#2d0d15_32%,#12070d_100%)] text-[#f7e5b8]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <div className="overflow-hidden rounded-[32px] border border-[#8a4f5d]/60 bg-[linear-gradient(135deg,rgba(53,18,23,0.96),rgba(90,23,30,0.92),rgba(47,14,18,0.98))] shadow-[0_30px_120px_rgba(26,8,12,0.72)]">
          <div className="border-b border-[#8a4f5d]/60 bg-[linear-gradient(180deg,rgba(73,25,33,0.7),rgba(36,12,18,0.2))] px-6 py-8 md:px-10 md:py-10">
            <div className="mb-6 flex justify-center">
              <img src="/company-logos/Wedding_Logo.png" alt="Wedding logo" className="h-20 w-20 rounded-full border border-[#f4d68a]/60 bg-[#2a0b12]/60 object-cover p-2 shadow-[0_0_25px_rgba(244,214,138,0.18)]" />
            </div>
            <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#f5d77a]">
              Wedding Celebration
            </p>
            <h1 className="mt-5 text-center bg-gradient-to-r from-[#f9e6b1] via-[#d8b96d] to-[#f3d479] bg-clip-text font-display text-[clamp(42px,7vw,72px)] font-black leading-[0.96] tracking-[-0.06em] text-transparent">
              Amisha &amp; Shreyas
            </h1>
            <p className="mt-5 text-center text-base text-[#f1d7a0] md:text-lg">
              Choose the side you are joining from below.
            </p>
          </div>

          <div className="space-y-8 px-6 py-8 md:px-10 md:py-10">
            <div className="grid gap-5 md:grid-cols-2">
              {options.map((option) => (
                <Link
                  key={option.side}
                  href={option.href}
                  className="group rounded-3xl border border-[#9b5c64]/60 bg-[linear-gradient(180deg,rgba(56,16,20,0.9),rgba(28,8,12,0.88))] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[#d8b96d]/80"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d7b369]">{option.side}</p>
                  <h2 className="mt-4 font-display text-4xl font-bold text-[#f9e8b5]">{option.name}</h2>
                  <p className="mt-3 text-sm text-[#f0d6a3]">{option.description}</p>
                  <span className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5d77a] group-hover:text-[#fff5d0]">
                    Open Invite →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
