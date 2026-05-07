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
}

function CertBadge({ file, title }: { file: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`/certification-badges/${file}`}
        alt={`${title} badge`}
        width={48}
        height={48}
        className="object-contain"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Salesforce Certified Sales Cloud Consultant',
      issuer: 'Salesforce',
      issued: 'Feb 2026',
      credentialId: '7450870',
      badgeFile: 'Salesforce Certified Sales Cloud Consultant.png',
    },
    {
      id: '2',
      title: 'Scrum Master Certified (SMC)',
      issuer: 'Scrum Alliance',
      issued: 'Sep 2025',
      expires: 'Sep 2027',
      credentialId: '001726206',
      badgeFile: 'Scrum Master Certified (SMC).png',
    },
    {
      id: '3',
      title: 'Salesforce Certified Platform App Builder',
      issuer: 'Salesforce',
      issued: 'Jul 2025',
      credentialId: '6328042',
      badgeFile: 'Salesforce Certified Platform App Builder.png',
    },
    {
      id: '4',
      title: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      issued: 'Jan 2025',
      expires: 'Sep 2027',
      credentialId: '001726206',
      badgeFile: 'Certified Scrum Product Owner (CSPO).png',
    },
    {
      id: '5',
      title: 'Salesforce Certified AI Specialist',
      issuer: 'Salesforce',
      issued: 'Dec 2024',
      credentialId: '5475811',
      badgeFile: 'Salesforce Certified AI Specialist.png',
    },
    {
      id: '6',
      title: 'Salesforce Certified Platform Developer I',
      issuer: 'Salesforce',
      issued: 'Sep 2024',
      credentialId: '4827368',
      badgeFile: 'Salesforce Certified Platform Developer I.png',
    },
    {
      id: '7',
      title: 'Salesforce Certified Associate',
      issuer: 'Salesforce',
      issued: 'Feb 2024',
      credentialId: '4104030',
      badgeFile: 'Salesforce Certified Associate.png',
    },
    {
      id: '8',
      title: 'Salesforce Certified Administrator (SCA)',
      issuer: 'Salesforce',
      issued: 'Sep 2022',
      credentialId: '2604496',
      badgeFile: 'Salesforce Certified Administrator (SCA).png',
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
                <div className="flex items-start space-x-3 mb-3">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600">
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
                  <div className="flex justify-between pt-2 border-t border-[#2a3050]">
                    <span>Credential ID:</span>
                    <span className="font-mono text-xs text-cyan-400/70">{cert.credentialId}</span>
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
