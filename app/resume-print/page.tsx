'use client';

import { experiences, certifications, education, skillGroups } from '@/lib/data';

const css = `
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10pt;
    color: #1a1a1a;
    background: #e5e7eb;
  }

  .print-btn {
    position: fixed;
    top: 16px;
    right: 16px;
    padding: 10px 22px;
    background: #0f172a;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    z-index: 999;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }

  @media print {
    .print-btn { display: none !important; }
    body { background: white; }
    .resume { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; }
    @page { size: A4; margin: 10mm 14mm; }
    .job { page-break-inside: avoid; }
    .bottom-grid { page-break-inside: avoid; }
  }

  .resume {
    max-width: 210mm;
    margin: 24px auto;
    background: white;
    box-shadow: 0 4px 24px rgba(0,0,0,0.12);
  }

  /* ── Header ── */
  .header {
    background: #0f172a;
    color: white;
    padding: 22px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }

  .header-info { flex: 1; }

  .header-info h1 {
    font-size: 22pt;
    font-weight: 700;
    letter-spacing: -0.3px;
    margin-bottom: 3px;
  }

  .header-title {
    font-size: 9pt;
    color: #22d3ee;
    font-weight: 600;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .contact-row {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    font-size: 8pt;
    color: #cbd5e1;
  }

  .photo {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center top;
    border: 2px solid #22d3ee;
    flex-shrink: 0;
  }

  /* ── Body ── */
  .body { padding: 18px 26px; }

  section { margin-bottom: 14px; }

  h2 {
    font-size: 8.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #0f172a;
    border-bottom: 1.5px solid #22d3ee;
    padding-bottom: 3px;
    margin-bottom: 8px;
  }

  /* ── Summary ── */
  .summary p {
    font-size: 9pt;
    line-height: 1.55;
    color: #374151;
  }

  /* ── Skills ── */
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 7px 24px;
  }

  .skill-group strong {
    font-size: 8.5pt;
    color: #0f172a;
    display: block;
    margin-bottom: 2px;
  }

  .skill-group p {
    font-size: 8pt;
    color: #4b5563;
    line-height: 1.45;
  }

  /* ── Experience ── */
  .job { margin-bottom: 11px; }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 2px;
  }

  .job h3 {
    font-size: 10pt;
    font-weight: 700;
    color: #0f172a;
  }

  .job-company {
    font-size: 8.5pt;
    color: #0369a1;
    font-weight: 600;
    margin-bottom: 1px;
  }

  .job-location {
    font-size: 8pt;
    color: #6b7280;
  }

  .job-period {
    font-size: 8pt;
    color: #374151;
    font-weight: 600;
    white-space: nowrap;
    text-align: right;
    flex-shrink: 0;
  }

  .job-duration {
    font-size: 7.5pt;
    color: #9ca3af;
    text-align: right;
  }

  .job-desc {
    font-size: 8.5pt;
    color: #4b5563;
    font-style: italic;
    margin: 4px 0;
  }

  .job ul {
    list-style: none;
    padding-left: 0;
  }

  .job ul li {
    font-size: 8.5pt;
    color: #374151;
    line-height: 1.45;
    margin-bottom: 3px;
    padding-left: 14px;
    position: relative;
  }

  .job ul li::before {
    content: '▸';
    color: #22d3ee;
    position: absolute;
    left: 0;
    font-size: 8pt;
    line-height: 1.45;
  }

  /* ── Bottom grid ── */
  .bottom-grid {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 20px;
    margin-bottom: 0;
  }

  /* ── Certifications ── */
  .cert-item { margin-bottom: 5px; }

  .cert-name {
    font-size: 8.5pt;
    font-weight: 600;
    color: #0f172a;
    line-height: 1.3;
  }

  .cert-meta {
    font-size: 7.5pt;
    color: #6b7280;
  }

  /* ── Education ── */
  .edu-item { margin-bottom: 7px; }

  .edu-degree {
    font-size: 8.5pt;
    font-weight: 700;
    color: #0f172a;
  }

  .edu-school {
    font-size: 8pt;
    color: #374151;
    line-height: 1.35;
  }

  .edu-meta {
    font-size: 7.5pt;
    color: #6b7280;
  }

  /* ── Footer ── */
  .resume-footer {
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    padding: 6px 26px;
    text-align: center;
    font-size: 7pt;
    color: #9ca3af;
  }
`;


export default function ResumePrint() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <button className="print-btn" onClick={() => window.print()}>
        ↓ Save as PDF
      </button>

      <div className="resume">

        {/* Header */}
        <header className="header">
          <div className="header-info">
            <h1>Shreyas Gupta</h1>
            <p className="header-title">
              Agile Delivery Professional · Scrum Master · Salesforce GTM Systems · Automation Architecture · AI Tooling
            </p>
            <div className="contact-row">
              <span>✉ work@shreyasgupta.co.in</span>
              <span>✆ +91 95604 83058</span>
              <span>⊙ Delhi, India</span>
              <span>linkedin.com/in/shreyasgupta99</span>
              <span>salesforce.com/trailblazer/shreyasgupta</span>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.webp" alt="Shreyas Gupta" className="photo" />
        </header>

        <div className="body">

          {/* Professional Summary */}
          <section className="summary">
            <h2>Professional Summary</h2>
            <p>
              Scrum Master and Agile Delivery Professional with 5+ years working in Salesforce GTM systems. Currently at UKG,
              running delivery for the GTM team while staying hands-on across the full lifecycle — requirements, solutioning,
              automation strategy, and release. Own the GTM automation approach end-to-end, deciding what gets automated and
              building the frameworks the team works from. Background spans Selenium Java, Playwright (POC lead), AI agents
              (ChatGPT, Copilot), and Python tooling. The combination of technical depth and delivery ownership is what makes
              engineering conversations productive and sprint commitments realistic. Working towards Delivery Manager and
              Program Lead roles.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2>Core Competencies</h2>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.label} className="skill-group">
                  <strong>{group.label}</strong>
                  <p>{group.skills.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2>Professional Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="job">
                <div className="job-header">
                  <div>
                    <h3>{exp.title}</h3>
                    <p className="job-company">{exp.companyFull}</p>
                    <p className="job-location">{exp.location}</p>
                  </div>
                  <div>
                    <p className="job-period">{exp.period}</p>
                    <p className="job-duration">{exp.duration}</p>
                  </div>
                </div>
                <p className="job-desc">{exp.description}</p>
                <ul>
                  {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            ))}
          </section>

          {/* Certifications + Education */}
          <div className="bottom-grid">
            <section>
              <h2>Certifications</h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-item">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-meta">
                    {cert.issuer} · Issued {cert.issued}{cert.expires ? ` · Expires ${cert.expires}` : ''} · ID: {cert.credentialId}
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2>Education</h2>
              {education.map((item) => (
                <div key={item.id} className="edu-item">
                  <div className="edu-degree">{item.degree}</div>
                  <div className="edu-school">{item.institution}</div>
                  <div className="edu-meta">{item.period} · {item.grade}</div>
                </div>
              ))}
            </section>
          </div>

        </div>

        <div className="resume-footer">
          shreyasgupta.co.in · work@shreyasgupta.co.in · +91 95604 83058
        </div>

      </div>
    </>
  );
}
