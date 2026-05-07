'use client';

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

const certifications = [
  { name: 'Salesforce Certified Sales Cloud Consultant', issuer: 'Salesforce', date: 'Feb 2026', id: '7450870' },
  { name: 'Scrum Master Certified (SMC)', issuer: 'Scrum Alliance', date: 'Sep 2025', expires: 'Sep 2027', id: '001726206' },
  { name: 'Salesforce Certified Platform App Builder', issuer: 'Salesforce', date: 'Jul 2025', id: '6328042' },
  { name: 'Certified Scrum Product Owner (CSPO)', issuer: 'Scrum Alliance', date: 'Jan 2025', expires: 'Sep 2027', id: '001726206' },
  { name: 'Salesforce Certified Agentforce Specialist', issuer: 'Salesforce', date: 'Dec 2024', id: '5475811' },
  { name: 'Salesforce Certified Platform Developer', issuer: 'Salesforce', date: 'Sep 2024', id: '4827368' },
  { name: 'Salesforce Certified Platform Foundations', issuer: 'Salesforce', date: 'Feb 2024', id: '4104030' },
  { name: 'Salesforce Certified Platform Administrator', issuer: 'Salesforce', date: 'Sep 2022', id: '2604496' },
];

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
              <div className="skill-group">
                <strong>Delivery &amp; Agile Leadership</strong>
                <p>Delivery Leadership &amp; Ownership · Scrum Master · Release Planning &amp; Delivery Accountability · Sprint Planning &amp; Roadmap Management · Cross-Team Coordination &amp; Stakeholder Alignment · Risk Management &amp; Dependency Resolution · Program &amp; Portfolio Delivery</p>
              </div>
              <div className="skill-group">
                <strong>Salesforce &amp; GTM</strong>
                <p>Salesforce GTM Platform Delivery · Salesforce Sales Cloud · Salesforce Financial Services Cloud · Salesforce Agentforce · Salesforce Integrations (Seismic) · Apex Programming</p>
              </div>
              <div className="skill-group">
                <strong>Automation Architecture &amp; Quality</strong>
                <p>Automation Strategy &amp; Architecture · Framework Design &amp; Ownership · Playwright (POC Lead) · Selenium Java · Regression &amp; Release Validation · Quality Risk Identification · CI/CD Integration</p>
              </div>
              <div className="skill-group">
                <strong>Tools &amp; AI</strong>
                <p>JIRA &amp; Azure DevOps · AI Agents (ChatGPT, Copilot) · Python Scripting &amp; Tooling · Provar &amp; VS Code · TestRail</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2>Professional Experience</h2>

            <div className="job">
              <div className="job-header">
                <div>
                  <h3>Senior IT Software Engineer</h3>
                  <p className="job-company">UKG (Ultimate Kronos Group)</p>
                  <p className="job-location">Noida, Uttar Pradesh, India · Hybrid</p>
                </div>
                <div>
                  <p className="job-period">Dec 2025 – Present</p>
                  <p className="job-duration">6 months</p>
                </div>
              </div>
              <p className="job-desc">Scrum Master for the GTM team, working across delivery, automation strategy, and tooling on Salesforce Lead-to-Opportunity workflows.</p>
              <ul>
                <li>Run delivery as Scrum Master — sprint planning, backlog management, dependency tracking, and making sure the team ships what it commits to</li>
                <li>Own the GTM automation approach — decide what gets automated and in what order, and build the frameworks the team works from</li>
                <li>Sit in requirements discussions when there are gaps, working through feasibility with engineering before stories are finalised</li>
                <li>Built AI agents on ChatGPT and Copilot to cut down team overhead; wrote a Python tool to migrate the full test suite from TestRail to Azure DevOps</li>
                <li>Leading a Playwright POC to evaluate whether it's a better fit for the pipeline than the current framework</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <div>
                  <h3>IT Software Engineer</h3>
                  <p className="job-company">UKG (Ultimate Kronos Group)</p>
                  <p className="job-location">Noida, Uttar Pradesh, India · Hybrid</p>
                </div>
                <div>
                  <p className="job-period">Dec 2024 – Dec 2025</p>
                  <p className="job-duration">1 year</p>
                </div>
              </div>
              <p className="job-desc">Worked across automation, delivery, and solutioning for the GTM team — building the technical and delivery habits that carried into the senior role.</p>
              <ul>
                <li>Took part in backlog refinement with Product, BAs, and Engineering to make sure stories were clear and ready to build before sprint start</li>
                <li>Built and maintained UI and API automation across GTM workflows, which helped stabilise releases and reduced the manual testing load</li>
                <li>Got into solutioning conversations with developers regularly — useful for catching scope gaps early and keeping estimates realistic</li>
                <li>Flagged risks and blockers early in sprints rather than waiting for them to surface at the wrong moment</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <div>
                  <h3>Quality Engineer</h3>
                  <p className="job-company">LTIMindtree</p>
                  <p className="job-location">Bengaluru, Karnataka, India · Hybrid</p>
                </div>
                <div>
                  <p className="job-period">Nov 2022 – Dec 2024</p>
                  <p className="job-duration">2 years 2 months</p>
                </div>
              </div>
              <p className="job-desc">Quality Engineer on Salesforce Sales Cloud and Financial Services Cloud for Lincoln Financial, working across automation, delivery, and GTM workflows integrated with Seismic.</p>
              <ul>
                <li>Responsible for quality across Salesforce Sales Cloud and FSC releases — multiple feature tracks running at the same time, all needing to be release-ready</li>
                <li>Built a 300+ test suite in Selenium Java covering UI and integration flows; made a visible difference in post-release defect rates</li>
                <li>Involved early in requirements reviews with developers, BAs, and stakeholders — catching issues before they made it into builds saved a lot of rework</li>
                <li>Plugged into CI/CD pipelines for environment validation and was a regular part of sprint ceremonies from planning through to retros</li>
              </ul>
            </div>

            <div className="job">
              <div className="job-header">
                <div>
                  <h3>Test Engineer</h3>
                  <p className="job-company">Mindtree</p>
                  <p className="job-location">Pune District, Maharashtra, India · Hybrid</p>
                </div>
                <div>
                  <p className="job-period">Jun 2021 – Nov 2022</p>
                  <p className="job-duration">1 year 6 months</p>
                </div>
              </div>
              <p className="job-desc">Started as a Test Engineer on Salesforce Sales Cloud and Marketing Cloud, picking up the fundamentals of quality, automation, and Agile delivery.</p>
              <ul>
                <li>Ran functional and regression testing across Salesforce releases — keeping things stable when configuration was changing frequently</li>
                <li>Worked with developers, BAs, and stakeholders to understand workflows and catch gaps early rather than discovering them mid-sprint</li>
                <li>Built reusable automation scripts for Salesforce flows, which reduced manual effort and made release cycles more consistent</li>
                <li>Contributed to sprint planning and backlog discussions from a quality angle — flagging what was testable, what wasn't, and what needed more clarity</li>
              </ul>
            </div>
          </section>

          {/* Certifications + Education */}
          <div className="bottom-grid">
            <section>
              <h2>Certifications</h2>
              {certifications.map((cert) => (
                <div key={cert.id + cert.date} className="cert-item">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-meta">
                    {cert.issuer} · Issued {cert.date}{cert.expires ? ` · Expires ${cert.expires}` : ''} · ID: {cert.id}
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2>Education</h2>
              <div className="edu-item">
                <div className="edu-degree">Bachelor of Technology</div>
                <div className="edu-school">Electrical, Electronics &amp; Communications Engineering</div>
                <div className="edu-school">Manipal University Jaipur</div>
                <div className="edu-meta">Jul 2017 – Jun 2021 · GPA 7.84</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Senior Secondary — Science</div>
                <div className="edu-school">Indraprastha International School</div>
                <div className="edu-meta">2015 – 2017 · 75%</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Secondary Education</div>
                <div className="edu-school">Indraprastha International School</div>
                <div className="edu-meta">2012 – 2015 · GPA 9.4</div>
              </div>
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
