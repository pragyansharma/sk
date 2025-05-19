import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { Play, Image, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'image';
  videoUrl?: string;
  imageUrl?: string;
  achievements: string[];
  tags: string[];
  details?: string;
}

// Move ProjectCard outside of the Projects component and memoize it
const ProjectCard = memo(({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) => {
  // Memoize the video URL for the card as well
  const cardVideoUrl = useMemo(() => {
    if (!project.videoUrl) return '';
    return `${project.videoUrl}?autoplay=0&rel=0`;
  }, [project.videoUrl]);

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
      <div className="relative">
        {project.videoUrl ? (
          <div className="aspect-video">
            <iframe
              key={project.id} // Add a stable key
              src={cardVideoUrl}
              title={project.title}
              className="w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ) : (
          <div className={`h-56 w-full bg-gray-200 flex items-center justify-center ${project.type === 'video' ? 'bg-gray-800' : 'bg-gray-200'}`}>
            {project.type === 'video' ? (
              <>
                <Play size={48} className="text-white opacity-75" />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">Video Placeholder</span>
              </>
            ) : (
              <>
                <Image size={48} className="text-gray-400" />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">Image Placeholder</span>
              </>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</h4>
        <ul className="list-disc pl-5 text-gray-600 mb-4 text-sm">
          {project.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <button 
          onClick={() => onSelect(project)}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          View project details
          <ExternalLink size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const eventImages = [
    {
      url: "/1.jpg",
      caption: "Education Fair - Student Engagement"
    },
    {
      url: "/2.jpg",
      caption: "University Partnership Meeting"
    },
    {
      url: "/3.jpg",
      caption: "Student Counseling Session"
    },
    {
      url: "/4.jpg",
      caption: "International Education Workshop"
    }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Bhasha Tech Inc. – Language Learning App',
      description: 'Led the development and launch of an innovative language learning mobile application as Product Manager & Co-Founder, focusing on international users in multilingual regions.',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/UIEzuL8PcpI',
      achievements: [
        '25,000+ downloads in first 5 months',
        '40% increase in user engagement',
        'Recorded 2M+ ad impressions',
        'Boosted user retention by 25%'
      ],
      tags: ['Product Management', 'UX/UI', 'Analytics', 'Monetization', 'Leadership'],
      details: `
**Project:** Bhasha Tech Inc. – Language Learning App
**Role:** Product Manager & Co-Founder
**Duration:** Jan 2025 – Present
**Location:** Dallas, TX
**Website:** <a href="https://bhashaapp.com" target="_blank" class="text-blue-600 hover:text-blue-800">bhashaapp.com</a>

**Project Background:**
Bhasha Tech Inc. is a startup focused on building a language learning mobile application targeting international users, especially in multilingual regions. The core objective was to launch a scalable edtech product, drive rapid adoption, and generate early revenue through user engagement and monetization strategies.

**Goals:**
• Build a mobile app to support learning for international users
• Achieve rapid adoption through strong UX and targeted marketing
• Establish a scalable architecture for future content and features

**Key Responsibilities:**
• Defined product vision, roadmap, and long-term strategy
• Conducted user research and competitor analysis to shape feature set
• Led design and development across a cross-functional team (developers, designers, marketers)
• Oversaw UI/UX optimization using A/B testing and user feedback
• Used SQL, Power BI, and Google Analytics to measure engagement and retention metrics

**Results:**
• Achieved 25,000+ downloads within 5 months
• Recorded 2M+ ad impressions through effective campaigns
• Boosted user retention by 25% and engagement by 40% through iterative design changes

**Project 2: User Retention and Monetization Strategy**

**Goals:**
• Improve daily/weekly active user retention
• Establish in-app monetization through ads and subscriptions

**Key Responsibilities:**
• Devised and executed a monetization strategy using in-app advertising and optional paid subscriptions
• Partnered with marketing to roll out user re-engagement campaigns
• Analyzed feature usage to drive data-backed product decisions
• Optimized ad placements and evaluated performance via A/B testing
      `,
      imageUrl: '/project1.jpg'
    },
    {
      id: 2,
      title: 'Dream, Act, Achieve Education Event',
      description: 'Large-scale education fair connecting students with international universities.',
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/AUwSyI58RXI',
      achievements: [
        '2,000+ student participants',
        '15+ universities represented',
        'Multiple countries represented'
      ],
      tags: ['Event Management', 'Partnerships', 'Student Recruitment'],
      details: `
**Project:** Dream, Act, Achieve – Large-Scale Education Fair
**Role:** Founder & Director
**Organization:** Student Affairs Pvt. Ltd., Kathmandu, Nepal
**Duration:** 2014 – 2022
**Location:** Kathmandu, Nepal

**Project Objective:**
To empower students with access to global education opportunities by organizing one of Nepal's largest education events. The event aimed to connect prospective students with international universities and offer guidance on studying abroad.

**Event Overview:**
• Event Name: Dream, Act, Achieve – Global Education Fair
• Attendees: 2,000+ students and parents
• Participating Universities: 15+ institutions from the U.S., India, Australia, and the UK
• Location: Kathmandu, Nepal
• Target Audience: High school and undergraduate students seeking higher education opportunities abroad

**Key Responsibilities:**
• Conceptualized and branded the "Dream, Act, Achieve" event to inspire student ambition and action
• Planned end-to-end logistics, including venue booking, vendor coordination, and staff management
• Led a team of 20+ volunteers for event setup, registration, and on-site support
• Secured participation from 15+ international universities through outreach and partnerships
• Coordinated marketing campaigns across social media, email, and high school visits
• Delivered presentations and workshops on admission procedures, visa guidance, and test prep
• Facilitated 1-on-1 counseling booths for students and parents to interact with university reps

**Results & Impact:**
• 2,000+ participants, making it one of the largest education events in the region that year
• Led to a 20% increase in student consultations at Student Affairs Pvt. Ltd. post-event
• Strengthened university partnerships, contributing to smoother admission processes for Nepali students
• Significantly enhanced brand recognition of Student Affairs Pvt. Ltd. as a leading education consultancy in Nepal

**Tools & Strategies Used:**
• Event Promotion: Facebook, Instagram, school flyers, local radio
• CRM & Email Campaigns: Mailchimp, HubSpot
• Design: Canva for event posters, banners, and presentations
• On-Site Management: Registration tools, feedback forms, session tracking sheets
      `
    },
    {
      id: 3,
      title: 'International University Partnerships',
      description: 'Strategic partnership development with universities in the US and India.',
      type: 'image',
      imageUrl: '/5.jpg',
      achievements: [
        'Partnerships with multiple US universities',
        'Streamlined admission pipelines',
        'Increased student placements'
      ],
      tags: ['Partnerships', 'Business Development', 'Education'],
      details: `
**Project:** Building International University Partnerships
**Role:** Founder & Director
**Organization:** Student Affairs Pvt. Ltd., Kathmandu, Nepal
**Duration:** 2014 – 2022
**Location:** Kathmandu, Nepal

**Project Objective:**
To expand student placement opportunities and streamline admissions by establishing long-term partnerships with international universities in the U.S., India, Australia, and other key study-abroad destinations.

**Scope of the Project:**
• Identify, reach out to, and build collaborations with universities that align with Nepali students' aspirations and academic backgrounds
• Negotiate agreements for direct student admissions, application fee waivers, webinars, and joint outreach programs

**Key Responsibilities:**
• Led outreach initiatives to contact admissions offices of over 100 international universities
• Successfully established strategic alliances with 30+ institutions, including direct application pathways
• Drafted and signed Memorandums of Understanding (MoUs) with partner universities for ongoing student referrals
• Coordinated university webinars, virtual fairs, and info sessions, connecting institutions with target student segments
• Developed and presented institutional profiles, student data insights, and marketing proposals to university reps
• Maintained continuous communication with partners for admissions updates, feedback, and performance reports

**Results & Achievements:**
• 30+ global partnerships with institutions in the U.S., India, Australia, and Europe
• Achieved streamlined admissions for 500+ students annually with reduced documentation time and higher acceptance rates
• Partner universities reported improved applicant quality due to tailored student prep and early-stage counseling
• Increased Student Affairs' credibility and preference as a trusted education consultancy in Nepal
• Initiated co-branded events like the "Dream, Act, Achieve" fair and webinars hosted jointly with partner universities

**Tools & Strategies Used:**
• CRM Tools: HubSpot for managing leads and partnership pipelines
• Outreach: Personalized email campaigns, LinkedIn messaging, cold calls
• Presentations: Canva & PowerPoint for partnership decks
• Follow-ups & Analytics: Excel dashboards to track student placement outcomes by institution
      `
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleProjectSelect = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Projects Portfolio</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map(project => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onSelect={handleProjectSelect}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="relative">
              <div className="h-56 w-full">
                <img
                  src="/5.jpg"
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
              </div>
              </div>
              <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International University Partnerships</h3>
              <p className="text-gray-600 mb-4">Strategic partnership development with universities in the US and India.</p>
                
                <h4 className="text-sm font-medium text-gray-700 mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 text-gray-600 mb-4 text-sm">
                <li>Partnerships with multiple US universities</li>
                <li>Streamlined admission pipelines</li>
                <li>Increased student placements</li>
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                {['Partnerships', 'Business Development', 'Education'].map((tag, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
              <button 
                onClick={() => setSelectedProject(projects[2])}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                  View project details
                  <ExternalLink size={16} className="ml-1" />
                </button>
              </div>
        </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Highlights</h3>
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {eventImages.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-full relative">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                          <p className="text-sm text-center">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-lg transition-colors"
            >
                  <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-lg transition-colors"
            >
                  <ChevronRight size={20} />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {eventImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

// Add Modal component
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const videoUrl = useMemo(() => {
    if (!project.videoUrl) return '';
    return `${project.videoUrl}?autoplay=0&rel=0`;
  }, [project.videoUrl]);

  // Add click handler for the backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick} // Add click handler here
    >
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-extrabold text-gray-800 leading-tight">
              {project.title}
            </h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 ml-4 flex-shrink-0">
              <X size={24} />
            </button>
          </div>
          
          {project.videoUrl && (
            <div className="aspect-video mb-8">
              <iframe
                src={videoUrl}
                title={project.title}
                className="w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
          
          <div className="prose max-w-none">
            {project.details && (
              <div className="space-y-4 text-gray-600">
                {project.details.split('\n\n').map((paragraph, idx) => {
                  const formattedText = paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>')
                    .replace(/<a /g, '<a class="text-blue-600 hover:text-blue-800" ');
                  
                  return (
                    <p 
                      key={idx} 
                      className="whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: formattedText }}
                    />
                  );
                })}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;