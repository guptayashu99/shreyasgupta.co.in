'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shreyas Gupta</h3>
            <p className="text-gray-400">
              Agile Delivery Professional | Scrum Master | Salesforce GTM Systems.
              Driving cross-functional execution and automation for reliable, scalable outcomes.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#certifications" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#recommendations" className="hover:text-white transition-colors">Recommendations</a></li>
              <li><a href="#resume" className="hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="font-semibold text-white">Email:</span>
                <br />
                <a href="mailto:work@shreyasgupta.co.in" className="text-blue-400 hover:text-blue-300">
                  work@shreyasgupta.co.in
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Phone:</span>
                <br />
                <a href="tel:+919560483058" className="text-blue-400 hover:text-blue-300">
                  +91 9560483058
                </a>
              </p>
              <p>
                <span className="font-semibold text-white">Location:</span>
                <br />
                <span>Delhi, India</span>
              </p>
              <div className="pt-2 border-t border-gray-700 mt-4">
                <p className="font-semibold text-white mb-2">Follow</p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/shreyasgupta99/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    title="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href="https://www.salesforce.com/trailblazer/shreyasgupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    title="Salesforce Trailblazer"
                  >
                    Trailblazer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Shreyas Gupta. All rights reserved.{' '}
            <a href="https://github.com/guptayashu99/shreyasgupta.co.in" className="text-blue-400 hover:text-blue-300">
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
