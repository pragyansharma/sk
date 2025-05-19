import { Award, Users, BarChart, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Executive Summary</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
            Strategic and data-driven leader with 8+ years of experience in higher education consulting, student recruitment, digital outreach, and edtech product development.
            Proven record of increasing student enrollment, leading large-scale outreach events, and launching scalable digital solutions across global markets.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
            Strong business acumen backed by an MS in Business Analytics from Texas A&M University at Commerce and deep expertise in CRM, analytics, and cross-cultural communication.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
            Adept at building partnerships, developing go-to-market strategies, and leveraging data for institutional growth and engagement
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
            Known for team leadership, stakeholder collaboration, and high-impact decision-making in dynamic environments.
            </p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-12">Key Achievements</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
              <Award size={24} />
            </div>
            <p className="text-center text-gray-700">Co-founded a language learning app with 25,000+ downloads in 5 months</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
              <BarChart size={24} />
            </div>
            <p className="text-center text-gray-700">Drove 20%+ annual growth in student enrollments through targeted marketing</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
              <Users size={24} />
            </div>
            <p className="text-center text-gray-700">Organized large-scale education event with 2,000+ participants and 15+ universities</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
              <Globe size={24} />
            </div>
            <p className="text-center text-gray-700">Built strategic alliances with universities in the U.S. and India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;