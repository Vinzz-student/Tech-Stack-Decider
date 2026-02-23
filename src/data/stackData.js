// Data untuk berbagai tech stack
export const stackData = {
  mern: {
    id: 'mern',
    name: 'MERN Stack',
    fullName: 'MongoDB, Express.js, React, Node.js',
    description: 'Full-stack JavaScript solution untuk membangun aplikasi web modern dengan satu bahasa pemrograman.',
    longDescription: 'MERN Stack adalah kombinasi teknologi yang memungkinkan developer membangun aplikasi web end-to-end menggunakan JavaScript. Dengan MongoDB sebagai database NoSQL, Express.js sebagai backend framework, React untuk frontend, dan Node.js sebagai runtime environment, MERN menawarkan pengembangan yang efisien dan konsisten.',
    icon: '🟢',
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    technologies: [
      {
        name: 'MongoDB',
        description: 'Database NoSQL yang fleksibel dan scalable',
        docs: 'https://docs.mongodb.com/',
        pros: ['Schema-less', 'Horizontal scaling', 'JSON-like documents'],
        cons: ['Joins terbatas', 'Memory usage tinggi']
      },
      {
        name: 'Express.js',
        description: 'Backend framework minimalis untuk Node.js',
        docs: 'https://expressjs.com/',
        pros: ['Cepat dan minimalis', 'Middleware support', 'Routing powerful'],
        cons: ['Manual setup', 'Kurang struktur bawaan']
      },
      {
        name: 'React',
        description: 'Library frontend untuk membangun user interface',
        docs: 'https://react.dev/',
        pros: ['Component-based', 'Virtual DOM', 'Ekosistem besar'],
        cons: ['Learning curve', 'Tools berubah cepat']
      },
      {
        name: 'Node.js',
        description: 'JavaScript runtime untuk backend',
        docs: 'https://nodejs.org/',
        pros: ['Non-blocking I/O', 'NPM ecosystem', 'Single thread'],
        cons: ['CPU intensive tasks', 'Callback hell']
      }
    ],
    useCases: [
      {
        title: 'Single Page Applications',
        description: 'Aplikasi dengan interaktivitas tinggi dan real-time updates',
        example: 'Dashboard admin, Social media apps'
      },
      {
        title: 'E-commerce Platforms',
        description: 'Toko online dengan manajemen produk dan keranjang belanja',
        example: 'Amazon clone, Marketplace'
      },
      {
        title: 'Real-time Applications',
        description: 'Aplikasi yang membutuhkan update real-time',
        example: 'Chat apps, Collaboration tools'
      }
    ],
    pros: [
      'JavaScript everywhere - satu bahasa untuk frontend dan backend',
      'Ekosistem besar dengan ribuan package NPM',
      'Komunitas aktif dan dokumentasi lengkap',
      'Mudah untuk real-time aplikasi dengan WebSocket',
      'Component reusability dengan React'
    ],
    cons: [
      'SEO challenges untuk single-page apps (bisa diatasi dengan SSR)',
      'Callback hell (bisa diatasi dengan async/await)',
      'Keamanan perlu perhatian ekstra',
      'Boilerplate code untuk setup awal'
    ],
    learningCurve: {
      level: 'Moderate',
      timeToMaster: '6-8 months',
      prerequisites: ['JavaScript ES6+', 'HTML/CSS', 'Basic programming concepts'],
      resources: [
        {
          name: 'The Odin Project',
          type: 'Free',
          url: 'https://www.theodinproject.com/',
          description: 'Full-stack curriculum dengan fokus JavaScript'
        },
        {
          name: 'FreeCodeCamp',
          type: 'Free',
          url: 'https://www.freecodecamp.org/',
          description: 'Interactive coding challenges dan projects'
        },
        {
          name: 'MERN Stack Front To Back',
          type: 'Paid',
          url: 'https://www.udemy.com/',
          description: 'Complete guide membangun full-stack apps'
        }
      ]
    },
    metrics: {
      popularity: '85%',
      jobDemand: 'High',
      communitySize: 'Very Large',
      averageSalary: '$120k - $150k',
      githubStars: '500k+',
      npmDownloads: '10M+/week'
    }
  },

  jamstack: {
    id: 'jamstack',
    name: 'JAMstack',
    fullName: 'JavaScript, APIs, Markup',
    description: 'Arsitektur modern untuk membangun website dan aplikasi cepat dengan memisahkan frontend dan backend.',
    longDescription: 'JAMstack adalah pendekatan arsitektur web yang fokus pada performa, keamanan, dan skalabilitas. Dengan memisahkan frontend (JavaScript dan Markup) dari backend (APIs), JAMstack memungkinkan deployment melalui CDN global untuk kecepatan loading yang optimal.',
    icon: '⚡',
    color: 'yellow',
    gradient: 'from-yellow-500 to-yellow-600',
    technologies: [
      {
        name: 'Static Site Generators',
        description: 'Tools seperti Next.js, Gatsby, atau Hugo',
        docs: 'https://nextjs.org/',
        pros: ['Pre-rendered pages', 'Great SEO', 'Fast loads'],
        cons: ['Build time untuk large sites']
      },
      {
        name: 'Headless CMS',
        description: 'Content management via APIs',
        docs: 'https://www.contentful.com/',
        pros: ['Flexible content modeling', 'API-first', 'Developer friendly'],
        cons: ['Cost untuk premium features']
      },
      {
        name: 'Serverless Functions',
        description: 'Backend logic tanpa mengelola server',
        docs: 'https://vercel.com/docs/concepts/functions/serverless-functions',
        pros: ['Auto-scaling', 'Pay per execution', 'No server management'],
        cons: ['Cold starts', 'Vendor lock-in']
      }
    ],
    useCases: [
      {
        title: 'Marketing Websites',
        description: 'Company profile, landing pages dengan performa tinggi',
        example: 'Startup websites, Product landing pages'
      },
      {
        title: 'E-commerce Stores',
        description: 'Toko online dengan headless commerce',
        example: 'Snipcart + Gatsby, Shopify + Next.js'
      },
      {
        title: 'Blogs & Portfolios',
        description: 'Website konten dengan loading cepat',
        example: 'Personal blog, Developer portfolio'
      }
    ],
    pros: [
      'Performa sangat tinggi dengan CDN distribution',
      'Keamanan lebih baik karena server-side terpisah',
      'Developer experience yang excellent',
      'Scalability otomatis',
      'Biaya hosting rendah (bahkan gratis)'
    ],
    cons: [
      'Build time bisa lama untuk situs besar',
      'Dinamis content membutuhkan re-build',
      'Learning curve untuk konsep baru',
      'Beberapa fitur membutuhkan third-party services'
    ],
    learningCurve: {
      level: 'Low to Moderate',
      timeToMaster: '4-6 months',
      prerequisites: ['JavaScript', 'HTML/CSS', 'Basic API concepts'],
      resources: [
        {
          name: 'Jamstack.org',
          type: 'Free',
          url: 'https://jamstack.org/',
          description: 'Official website dengan resources lengkap'
        },
        {
          name: 'Next.js Tutorial',
          type: 'Free',
          url: 'https://nextjs.org/learn',
          description: 'Official Next.js tutorial'
        },
        {
          name: 'Gatsby Tutorials',
          type: 'Free',
          url: 'https://www.gatsbyjs.com/tutorial/',
          description: 'Step-by-step Gatsby learning'
        }
      ]
    },
    metrics: {
      popularity: '70%',
      jobDemand: 'Growing',
      communitySize: 'Large',
      averageSalary: '$110k - $140k',
      githubStars: '300k+',
      npmDownloads: '5M+/week'
    }
  },

  lamp: {
    id: 'lamp',
    name: 'LAMP Stack',
    fullName: 'Linux, Apache, MySQL, PHP',
    description: 'Stack tradisional yang mature dengan ekosistem luas dan dokumentasi lengkap.',
    longDescription: 'LAMP adalah stack klasik yang telah teruji waktu untuk membangun aplikasi web. Menggunakan Linux sebagai OS, Apache sebagai web server, MySQL sebagai database, dan PHP sebagai bahasa pemrograman. Stack ini sangat stabil dan didukung oleh banyak hosting provider.',
    icon: '🐘',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    technologies: [
      {
        name: 'Linux',
        description: 'Operating system open source',
        docs: 'https://www.linux.org/',
        pros: ['Stable', 'Secure', 'Free'],
        cons: ['Learning curve untuk pemula']
      },
      {
        name: 'Apache',
        description: 'Web server paling populer',
        docs: 'https://httpd.apache.org/',
        pros: ['Mature', 'Modular', 'Well-documented'],
        cons: ['Resource heavy', 'Kompleks untuk konfigurasi']
      },
      {
        name: 'MySQL',
        description: 'Relational database management system',
        docs: 'https://dev.mysql.com/doc/',
        pros: ['ACID compliant', 'Great for transactions', 'Widely used'],
        cons: ['Scaling vertikal', 'JSON support terbatas']
      },
      {
        name: 'PHP',
        description: 'Server-side scripting language',
        docs: 'https://www.php.net/',
        pros: ['Easy to learn', 'Great for web', 'Large community'],
        cons: ['Inconsistent API', 'Security perlu perhatian']
      }
    ],
    useCases: [
      {
        title: 'Content Management Systems',
        description: 'WordPress, Drupal, Joomla sites',
        example: 'Company blogs, News portals'
      },
      {
        title: 'E-commerce Platforms',
        description: 'Magento, WooCommerce stores',
        example: 'Online shops, Digital stores'
      },
      {
        title: 'Legacy Applications',
        description: 'Maintenance dan pengembangan sistem lama',
        example: 'Internal company tools, ERP systems'
      }
    ],
    pros: [
      'Teknologi mature dan teruji',
      'Dokumentasi sangat lengkap',
      'Banyak hosting provider mendukung',
      'Mudah untuk deployment',
      'Komunitas besar dan aktif'
    ],
    cons: [
      'Arsitektur monolitik secara default',
      'Kurang modern dibanding stack lain',
      'Performance tidak sebaik stack modern',
      'PHP memiliki banyak quirks'
    ],
    learningCurve: {
      level: 'Moderate',
      timeToMaster: '5-7 months',
      prerequisites: ['PHP basics', 'MySQL', 'HTML/CSS'],
      resources: [
        {
          name: 'PHP Documentation',
          type: 'Free',
          url: 'https://www.php.net/docs.php',
          description: 'Official PHP documentation'
        },
        {
          name: 'MySQL Tutorial',
          type: 'Free',
          url: 'https://www.mysqltutorial.org/',
          description: 'Comprehensive MySQL learning'
        },
        {
          name: 'Laracasts',
          type: 'Paid',
          url: 'https://laracasts.com/',
          description: 'PHP dan Laravel video tutorials'
        }
      ]
    },
    metrics: {
      popularity: '75%',
      jobDemand: 'Stable',
      communitySize: 'Very Large',
      averageSalary: '$90k - $120k',
      githubStars: '200k+',
      npmDownloads: 'N/A (PHP packages)'
    }
  },

  pythonDjango: {
    id: 'python-django',
    name: 'Python Django',
    fullName: 'Python, Django, PostgreSQL',
    description: 'High-level Python web framework yang mendorong rapid development dan clean design.',
    longDescription: 'Django adalah framework web Python yang powerful dengan filosofi "batteries included". Menyediakan hampir semua fitur out-of-the-box: ORM, authentication, admin panel, dan banyak lagi. Sangat cocok untuk aplikasi data-driven dan project dengan deadline ketat.',
    icon: '🐍',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
    technologies: [
      {
        name: 'Python',
        description: 'Bahasa pemrograman serbaguna',
        docs: 'https://www.python.org/',
        pros: ['Easy to learn', 'Readable code', 'Great for data science'],
        cons: ['Slower than compiled languages', 'GIL limitations']
      },
      {
        name: 'Django',
        description: 'Full-stack web framework',
        docs: 'https://www.djangoproject.com/',
        pros: ['Batteries included', 'Great ORM', 'Admin interface'],
        cons: ['Monolithic', 'Steep learning curve']
      },
      {
        name: 'PostgreSQL',
        description: 'Advanced relational database',
        docs: 'https://www.postgresql.org/',
        pros: ['ACID compliant', 'JSON support', 'Extensible'],
        cons: ['Resource intensive', 'Complex setup']
      }
    ],
    useCases: [
      {
        title: 'Data-Driven Applications',
        description: 'Aplikasi dengan kompleksitas data tinggi',
        example: 'Analytics platforms, Reporting tools'
      },
      {
        title: 'Content Management',
        description: 'Website dengan admin panel powerful',
        example: 'News sites, Corporate websites'
      },
      {
        title: 'Scientific Applications',
        description: 'Aplikasi untuk riset dan komputasi',
        example: 'Research platforms, Data visualization'
      }
    ],
    pros: [
      'Rapid development dengan built-in features',
      'Security features out-of-the-box',
      'ORM yang powerful',
      'Admin panel auto-generated',
      'Great documentation'
    ],
    cons: [
      'Monolithic architecture',
      'Learning curve untuk Django-specific concepts',
      'Heavy framework untuk project kecil',
      'ORM bisa lambat untuk query kompleks'
    ],
    learningCurve: {
      level: 'Moderate to High',
      timeToMaster: '6-9 months',
      prerequisites: ['Python basics', 'Database concepts', 'Web fundamentals'],
      resources: [
        {
          name: 'Django Official Tutorial',
          type: 'Free',
          url: 'https://docs.djangoproject.com/en/stable/intro/tutorial01/',
          description: 'Official Django tutorial'
        },
        {
          name: 'Django for Everybody',
          type: 'Free',
          url: 'https://www.dj4e.com/',
          description: 'University of Michigan course'
        },
        {
          name: 'TestDriven.io',
          type: 'Paid',
          url: 'https://testdriven.io/',
          description: 'Advanced Django tutorials'
        }
      ]
    },
    metrics: {
      popularity: '80%',
      jobDemand: 'High',
      communitySize: 'Large',
      averageSalary: '$115k - $145k',
      githubStars: '70k+',
      pypiDownloads: '20M+/month'
    }
  }
};

