import React, { useState } from 'react';
import { ChevronRight, HelpCircle, Users, DollarSign } from 'lucide-react';

const Questionnaire = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    projectType: '',
    teamSize: '',
    budget: '',
    experience: '',
    scalability: '',
  });

  const questions = [
    {
      id: 'projectType',
      icon: <HelpCircle className="w-6 h-6" />,
      question: 'Apa tipe project yang ingin kamu buat?',
      options: [
        { value: 'web-app', label: 'Web Application', desc: 'Aplikasi web interaktif dengan fitur kompleks' },
        { value: 'ecommerce', label: 'E-commerce', desc: 'Toko online dengan manajemen produk' },
        { value: 'blog', label: 'Blog / CMS', desc: 'Website konten dengan sistem manajemen' },
        { value: 'portfolio', label: 'Portfolio', desc: 'Website personal atau company profile' },
        { value: 'api', label: 'API / Backend', desc: 'REST API atau microservice' },
      ],
    },
    {
      id: 'teamSize',
      icon: <Users className="w-6 h-6" />,
      question: 'Berapa ukuran timmu?',
      options: [
        { value: 'solo', label: 'Solo Developer', desc: 'Sendiri, tanpa tim' },
        { value: 'small', label: 'Small Team (2-5)', desc: 'Tim kecil dengan peran terbatas' },
        { value: 'medium', label: 'Medium Team (6-15)', desc: 'Tim dengan struktur jelas' },
        { value: 'large', label: 'Large Team (15+)', desc: 'Tim besar dengan banyak role' },
      ],
    },
    {
      id: 'budget',
      icon: <DollarSign className="w-6 h-6" />,
      question: 'Berapa budget untuk project ini?',
      options: [
        { value: 'free', label: 'Free / Open Source', desc: 'Menggunakan teknologi gratis' },
        { value: 'low', label: 'Low Budget', desc: 'Budget terbatas untuk hosting & tools' },
        { value: 'medium', label: 'Medium Budget', desc: 'Ada budget untuk layanan premium' },
        { value: 'high', label: 'High Budget', desc: 'Budget besar untuk enterprise solution' },
      ],
    },
  ];

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      onSubmit(answers);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep - 1];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {questions.length}
          </span>
          <span className="text-sm font-medium text-primary-600">
            {Math.round((currentStep / questions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="flex items-center mb-4 text-primary-600">
          {currentQuestion.icon}
          <h3 className="text-xl sm:text-2xl font-bold ml-2">
            {currentQuestion.question}
          </h3>
        </div>

        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <label
              key={option.value}
              className={`block p-4 border-2 rounded-xl cursor-pointer transition-all duration-300
                ${answers[currentQuestion.id] === option.value
                  ? 'border-primary-500 bg-primary-50 shadow-md'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={answers[currentQuestion.id] === option.value}
                  onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                  className="w-5 h-5 text-primary-600 focus:ring-primary-500"
                />
                <div className="ml-3">
                  <span className="block font-semibold text-gray-900">
                    {option.label}
                  </span>
                  <span className="block text-sm text-gray-500">
                    {option.desc}
                  </span>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={!answers[currentQuestion.id]}
          className="btn-primary flex items-center"
        >
          {currentStep === questions.length ? 'Get Recommendation' : 'Next'}
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Questionnaire;