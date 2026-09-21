'use client';

import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d1235] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          <span className="text-cyan-400">Education</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item) => (
            <div key={item.id} className="card-dark p-6 flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                <p className="text-cyan-400 font-medium mt-0.5">{item.institution}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                  <span>{item.period}</span>
                  <span className="text-gray-600">·</span>
                  <span>{item.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
