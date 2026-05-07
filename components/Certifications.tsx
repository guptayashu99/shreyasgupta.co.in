'use client';

import { useState } from 'react';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId: string;
  badgeFile: string;
  verifyUrl: string;
}

function CertBadge({ file, title }: { file: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/certification-badges/${file}`}
        alt={`${title} badge`}
        width={72}
        height={72}
        className="object-contain"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className="w-[72px] h-[72px] rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
      <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );
}

const SF_VERIFY = 'https://trailhead.salesforce.com/credentials/verification';
const SA_VERIFY = 'https://www.scrumalliance.org/community/profile/shreyasgupta';

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Salesforce Certified Sales Cloud Consultant',
      issuer: 'Salesforce',
      issued: 'Feb 2026',
      credentialId: '7450870',
      badgeFile: 'Salesforce Certified Sales Cloud Consultant.png',
      verifyUrl: SF_VERIFY,
    },
    {
      id: '2',
      title: 'Scrum Master Certified (SMC)',
      issuer: 'Scrum Alliance',
      issued: 'Sep 2025',
      expires: 'Sep 2027',
      credentialId: '001726206',
      badgeFile: 'Scrum Master Certified (SMC).png',
      verifyUrl: SA_VERIFY,
    },
    {
      id: '3',
      title: 'Salesforce Certified Platform App Builder',
      issuer: 'Salesforce',
      issued: 'Jul 2025',
      credentialId: '6328042',
      badgeFile: 'Salesforce Certified Platform App Builder.png',
      verifyUrl: SF_VERIFY,
    },
    {
      id: '4',
      title: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      issued: 'Jan 2025',
      expires: 'Sep 2027',
      credentialId: '001726206',
      badgeFile: 'Certified Scrum Product Owner (CSPO).png',
      verifyUrl: SA_VERIFY,
    },
    {
      id: '5',
      title: 'Salesforce Certified Agentforce Specialist',
      issuer: 'Salesforce',
      issued: 'Dec 2024',
      credentialId: '5475811',
      badgeFile: 'Salesforce Certified Agentforce Specialist.png',
      verifyUrl: SF_VERIFY,
    },
    {
      id: '6',
      title: 'Salesforce Certified Platform Developer',
      issuer: 'Salesforce',
      issued: 'Sep 2024',
      credentialId: '4827368',
      badgeFile: 'Salesforce Certified Platform Developer.png',
      verifyUrl: SF_VERIFY,
    },
    {
      id: '7',
      title: 'Salesforce Certified Platform Foundations',
      issuer: 'Salesforce',
      issued: 'Feb 2024',
      credentialId: '4104030',
      badgeFile: 'Salesforce Certified Platform Foundations.png',
      verifyUrl: SF_VERIFY,
    },
    {
      id: '8',
      title: 'Salesforce Certified Platform Administrator',
      issuer: 'Salesforce',
      issued: 'Sep 2022',
      credentialId: '2604496',
      badgeFile: 'Salesforce Certified Platform Administrator.png',
      verifyUrl: SF_VERIFY,
    },
  ];

  return (
    <section className="section-padding bg-[#0a0e27]">
      <div className="container-custom" id="certifications">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-cyan-400">Certifications</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.id} className="card-dark p-6">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="flex-shrink-0">
                    <CertBadge file={cert.badgeFile} title={cert.title} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-cyan-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Issued:</span>
                    <span className="font-medium text-gray-300">{cert.issued}</span>
                  </div>
                  {cert.expires && (
                    <div className="flex justify-between">
                      <span>Expires:</span>
                      <span className="font-medium text-gray-300">{cert.expires}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t border-[#2a3050]">
                    <span className="font-mono text-xs text-cyan-400/70">{cert.credentialId}</span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-1"
                    >
                      Verify
                      <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
