import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

interface Job {
  id: number;
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  projects: {
    title: string;
    description: string;
    responsibilities: string[];
  }[];
}

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };

  const jobs: Job[] = [
    {
      id: 1,
      company: 'BHASA TECH INC.',
      title: 'Product Manager & Co-Founder',
      period: 'Jan 2025 – Present',
      location: 'Dallas, TX',
      description: 'Leading product strategy and development for an innovative language learning platform.',
      projects: [
        {
          title: 'Language Learning App Development',
          description: 'The company needed to launch a language learning app targeting international users. The goal was to drive rapid user adoption and revenue growth.',
          responsibilities: [
            'Defined product vision, roadmap, and growth strategy based on user research and market trends.',
            'Conducted A/B tests and applied analytics to boost UI/UX, increasing retention by 25% and engagement by 40%.',
            'Executed marketing campaigns resulting in 25,000+ downloads and 2M+ ad impressions within 5 months.',
            'Led monetization strategy, generating over $7,000 in ad revenue in the first month.',
            'Managed a cross-functional team of developers, designers, and marketers to execute go-to-market strategy.',
            'Leveraged SQL and analytics tools to track KPIs, optimize product features, and inform decisions.'
          ]
        },
        {
          title: 'User Retention and Monetization Strategy',
          description: 'Bhasha Tech aimed to improve retention and implement monetization through in-app ads and subscriptions.',
          responsibilities: [
            'Conducted A/B tests and applied analytics to boost UI/UX, increasing retention by 25% and engagement by 40%.',
            'Executed marketing campaigns resulting in 25,000+ downloads and 2M+ ad impressions within 5 months.',
            'Led monetization strategy, generating over $7,000 in ad revenue in the first month.'
          ]
        }
      ]
    },
    {
      id: 2,
      company: 'UNITED ACADEMY HIGHER SECONDARY SCHOOL',
      title: 'Assistant Director of Admission',
      period: 'March 2023 – August 2023',
      location: 'Lalitpur, Nepal',
      description: 'Led student recruitment and marketing initiatives for academic intake.',
      projects: [
        {
          title: 'Student Recruitment and Enrollment',
          description: 'Managed comprehensive student recruitment campaign for 2023 academic intake.',
          responsibilities: [
            'Led student recruitment outreach, branding, and digital marketing efforts for the 2023 academic intake.',
            'Collaborated directly with school founders and the admissions/marketing teams to align strategy and execution.',
            'Engaged with over 5,000 prospective students, contributing to a successful 3,000-student enrollment for the academic year.',
            'Strengthened institutional presence by coordinating visits to external schools and organizing information sessions.'
          ]
        }
      ]
    },
    {
      id: 3,
      company: 'STUDENT AFFAIRS PVT. LTD.',
      title: 'Founder & Director',
      period: '2014 – 2022',
      location: 'Kathmandu, Nepal',
      description: 'Founded and scaled an educational consultancy serving 4,000+ students over 8 years.',
      projects: [
        {
          title: 'Business Expansion and Enrollment Growth',
          description: 'The company aimed to increase student outreach and scale enrollment services across Nepal.',
          responsibilities: [
            'Founded and scaled an educational consultancy serving 4,000+ students over 8 years.',
            'Designed recruitment strategies and marketing campaigns, achieving 500+ enrollments annually.',
            'Conducted outreach programs and seminars in 50+ high schools across Nepal.'
          ]
        },
        {
          title: 'International University Partnerships',
          description: 'To increase student placements, the company sought to build partnerships with global universities.',
          responsibilities: [
            'Organized "Dream, Act, Achieve" event with 2,000+ participants and international university reps.',
            'Built partnerships with U.S. and Indian institutions to streamline admission pipelines.',
            'Led cross-cultural communication, stakeholder meetings, and business development initiatives.'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Professional Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className={`mb-12 relative ${index === jobs.length - 1 ? '' : ''}`}
              >
                <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div 
                  className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ${expandedJob === job.id ? 'shadow-md' : ''}`}
                >
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-start"
                    onClick={() => toggleExpand(job.id)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                      <div className="text-blue-600 font-medium mb-1">{job.company}</div>
                      <div className="text-gray-600 text-sm mb-2">{job.period} • {job.location}</div>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <div>
                      {expandedJob === job.id ? (
                        <ChevronUp size={20} className="text-blue-600" />
                      ) : (
                        <ChevronDown size={20} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 pt-2">
                      {job.projects.map((project, idx) => (
                        <div key={idx} className={`${idx > 0 ? 'mt-6' : ''}`}>
                          <h4 className="text-lg font-medium text-gray-800 mb-2">{project.title}</h4>
                          <p className="text-gray-600 mb-3 text-sm italic">{project.description}</p>
                          <ul className="list-disc pl-5 text-gray-700 space-y-1">
                            {project.responsibilities.map((resp, rIdx) => (
                              <li key={rIdx}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;