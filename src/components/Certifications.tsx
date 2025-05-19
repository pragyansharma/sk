import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2024",
      description: "Professional certification in Tableau Desktop data visualization"
    },
    {
      title: "Google Project Management",
      issuer: "Google",
      date: "2025",
      description: "Comprehensive project management methodologies and best practices"
    },
    {
      title: "Using AI in Research Projects",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Advanced AI implementation in research and analysis"
    },
    {
      title: "Marketing Attribution and Mix Modeling",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Data-driven marketing analysis and optimization"
    },
    {
      title: "Getting Started with Power BI",
      issuer: "Microsoft",
      date: "2024",
      description: "Business intelligence and data visualization fundamentals"
    },
    {
      title: "Excel Formulas and Functions Quick Tips",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Advanced Excel techniques for data analysis"
    },
    {
      title: "AI Foundations: Machine Learning",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Core concepts and applications of machine learning"
    },
    {
      title: "Marketing Foundations: Analytics",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Data analytics for marketing strategy and decision-making"
    },
    {
      title: "R for Data Science: Analysis and Visualization",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Statistical analysis and data visualization using R"
    },
    {
      title: "Machine Learning with Python: Foundations",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Python-based machine learning fundamentals"
    },
    {
      title: "Excel: Introduction to Charts and Graphs",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Data visualization and presentation using Excel"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h3>
                  <div className="text-blue-600 font-medium mb-2">{cert.issuer}</div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;