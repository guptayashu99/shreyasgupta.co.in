'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="section-padding bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Shreyas
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent"> Gupta</span>
            </h1>
            <p className="text-2xl text-cyan-400 mb-4 font-semibold">
              Agile Delivery Professional | Scrum Master
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Salesforce GTM Systems | Driving Cross-Functional Execution & Automation
            </p>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              With 5 years of experience in Agile delivery and Salesforce GTM systems,
              I focus on driving reliable, scalable execution for customer-facing teams.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20">
              <Image
                src="/profile.jpg"
                alt="Shreyas Gupta"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
