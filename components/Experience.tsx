'use client';

import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0d1235] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-8">
              <div className="card-dark p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/company-logos/${exp.logoFile}`}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-cyan-300 font-medium text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="h-8 flex justify-center">
                  <div className="w-1 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
