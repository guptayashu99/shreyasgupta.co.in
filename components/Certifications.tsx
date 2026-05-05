'use client';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  expires?: string;
  credentialId: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Salesforce Certified Sales Cloud Consultant',
      issuer: 'Salesforce',
      issued: 'Feb 2026',
      credentialId: '7450870',
    },
    {
      id: '2',
      title: 'Scrum Master Certified (SMC)',
      issuer: 'Scrum Alliance',
      issued: 'Sep 2025',
      expires: 'Sep 2027',
      credentialId: '001726206',
    },
    {
      id: '3',
      title: 'Salesforce Certified Platform App Builder',
      issuer: 'Salesforce',
      issued: 'Jul 2025',
      credentialId: '6328042',
    },
    {
      id: '4',
      title: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      issued: 'Jan 2025',
      expires: 'Sep 2027',
      credentialId: '001726206',
    },
    {
      id: '5',
      title: 'Salesforce Certified AI Specialist',
      issuer: 'Salesforce',
      issued: 'Dec 2024',
      credentialId: '5475811',
    },
    {
      id: '6',
      title: 'Salesforce Certified Platform Developer I',
      issuer: 'Salesforce',
      issued: 'Sep 2024',
      credentialId: '4827368',
    },
    {
      id: '7',
      title: 'Salesforce Certified Associate',
      issuer: 'Salesforce',
      issued: 'Feb 2024',
      credentialId: '4104030',
    },
    {
      id: '8',
      title: 'Salesforce Certified Administrator (SCA)',
      issuer: 'Salesforce',
      issued: 'Sep 2022',
      credentialId: '2604496',
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
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
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
