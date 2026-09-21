import Link from 'next/link';

export default function WeddingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#5b1e2a_0%,#2d0d15_32%,#12070d_100%)] px-6 py-12 text-[#f7e5b8] md:px-10 md:py-20">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#8a4f5d]/60 bg-[linear-gradient(135deg,rgba(53,18,23,0.96),rgba(90,23,30,0.92),rgba(47,14,18,0.98))] p-6 shadow-[0_30px_120px_rgba(26,8,12,0.72)] md:p-10">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#f5d77a]">Wedding Celebration</p>
        <h1 className="mt-6 bg-gradient-to-r from-[#f9e6b1] via-[#d8b96d] to-[#f3d479] bg-clip-text font-display text-[clamp(40px,7vw,72px)] font-black leading-[0.96] tracking-[-0.06em] text-transparent">
          Amisha &amp; Shreyas
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[#f1d7a0] md:text-lg">
          We invite you to celebrate our wedding with us. Choose the side of the family you would like to view.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/wedding-invite-sg"
            className="group rounded-3xl border border-[#9b5c64]/60 bg-[linear-gradient(180deg,rgba(56,16,20,0.9),rgba(28,8,12,0.88))] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[#d8b96d]/80"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d7b369]">Groom Side</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#f9e8b5]">Shreyas</h2>
            <p className="mt-3 text-sm text-[#f0d6a3]">View the groom-side invitation and celebration details.</p>
            <span className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5d77a] group-hover:text-[#fff5d0]">
              Open Invite →
            </span>
          </Link>

          <Link
            href="/wedding-invite-ar"
            className="group rounded-3xl border border-[#9b5c64]/60 bg-[linear-gradient(180deg,rgba(56,16,20,0.9),rgba(28,8,12,0.88))] p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-[#d8b96d]/80"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d7b369]">Bride Side</p>
            <h2 className="mt-4 font-display text-4xl font-bold text-[#f9e8b5]">Amisha</h2>
            <p className="mt-3 text-sm text-[#f0d6a3]">View the bride-side invitation and celebration details.</p>
            <span className="mt-6 inline-flex font-mono text-[11px] uppercase tracking-[0.18em] text-[#f5d77a] group-hover:text-[#fff5d0]">
              Open Invite →
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
