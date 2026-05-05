'use client';

interface Recommendation {
  id: string;
  name: string;
  title: string;
  relationship: string;
  date: string;
  text: string;
}

export default function Recommendations() {
  const recommendations: Recommendation[] = [
    {
      id: '1',
      name: 'Swati Banerjee',
      title: 'Enterprise Salesforce Leader | Distribution Technology Strategy | Platform Governance & Digital Transformation | Financial Services',
      relationship: 'Managed Shreyas directly · Lincoln Financial',
      date: 'December 2024',
      text: "I had the pleasure of working closely with Shreyas during his time at LTI Mindtree, supporting Lincoln Financial. As a Quality Engineer with exceptional Selenium expertise, Shreyas consistently demonstrated a deep understanding of Seismic's and Salesforce's complex ecosystems, ensuring their stability through comprehensive automated and manual testing.\n\nShreyas' ability to design and implement robust Selenium test frameworks, coupled with his keen attention to detail and drive to exceed expectations, significantly improved our development cycle. His efforts reduced regression testing time and enhanced overall application quality. He was proactive in identifying potential issues early, offering practical solutions, and collaborating seamlessly with developers, admins, and other stakeholders.\n\nBeyond his technical skills, Shreyas is a true team player. He willingly shares knowledge, mentors team members, and fosters a culture of continuous improvement. His commitment to quality, sharp problem-solving skills, and unwavering dedication make him an invaluable asset to any organization.\n\nI highly recommend Shreyas to any team seeking a QA expert with strong proficiency in Seismic, Salesforce, and Selenium automation. His contributions will undoubtedly elevate quality and efficiency in any Salesforce implementation.",
    },
    {
      id: '2',
      name: 'Kathi-Lyn Coker',
      title: 'VP, Marketing and Sales Technology Enablement @ Lincoln Financial | Driving Sales Team Efficiencies',
      relationship: 'Senior to Shreyas · Lincoln Financial',
      date: 'November 2024',
      text: 'I had the privilege of working with Shreyas for three years, during which he consistently took ownership of his projects and went above and beyond his role. He mastered our products, meticulously documented processes, and provided valuable business insights. More than just a fantastic tester, Shreyas was a true business partner whose dedication and strategic input elevated our team\'s success.',
    },
  ];

  return (
    <section id="recommendations" className="section-padding bg-[#0a0e27] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-cyan-400">Recommendations</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {recommendations.map((rec) => (
            <div key={rec.id} className="card-dark p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                  {rec.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{rec.name}</h3>
                  <p className="text-sm text-gray-400 leading-snug mt-0.5">{rec.title}</p>
                  <p className="text-xs text-cyan-400/70 mt-1">{rec.date} · {rec.relationship}</p>
                </div>
              </div>
              <div className="space-y-4 border-l-2 border-cyan-500/30 pl-5">
                {rec.text.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
