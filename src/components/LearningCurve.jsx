import React from 'react';
import { BarChart2, Clock, BookOpen, TrendingUp } from 'lucide-react';

const LearningCurve = () => {
  const stacks = [
    {
      name: 'MERN Stack',
      difficulty: 7,
      timeToMaster: '6-8 months',
      prerequisites: ['JavaScript', 'HTML/CSS', 'Basic Programming'],
      resources: [
        { name: 'FreeCodeCamp', type: 'Free', link: '#' },
        { name: 'The Odin Project', type: 'Free', link: '#' },
        { name: 'Udemy Course', type: 'Paid', link: '#' },
      ],
    },
    {
      name: 'JAMstack',
      difficulty: 5,
      timeToMaster: '4-6 months',
      prerequisites: ['JavaScript', 'HTML/CSS', 'Basic API concepts'],
      resources: [
        { name: 'Jamstack.org', type: 'Free', link: '#' },
        { name: 'Gatsby Tutorials', type: 'Free', link: '#' },
        { name: 'Next.js Course', type: 'Paid', link: '#' },
      ],
    },
    {
      name: 'LAMP Stack',
      difficulty: 6,
      timeToMaster: '5-7 months',
      prerequisites: ['PHP', 'MySQL', 'HTML/CSS'],
      resources: [
        { name: 'PHP Documentation', type: 'Free', link: '#' },
        { name: 'Laracasts', type: 'Paid', link: '#' },
        { name: 'MySQL Tutorials', type: 'Free', link: '#' },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Learning Curve Comparison
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Pahami waktu dan effort yang diperlukan untuk mempelajari setiap tech stack.
          Pilih yang paling sesuai dengan waktumu.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 card-hover"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {stack.name}
            </h3>

            {/* Difficulty Meter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 flex items-center">
                  <BarChart2 className="w-4 h-4 mr-1" />
                  Difficulty Level
                </span>
                <span className="text-sm font-bold text-primary-600">
                  {stack.difficulty}/10
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full"
                  style={{ width: `${(stack.difficulty / 10) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Time to Master */}
            <div className="mb-6">
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Time to Master</span>
              </div>
              <p className="text-lg font-bold text-gray-900">
                {stack.timeToMaster}
              </p>
            </div>

            {/* Prerequisites */}
            <div className="mb-6">
              <div className="flex items-center text-gray-600 mb-2">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Prerequisites</span>
              </div>
              <ul className="space-y-1">
                {stack.prerequisites.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Resources */}
            <div>
              <div className="flex items-center text-gray-600 mb-3">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Recommended Resources</span>
              </div>
              <div className="space-y-2">
                {stack.resources.map((resource, i) => (
                  <a
                    key={i}
                    href={resource.link}
                    className="flex items-center justify-between p-2 bg-white rounded-lg hover:shadow-md transition-shadow"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {resource.name}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      resource.type === 'Free' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {resource.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningCurve;