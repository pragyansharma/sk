import { Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              Shraddha Khadka
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-6">
              Product Manager
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
            Strategic Enrollment & Marketing Leader | EdTech Entrepreneur | East Texas A&M Alum | CRM & Digital Campaign Expert | MS in Business Analytics (STEM)

            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://www.linkedin.com/in/shraddha-khadka-34a78825a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded-md transition-colors"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </a>
              <a 
                href="/ShraddhaCV.pdf"
                download
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-4 py-2 rounded-md transition-colors"
              >
                <span>Download Resume</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail size={16} className="text-blue-600" />
                <span>Shraddhakhadka2020@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} className="text-blue-600" />
                <span>(419) 685-8510</span>
              </div>
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dallas, Texas</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/shraddha-profle.jpeg" 
                alt="Shraddha Khadka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;