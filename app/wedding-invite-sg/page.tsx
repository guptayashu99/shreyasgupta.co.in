import Link from 'next/link';

const venueName = '<Location>';
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName)}`;
const rsvpUrl = 'https://forms.gle/your-google-form-link';

const events = [
  { day: 'Day 1 · 11 March 2026', name: 'Engagement / Sangeet', time: '6:00 PM', hall: '<Hall name>' },
  { day: 'Day 2 · 12 March 2026', name: 'Haldi', time: '11:00 AM', hall: '<Hall name>' },
  { day: 'Day 2 · 12 March 2026', name: 'Jaimala', time: '6:00 PM', hall: '<Hall name>' },
  { day: 'Day 3 · 13 March 2026', name: 'Pheras', time: '2:00 AM', hall: '<Hall name>' },
];

export default function GroomSideInvitationPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#5b1e2a_0%,#2d0d15_32%,#12070d_100%)] text-[#f7e5b8]">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <div className="overflow-hidden rounded-[32px] border border-[#8a4f5d]/60 bg-[linear-gradient(135deg,rgba(53,18,23,0.96),rgba(90,23,30,0.92),rgba(47,14,18,0.98))] shadow-[0_30px_120px_rgba(26,8,12,0.72)]">
          <div className="border-b border-[#8a4f5d]/60 bg-[linear-gradient(180deg,rgba(73,25,33,0.7),rgba(36,12,18,0.2))] px-6 py-8 md:px-10 md:py-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <img src="/company-logos/Wedding_Logo.png" alt="Wedding logo" className="h-20 w-20 rounded-full border border-[#f4d68a]/60 bg-[#2a0b12]/60 object-cover p-2 shadow-[0_0_25px_rgba(244,214,138,0.18)]" />
              <Link href="/wedding-page" className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f5d77a] underline decoration-[#8a4f5d] underline-offset-4 hover:text-[#fff5d0]">
                Choose a side
              </Link>
            </div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-[#f5d77a]">Groom Side Invitation</p>
            <h1 className="mt-5 bg-gradient-to-r from-[#f9e6b1] via-[#d8b96d] to-[#f3d479] bg-clip-text font-display text-[clamp(38px,6vw,64px)] font-black leading-[0.96] tracking-[-0.06em] text-transparent">
              Shreyas &amp; Amisha
            </h1>
            <p className="mt-5 max-w-2xl text-base text-[#f1d7a0] md:text-lg">
              The family of Shreyas invites you to celebrate the wedding festivities with us.
            </p>
          </div>

          <div className="space-y-8 px-6 py-8 md:px-10 md:py-10">
            <section className="rounded-2xl border border-[#9b5c64]/60 bg-[rgba(32,9,14,0.5)] px-5 py-5 md:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f7d98d]">Venue</p>
                  <p className="mt-2 text-lg text-[#f0d6a3]">{venueName}</p>
                </div>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#f5d77a] underline decoration-[#8a4f5d] underline-offset-4 hover:text-[#fff5d0]">Open in Google Maps ↗</a>
              </div>
            </section>

            <section>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f7d98d]">Wedding functions</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {events.map((event) => (
                  <article key={event.name} className="rounded-2xl border border-[#9b5c64]/60 bg-[linear-gradient(180deg,rgba(56,16,20,0.9),rgba(28,8,12,0.88))] p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#d7b369]">{event.day}</p>
                    <h2 className="mt-3 font-display text-2xl font-bold text-[#f9e8b5]">{event.name}</h2>
                    <div className="mt-4 space-y-2 text-sm text-[#f0d6a3]">
                      <p><span className="text-[#d4b067]">Time:</span> {event.time}</p>
                      <p><span className="text-[#d4b067]">Hall:</span> {event.hall}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="flex flex-col gap-6 rounded-2xl border border-[#9b5c64]/60 bg-[linear-gradient(180deg,rgba(56,16,20,0.9),rgba(28,8,12,0.88))] p-5 md:p-6">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d7b369]">RSVP</p>
                <h2 className="mt-4 font-display text-3xl font-bold text-[#f9e8b5]">We would love to celebrate with you.</h2>
              </div>
              <a href={rsvpUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(135deg,#f3d57f,#d4a93d)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#2b0b12] transition-transform duration-200 hover:scale-[1.02]">
                RSVP
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
