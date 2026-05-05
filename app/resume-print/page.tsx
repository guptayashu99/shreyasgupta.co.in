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
    padding-left: 13px;
  }

  .job ul li {
    font-size: 8.5pt;
    color: #374151;
    line-height: 1.45;
    margin-bottom: 2px;
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
  { name: 'Salesforce Certified AI Specialist', issuer: 'Salesforce', date: 'Dec 2024', id: '5475811' },
  { name: 'Salesforce Certified Platform Developer I', issuer: 'Salesforce', date: 'Sep 2024', id: '4827368' },
  { name: 'Salesforce Certified Associate', issuer: 'Salesforce', date: 'Feb 2024', id: '4104030' },
  { name: 'Salesforce Certified Administrator (SCA)', issuer: 'Salesforce', date: 'Sep 2022', id: '2604496' },
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
              Agile Delivery Professional · Scrum Master · Salesforce GTM Systems · Driving Cross-Functional Execution &amp; Automation
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
          <img src="/profile.jpg" alt="Shreyas Gupta" className="photo" />
        </header>

        <div className="body">

          {/* Professional Summary */}
          <section className="summary">
            <h2>Professional Summary</h2>
            <p>
              Agile Delivery Professional and Scrum Master with 5 years of experience across Salesforce and GTM systems,
              focused on driving reliable and scalable execution for customer-facing teams. At UKG, drives Salesforce-led GTM
              initiatives for Sales Enablement and Opportunity Management, partnering with Product, Engineering, and business
              stakeholders to plan delivery, manage backlogs, and keep releases predictable. Operates at the intersection of
              planning and execution — managing dependencies, identifying risks early, and coordinating across teams to ensure
              customer-facing commitments are consistently met. Leverages automation as part of the delivery strategy to improve
              release confidence and enable faster, stable deployments. Building toward delivery and program management roles
              to own end-to-end execution and scale Salesforce GTM systems effectively.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2>Core Competencies</h2>
            <div className="skills-grid">
              <div className="skill-group">
                <strong>Delivery &amp; Agile Leadership</strong>
                <p>Agile Delivery &amp; Execution · Scrum Master · Release Planning &amp; Delivery Accountability · Sprint Planning &amp; Backlog Grooming · Cross-Team Coordination &amp; Stakeholder Alignment · Requirement Understanding &amp; Validation</p>
              </div>
              <div className="skill-group">
                <strong>Salesforce &amp; GTM</strong>
                <p>Salesforce GTM Platform Delivery · Salesforce Sales Cloud · Salesforce Financial Services Cloud · Salesforce AgentForce · Salesforce Integrations (Seismic) · Apex Programming</p>
              </div>
              <div className="skill-group">
                <strong>Quality &amp; Automation</strong>
                <p>Test Automation Strategy &amp; Framework Design · Regression &amp; Release Validation · Quality Risk Identification</p>
              </div>
              <div className="skill-group">
                <strong>Tools &amp; AI</strong>
                <p>JIRA &amp; Azure DevOps · Generative AI &amp; Agentic Systems · Automation Tools (Provar, VS Code)</p>
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
              <p className="job-desc">Driving Salesforce-led GTM delivery across Lead-to-Opportunity workflows as Scrum Master.</p>
              <ul>
                <li>Serve as Scrum Master for GTM team, ensuring predictable sprint execution and steady delivery cadence</li>
                <li>Work closely with business stakeholders during refinement to understand unclear requirements and turn them into actionable, engineering-ready user stories</li>
                <li>Partner with Engineering on solution approaches, trade-offs, and realistic timelines, staying hands-on to assess implementation complexity</li>
                <li>Drive automation as part of the delivery process to improve release confidence and support stable, high-quality releases</li>
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
              <p className="job-desc">Worked on Salesforce-based GTM systems, contributing across automation, engineering, and Agile delivery for Lead-to-Opportunity workflows.</p>
              <ul>
                <li>Collaborated with Product, Business Analysts, and Engineering on backlog refinement to ensure user stories were clear and execution-ready</li>
                <li>Built and maintained UI and API automation to support stable releases, improve test coverage, and reduce manual effort during delivery cycles</li>
                <li>Gained hands-on experience with implementation and solutioning, working closely with developers to understand system behavior and support better estimation</li>
                <li>Actively identified risks, resolved blockers, and supported smooth sprint execution across the team</li>
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
              <p className="job-desc">Supported Agile delivery teams on Salesforce Sales Cloud and Financial Services Cloud workflows, with integrated platforms including Seismic.</p>
              <ul>
                <li>Owned functional and regression validation for multiple Salesforce features across Sales and Financial Services use cases, ensuring release-ready quality</li>
                <li>Built and maintained 300+ automated test cases across UI and integration flows, reducing post-deployment issues and improving release stability</li>
                <li>Collaborated with Salesforce developers, BAs, and stakeholders to review requirements and provide early quality risk feedback</li>
                <li>Supported CI/CD pipelines by validating builds across environments; participated in sprint planning, backlog grooming, and retrospectives</li>
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
              <p className="job-desc">Worked on Agile delivery teams supporting Salesforce Sales Cloud and Marketing Cloud applications.</p>
              <ul>
                <li>Executed functional and regression testing across Salesforce releases to maintain stability as new configurations were introduced</li>
                <li>Collaborated with developers, BAs, and stakeholders to clarify Salesforce workflows and identify gaps early in the delivery cycle</li>
                <li>Contributed to automation and repeatable validation for Salesforce workflows to reduce manual overhead and support faster releases</li>
                <li>Participated in sprint planning, backlog discussions, and retrospectives with quality and feasibility inputs</li>
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
