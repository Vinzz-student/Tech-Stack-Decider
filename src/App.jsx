import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Questionnaire from './components/Questionnaire';
import StackRecommendation from './components/StackRecommendation';
import StackComparison from './components/StackComparison';
import LearningCurve from './components/LearningCurve';
import { getRecommendation } from './utils/recommendations';

function App() {
  const [recommendation, setRecommendation] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const [selectedStack, setSelectedStack] = useState(null);

  const handleQuestionnaireSubmit = (answers) => {
    const result = getRecommendation(answers);
    setRecommendation(result);
    setSelectedStack(result.primary);
  };

  const handleCompare = (stack) => {
    setSelectedStack(stack);
    setShowComparison(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6">
            <span className="gradient-text">Tech Stack Decider</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bingung memilih teknologi untuk projectmu? Jawab beberapa pertanyaan sederhana, 
            dan kami akan merekomendasikan tech stack yang paling sesuai untuk kebutuhanmu.
          </p>
        </section>

        {/* Questionnaire Section */}
        <section className="max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <Questionnaire onSubmit={handleQuestionnaireSubmit} />
        </section>

        {/* Recommendation Section */}
        {recommendation && (
          <section className="mb-12 sm:mb-16 lg:mb-20 animate-slide-up">
            <StackRecommendation 
              recommendation={recommendation} 
              onCompare={() => handleCompare(recommendation.primary)}
            />
          </section>
        )}

        {/* Comparison Section */}
        {showComparison && selectedStack && (
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <StackComparison 
              stack1={selectedStack}
              stack2={selectedStack === 'MERN' ? 'JAMstack' : 'MERN'}
            />
          </section>
        )}

        {/* Learning Curve Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <LearningCurve />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;