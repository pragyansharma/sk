import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Shraddha Khadka</h3>
            <p className="mb-4">
              Product Manager with 8+ years of experience in higher education consulting, 
              student recruitment, and edtech product development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <button 
                onClick={scrollToContact}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </button>
              <a 
                href="tel:+14196858510"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <button 
                onClick={scrollToContact}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                <Mail size={16} />
                <span>Shraddhakhadka2020@gmail.com</span>
              </button>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(419) 685-8510</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dallas, Texas</span>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shraddha Khadka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;