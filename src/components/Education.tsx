import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-8 ml-4">
            <div className="mb-12 relative">
              <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-800">Master of Science in Business Analytics</h3>
                <div className="text-blue-600 font-medium">Texas A&M University-Commerce</div>
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <Calendar size={14} className="mr-1" />
                  <span>Graduated: August 2024</span>
                </div>
                <p className="mt-3 text-gray-700">
                  Advanced coursework in data analytics, business intelligence, and data-driven decision making.
                </p>
              </div>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-800">MBA Coursework</h3>
                <div className="text-blue-600 font-medium">Ashland University</div>
                <div className="text-gray-600 italic">(Completed 7 Courses)</div>
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <Calendar size={14} className="mr-1" />
                  <span>2022 - 2023</span>
                </div>
                <p className="mt-3 text-gray-700">
                  Courses focused on business strategy, marketing, operations, and finance.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap size={18} className="text-white" />
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Business Studies</h3>
                <div className="text-blue-600 font-medium">Bangalore University</div>
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <Calendar size={14} className="mr-1" />
                  <span>Graduated: July 2014</span>
                </div>
                <p className="mt-3 text-gray-700">
                  Foundation in business principles, management, and entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;