// Fungsi helper untuk mendapatkan stack berdasarkan ID
export const getStackById = (id) => {
  return stackData[id] || null;
};

// Mendapatkan semua stack dalam bentuk array
export const getAllStacks = () => {
  return Object.values(stackData);
};

// Mendapatkan stack populer
export const getPopularStacks = (limit = 3) => {
  return Object.values(stackData).slice(0, limit);
};

// Data perbandingan stack
export const stackComparisons = {
  mernVsJamstack: {
    title: 'MERN vs JAMstack',
    stacks: ['mern', 'jamstack'],
    differences: [
      {
        aspect: 'Architecture',
        stack1Desc: 'Full-stack JavaScript dengan backend sendiri',
        stack2Desc: 'Separated frontend dengan third-party APIs'
      },
      {
        aspect: 'Performance',
        stack1Desc: 'Good, tergantung optimasi backend',
        stack2Desc: 'Excellent dengan CDN dan static generation'
      },
      {
        aspect: 'Learning Curve',
        stack1Desc: 'Moderate - perlu kuasai 4 teknologi',
        stack2Desc: 'Low - fokus ke frontend dan API'
      },
      {
        aspect: 'Best For',
        stack1Desc: 'Dynamic apps, real-time features',
        stack2Desc: 'Content sites, marketing pages'
      }
    ]
  },
  mernVsLamp: {
    title: 'MERN vs LAMP',
    stacks: ['mern', 'lamp'],
    differences: [
      {
        aspect: 'Language',
        stack1Desc: 'JavaScript everywhere',
        stack2Desc: 'PHP + JavaScript'
      },
      {
        aspect: 'Database',
        stack1Desc: 'MongoDB (NoSQL)',
        stack2Desc: 'MySQL (Relational)'
      },
      {
        aspect: 'Modernity',
        stack1Desc: 'Modern stack',
        stack2Desc: 'Traditional stack'
      },
      {
        aspect: 'Hosting',
        stack1Desc: 'Cloud platforms (Vercel, Netlify)',
        stack2Desc: 'Traditional hosting (cPanel, shared)'
      }
    ]
  }
};