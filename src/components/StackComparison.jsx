import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp, ArrowLeftRight } from 'lucide-react';

const StackComparison = ({ stack1, stack2 }) => {
  const [expanded, setExpanded] = useState(false);

  const comparisonData = {
    MERN: {
      name: 'MERN Stack',
      description: 'MongoDB, Express.js, React, Node.js',
      learningCurve: 'Moderate',
      performance: 'High',
      scalability: 'Very High',
      community: 'Large',
      jobMarket: 'Excellent',
      bestFor: 'Full-stack web apps, SPAs',
      database: 'MongoDB (NoSQL)',
      frontend: 'React',
      backend: 'Node.js + Express',
      hosting: 'Any (Vercel, Netlify, AWS)',
      pros: ['JavaScript everywhere', 'Great for real-time apps', 'Huge ecosystem', 'Component reusability'],
      cons: ['Can be complex for beginners', 'SEO challenges (can be fixed)', 'Callback hell (can be managed)'],
    },
    JAMstack: {
      name: 'JAMstack',
      description: 'JavaScript, APIs, Markup',
      learningCurve: 'Low to Moderate',
      performance: 'Very High',
      scalability: 'High',
      community: 'Growing',
      jobMarket: 'Good',
      bestFor: 'Static sites, blogs, e-commerce',
      database: 'Any (via APIs)',
      frontend: 'Static site generators (Gatsby, Next.js)',
      backend: 'Serverless functions',
      hosting: 'CDN (Vercel, Netlify)',
      pros: ['Blazing fast', 'Great SEO', 'Cheap hosting', 'Better security'],
      cons: ['Build times for large sites', 'Less dynamic features', 'API dependencies'],
    },
    LAMP: {
      name: 'LAMP Stack',
      description: 'Linux, Apache, MySQL, PHP',
      learningCurve: 'Moderate',
      performance: 'Good',
      scalability: 'Moderate',
      community: 'Very Large',
      jobMarket: 'Good',
      bestFor: 'Traditional web apps, CMS',
      database: 'MySQL (Relational)',
      frontend: 'HTML, CSS, JavaScript',
      backend: 'PHP',
      hosting: 'Traditional hosting',
      pros: ['Mature technology', 'Great documentation', 'Easy to deploy', 'Cost-effective'],
      cons: ['Older technology', 'Less modern features', 'Monolithic by default'],
    },
  };

  const stack1Data = comparisonData[stack1] || comparisonData.MERN;
  const stack2Data = comparisonData[stack2] || comparisonData.JAMstack;

  const comparisonPoints = [
    { label: 'Learning Curve', key: 'learningCurve' },
    { label: 'Performance', key: 'performance' },
    { label: 'Scalability', key: 'scalability' },
    { label: 'Community Size', key: 'community' },
    { label: 'Job Market', key: 'jobMarket' },
    { label: 'Database', key: 'database' },
    { label: 'Frontend', key: 'frontend' },
    { label: 'Backend', key: 'backend' },
    { label: 'Hosting', key: 'hosting' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center">
            <ArrowLeftRight className="mr-2" />
            Stack Comparison
          </h2>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-white/80 hover:text-white transition-colors"
          >
            {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="col-span-1"></div>
          <div className="col-span-1 text-center">
            <h3 className="font-bold text-lg text-primary-600">{stack1Data.name}</h3>
            <p className="text-sm text-gray-500">{stack1Data.description}</p>
          </div>
          <div className="col-span-1 text-center">
            <h3 className="font-bold text-lg text-primary-600">{stack2Data.name}</h3>
            <p className="text-sm text-gray-500">{stack2Data.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          {comparisonPoints.map((point) => (
            <div key={point.key} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
              <div className="font-medium text-gray-700">{point.label}</div>
              <div className="text-center text-gray-900">{stack1Data[point.key]}</div>
              <div className="text-center text-gray-900">{stack2Data[point.key]}</div>
            </div>
          ))}
        </div>

        {expanded && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stack 1 Pros & Cons */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-900">{stack1Data.name} - Pros & Cons</h4>
              <div className="bg-green-50 p-4 rounded-xl">
                <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                  <Check className="w-4 h-4 mr-2" /> Pros
                </h5>
                <ul className="space-y-2">
                  {stack1Data.pros.map((pro, index) => (
                    <li key={index} className="text-green-600 flex items-start">
                      <span className="mr-2">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-semibold text-red-700 mb-2 flex items-center">
                  <X className="w-4 h-4 mr-2" /> Cons
                </h5>
                <ul className="space-y-2">
                  {stack1Data.cons.map((con, index) => (
                    <li key={index} className="text-red-600 flex items-start">
                      <span className="mr-2">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack 2 Pros & Cons */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-gray-900">{stack2Data.name} - Pros & Cons</h4>
              <div className="bg-green-50 p-4 rounded-xl">
                <h5 className="font-semibold text-green-700 mb-2 flex items-center">
                  <Check className="w-4 h-4 mr-2" /> Pros
                </h5>
                <ul className="space-y-2">
                  {stack2Data.pros.map((pro, index) => (
                    <li key={index} className="text-green-600 flex items-start">
                      <span className="mr-2">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-xl">
                <h5 className="font-semibold text-red-700 mb-2 flex items-center">
                  <X className="w-4 h-4 mr-2" /> Cons
                </h5>
                <ul className="space-y-2">
                  {stack2Data.cons.map((con, index) => (
                    <li key={index} className="text-red-600 flex items-start">
                      <span className="mr-2">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StackComparison;