export const getRecommendation = (answers) => {
  const { projectType, teamSize, budget, experience, scalability } = answers;

  // Logic untuk merekomendasikan stack berdasarkan jawaban
  if (projectType === 'web-app' || projectType === 'ecommerce') {
    if (teamSize === 'solo' || teamSize === 'small') {
      return {
        primary: 'MERN',
        description: 'MERN Stack adalah pilihan sempurna untuk aplikasi web modern dengan tim kecil. Menggunakan JavaScript secara penuh (Full-stack) memudahkan development dan maintenance.',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        features: ['Real-time updates', 'RESTful APIs', 'Component-based UI', 'NoSQL database'],
        learningCurve: 'Moderate',
        teamSize: '1-5 people',
        budget: 'Free/Open Source',
        scalability: 'High',
        alternatives: [
          {
            name: 'JAMstack',
            description: 'Alternatif modern dengan performa tinggi dan biaya hosting murah.',
            learningCurve: 'Low',
          },
          {
            name: 'LAMP',
            description: 'Stack tradisional yang mature dengan dokumentasi lengkap.',
            learningCurve: 'Moderate',
          }
        ]
      };
    } else {
      return {
        primary: 'JAMstack',
        description: 'JAMstack ideal untuk project dengan tim besar dan fokus pada performa. Memisahkan frontend dan backend untuk skalabilitas maksimal.',
        technologies: ['Next.js/Gatsby', 'Headless CMS', 'Serverless Functions', 'CDN'],
        features: ['Static generation', 'Server-side rendering', 'API integration', 'Global CDN'],
        learningCurve: 'Low',
        teamSize: '5+ people',
        budget: 'Low to Medium',
        scalability: 'Very High',
        alternatives: [
          {
            name: 'MERN',
            description: 'Full-stack JavaScript solution dengan real-time capabilities.',
            learningCurve: 'Moderate',
          }
        ]
      };
    }
  }

  if (projectType === 'blog' || projectType === 'portfolio') {
    return {
      primary: 'JAMstack',
      description: 'JAMstack sangat cocok untuk website konten dengan performa tinggi dan SEO yang baik.',
      technologies: ['Gatsby/Next.js', 'Markdown/CMS', 'Static Hosting'],
      features: ['Fast loading', 'Great SEO', 'Easy deployment', 'Low cost'],
      learningCurve: 'Low',
      teamSize: '1-3 people',
      budget: 'Free/Low',
      scalability: 'High',
      alternatives: [
        {
          name: 'LAMP',
          description: 'Traditional approach with WordPress or custom PHP.',
          learningCurve: 'Low',
        }
      ]
    };
  }

  if (projectType === 'api') {
    return {
      primary: 'MERN',
      description: 'Node.js dan Express sangat powerful untuk membangun REST APIs dan microservices.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      features: ['RESTful APIs', 'Authentication', 'Database integration', 'Middleware support'],
      learningCurve: 'Moderate',
      teamSize: 'Any',
      budget: 'Free/Low',
      scalability: 'Very High',
      alternatives: [
        {
          name: 'LAMP',
          description: 'PHP-based APIs dengan MySQL database.',
          learningCurve: 'Moderate',
        }
      ]
    };
  }

  // Default recommendation
  return {
    primary: 'MERN',
    description: 'MERN Stack adalah pilihan serbaguna yang cocok untuk berbagai jenis project.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    features: ['Full-stack JavaScript', 'Component-based', 'Real-time capable', 'Large ecosystem'],
    learningCurve: 'Moderate',
    teamSize: 'Flexible',
    budget: 'Flexible',
    scalability: 'High',
    alternatives: [
      {
        name: 'JAMstack',
        description: 'Modern approach with better performance.',
        learningCurve: 'Low',
      },
      {
        name: 'LAMP',
        description: 'Traditional stack with proven reliability.',
        learningCurve: 'Moderate',
      }
    ]
  };
};