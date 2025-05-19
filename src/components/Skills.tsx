import React from 'react';
import { Database, BarChart2, PieChart, FileSpreadsheet, Activity, Share2, Palette, MessageSquare } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'SQL', level: 90, icon: <Database size={24} />, category: 'Data' },
    { name: 'Tableau', level: 85, icon: <BarChart2 size={24} />, category: 'Data' },
    { name: 'Power BI', level: 80, icon: <PieChart size={24} />, category: 'Data' },
    { name: 'Excel', level: 95, icon: <FileSpreadsheet size={24} />, category: 'Data' },
    { name: 'Google Analytics', level: 75, icon: <Activity size={24} />, category: 'Marketing' },
    { name: 'HubSpot', level: 85, icon: <MessageSquare size={24} />, category: 'Marketing' },
    { name: 'Mailchimp', level: 80, icon: <MessageSquare size={24} />, category: 'Marketing' },
    { name: 'Canva', level: 90, icon: <Palette size={24} />, category: 'Design' },
    { name: 'Social Media', level: 95, icon: <Share2 size={24} />, category: 'Marketing' },
    { name: 'CRM Tools', level: 85, icon: <MessageSquare size={24} />, category: 'Business' }
  ];

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Split categories into two arrays
  const categoryEntries = Object.entries(categories);
  const midpoint = Math.ceil(categoryEntries.length / 2);
  const leftCategories = categoryEntries.slice(0, midpoint);
  const rightCategories = categoryEntries.slice(midpoint);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Tools & Technologies</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Column */}
            <div>
              {leftCategories.map(([category, categorySkills]) => (
                <div key={category} className="mb-12 last:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                  <div className="space-y-5">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          {skill.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-base font-medium text-gray-800">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightCategories.map(([category, categorySkills]) => (
                <div key={category} className="mb-12 last:mb-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category}</h3>
                  <div className="space-y-5">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          {skill.icon}
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-base font-medium text-gray-800">{skill.name}</span>
                            <span className="text-sm text-gray-600">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-blue-600 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;