import React from 'react';
import { CheckCircle, ArrowRight, Code, Database, Zap, Users, DollarSign, Clock } from 'lucide-react';

const StackRecommendation = ({ recommendation, onCompare }) => {
  const getStackIcon = (stack) => {
    switch(stack) {
      case 'MERN':
        return <Code className="w-8 h-8 text-green-500" />;
      case 'JAMstack':
        return <Zap className="w-8 h-8 text-yellow-500" />;
      case 'LAMP':
        return <Database className="w-8 h-8 text-blue-500" />;
      default:
        return <Code className="w-8 h-8 text-primary-500" />;
    }
  };

  const getStackColor = (stack) => {
    switch(stack) {
      case 'MERN':
        return 'from-green-500 to-green-600';
      case 'JAMstack':
        return 'from-yellow-500 to-yellow-600';
      case 'LAMP':
        return 'from-blue-500 to-blue-600';
      default:
        return 'from-primary-500 to-primary-600';
    }
  };

  return (
    <div className="space-y-8">
      {/* Primary Recommendation */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className={`bg-gradient-to-r ${getStackColor(recommendation.primary)} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {getStackIcon(recommendation.primary)}
              <h2 className="text-2xl sm:text-3xl font-bold">
                {recommendation.primary} Stack
              </h2>
            </div>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
              Primary Recommendation
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-lg text-gray-700 mb-6">
            {recommendation.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Technologies
              </h3>
              <ul className="space-y-2">
                {recommendation.technologies.map((tech, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {recommendation.features.map((feature, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-3 bg-blue-50 rounded-xl">
              <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <span className="block text-sm font-medium text-gray-600">Learning Curve</span>
              <span className="block text-lg font-bold text-blue-600">{recommendation.learningCurve}</span>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl">
              <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <span className="block text-sm font-medium text-gray-600">Team Size</span>
              <span className="block text-lg font-bold text-green-600">{recommendation.teamSize}</span>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-xl">
              <DollarSign className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="block text-sm font-medium text-gray-600">Budget</span>
              <span className="block text-lg font-bold text-purple-600">{recommendation.budget}</span>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-xl">
              <Database className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <span className="block text-sm font-medium text-gray-600">Scalability</span>
              <span className="block text-lg font-bold text-orange-600">{recommendation.scalability}</span>
            </div>
          </div>

          <button
            onClick={onCompare}
            className="w-full btn-primary flex items-center justify-center"
          >
            Compare with Alternative
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Alternative Recommendations */}
      {recommendation.alternatives && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendation.alternatives.map((alt, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
              <div className="flex items-center space-x-3 mb-4">
                {getStackIcon(alt.name)}
                <h3 className="text-xl font-bold text-gray-900">{alt.name} Stack</h3>
              </div>
              <p className="text-gray-600 mb-4">{alt.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Learning: {alt.learningCurve}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StackRecommendation;