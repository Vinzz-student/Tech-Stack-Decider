// Contoh project real untuk setiap tech stack
export const projectExamples = {
  mern: [
    {
      id: 'mern-1',
      name: 'Threads Clone',
      description: 'Social media platform dengan real-time messaging dan infinite scroll',
      longDescription: 'Aplikasi social media lengkap dengan fitur posting, like, comment, dan real-time chat menggunakan Socket.io. Mengimplementasikan JWT authentication, image upload dengan Cloudinary, dan infinite scrolling untuk feed.',
      stack: 'MERN',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT', 'Cloudinary'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://threads-clone-demo.vercel.app',
      githubUrl: 'https://github.com/username/threads-clone',
      features: [
        'User authentication & authorization',
        'Create, edit, delete posts',
        'Real-time comments',
        'Like & unlike posts',
        'Follow/unfollow users',
        'Real-time messaging',
        'Image upload',
        'Infinite scrolling'
      ],
      metrics: {
        stars: '2.5k',
        forks: '450',
        contributors: '12',
        lastCommit: '2 days ago',
        license: 'MIT'
      },
      author: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        github: 'johndoe'
      },
      learningPoints: [
        'Implementasi JWT authentication',
        'Real-time features dengan Socket.io',
        'State management dengan Context API',
        'File upload dengan Cloudinary',
        'Database modeling dengan MongoDB'
      ]
    },
    {
      id: 'mern-2',
      name: 'DevCamper',
      description: 'Platform untuk menemukan dan mereview bootcamp programming',
      longDescription: 'Aplikasi yang membantu developer menemukan bootcamp programming terbaik. Fitur pencarian dengan filter, review system, geolocation, dan admin dashboard.',
      stack: 'MERN',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Mapbox', 'Redux'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://devcamper-demo.vercel.app',
      githubUrl: 'https://github.com/username/devcamper',
      features: [
        'Advanced search & filters',
        'Geolocation integration',
        'User reviews & ratings',
        'Admin dashboard',
        'Payment integration',
        'Email notifications'
      ],
      metrics: {
        stars: '3.2k',
        forks: '680',
        contributors: '23',
        lastCommit: '1 week ago',
        license: 'MIT'
      },
      author: {
        name: 'Jane Smith',
        avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
        github: 'janesmith'
      },
      learningPoints: [
        'Geolocation dengan Mapbox',
        'Advanced filtering dengan MongoDB',
        'Redux state management',
        'Role-based authentication',
        'Payment gateway integration'
      ]
    },
    {
      id: 'mern-3',
      name: 'TaskFlow',
      description: 'Project management tool dengan kanban board dan team collaboration',
      longDescription: 'Aplikasi manajemen project ala Trello/Asana dengan drag-and-drop kanban board, team assignment, deadline tracking, dan real-time updates.',
      stack: 'MERN',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'DnD Kit'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://taskflow-demo.vercel.app',
      githubUrl: 'https://github.com/username/taskflow',
      features: [
        'Drag-and-drop kanban board',
        'Team collaboration',
        'Task assignment',
        'Deadline tracking',
        'File attachments',
        'Activity logs',
        'Real-time updates'
      ],
      metrics: {
        stars: '4.1k',
        forks: '890',
        contributors: '34',
        lastCommit: '3 days ago',
        license: 'MIT'
      },
      author: {
        name: 'Mike Johnson',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        github: 'mikejohnson'
      },
      learningPoints: [
        'Drag-and-drop implementation',
        'Real-time collaboration',
        'Complex state management',
        'File upload & management',
        'WebSocket for live updates'
      ]
    }
  ],

  jamstack: [
    {
      id: 'jamstack-1',
      name: 'Gatsby Shop',
      description: 'Headless e-commerce dengan Stripe integration',
      longDescription: 'Toko online modern menggunakan Gatsby sebagai frontend, Shopify sebagai headless commerce, dan Stripe untuk payment processing. Dengan performa tinggi dan SEO optimal.',
      stack: 'JAMstack',
      technologies: ['Gatsby', 'React', 'Shopify API', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://gatsbyshop-demo.netlify.app',
      githubUrl: 'https://github.com/username/gatsby-shop',
      features: [
        'Product catalog',
        'Shopping cart',
        'Stripe checkout',
        'Order management',
        'Product search',
        'Responsive design'
      ],
      metrics: {
        stars: '1.8k',
        forks: '320',
        contributors: '8',
        lastCommit: '5 days ago',
        license: 'MIT'
      },
      author: {
        name: 'Sarah Wilson',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        github: 'sarahwilson'
      },
      learningPoints: [
        'Headless commerce concept',
        'Stripe integration',
        'Static site generation',
        'API integration patterns',
        'Performance optimization'
      ]
    },
    {
      id: 'jamstack-2',
      name: 'DevBlog Pro',
      description: 'Developer blog dengan MDX dan syntax highlighting',
      longDescription: 'Blog platform untuk developer dengan dukungan MDX, syntax highlighting, code snippets, dan dark mode. Menggunakan Next.js untuk SSR dan incremental static regeneration.',
      stack: 'JAMstack',
      technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel', 'Algolia'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://devblogpro.vercel.app',
      githubUrl: 'https://github.com/username/devblog-pro',
      features: [
        'MDX support',
        'Syntax highlighting',
        'Dark mode',
        'Search with Algolia',
        'Comments system',
        'Newsletter integration'
      ],
      metrics: {
        stars: '2.2k',
        forks: '410',
        contributors: '15',
        lastCommit: '1 day ago',
        license: 'MIT'
      },
      author: {
        name: 'Alex Chen',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        github: 'alexchen'
      },
      learningPoints: [
        'Next.js SSR & ISR',
        'MDX integration',
        'Algolia search',
        'Dark mode implementation',
        'SEO optimization'
      ]
    },
    {
      id: 'jamstack-3',
      name: 'Portfolio Pro',
      description: 'Portfolio template untuk creative professionals',
      longDescription: 'Portfolio website modern dengan gallery, case studies, dan contact form. Menggunakan Gatsby untuk performa maksimal dan Contentful sebagai CMS.',
      stack: 'JAMstack',
      technologies: ['Gatsby', 'Contentful', 'Framer Motion', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://portfoliopro.netlify.app',
      githubUrl: 'https://github.com/username/portfolio-pro',
      features: [
        'Case studies',
        'Image gallery',
        'Contact form',
        'Smooth animations',
        'CMS integration',
        'SEO optimized'
      ],
      metrics: {
        stars: '1.5k',
        forks: '280',
        contributors: '6',
        lastCommit: '2 weeks ago',
        license: 'MIT'
      },
      author: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
        github: 'emilydavis'
      },
      learningPoints: [
        'Headless CMS integration',
        'Framer Motion animations',
        'Image optimization',
        'Form handling',
        'Performance metrics'
      ]
    }
  ],

  lamp: [
    {
      id: 'lamp-1',
      name: 'Laravel E-commerce',
      description: 'Full-featured e-commerce platform with Laravel',
      longDescription: 'Platform e-commerce lengkap dengan manajemen produk, keranjang belanja, payment gateway, dan admin dashboard. Dibangun dengan Laravel dan MySQL.',
      stack: 'LAMP',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://laravelecommerce.test',
      githubUrl: 'https://github.com/username/laravel-ecommerce',
      features: [
        'Product management',
        'Shopping cart',
        'Payment integration',
        'Order tracking',
        'Admin dashboard',
        'Customer accounts'
      ],
      metrics: {
        stars: '2.9k',
        forks: '520',
        contributors: '28',
        lastCommit: '4 days ago',
        license: 'MIT'
      },
      author: {
        name: 'David Brown',
        avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        github: 'davidbrown'
      },
      learningPoints: [
        'Laravel MVC pattern',
        'Eloquent ORM',
        'Payment gateway',
        'Authentication & authorization',
        'Database relationships'
      ]
    },
    {
      id: 'lamp-2',
      name: 'WordPress News Portal',
      description: 'Modern news portal dengan custom WordPress theme',
      longDescription: 'Portal berita modern dengan custom WordPress theme, advanced custom fields, dan optimized performance. Mendukung multi-author, kategori, dan tag.',
      stack: 'LAMP',
      technologies: ['WordPress', 'PHP', 'MySQL', 'ACF', 'Timber'],
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://newsportal.wordpress.test',
      githubUrl: 'https://github.com/username/news-portal',
      features: [
        'Custom post types',
        'Advanced custom fields',
        'Multi-author support',
        'Category & tag system',
        'Search functionality',
        'Related posts'
      ],
      metrics: {
        stars: '1.2k',
        forks: '180',
        contributors: '9',
        lastCommit: '1 month ago',
        license: 'GPL'
      },
      author: {
        name: 'Chris Taylor',
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        github: 'christaylor'
      },
      learningPoints: [
        'WordPress theme development',
        'Advanced Custom Fields',
        'Timber templating',
        'WordPress hooks',
        'Database optimization'
      ]
    },
    {
      id: 'lamp-3',
      name: 'CodeIgniter CRM',
      description: 'Customer relationship management system',
      longDescription: 'CRM system untuk bisnis kecil dengan fitur manajemen kontak, leads, tasks, dan reporting. Dibangun dengan CodeIgniter framework.',
      stack: 'LAMP',
      technologies: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://crm.codeigniter.test',
      githubUrl: 'https://github.com/username/ci-crm',
      features: [
        'Contact management',
        'Lead tracking',
        'Task management',
        'Analytics dashboard',
        'Email integration',
        'Report generation'
      ],
      metrics: {
        stars: '980',
        forks: '150',
        contributors: '7',
        lastCommit: '2 weeks ago',
        license: 'MIT'
      },
      author: {
        name: 'Robert Martin',
        avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
        github: 'robertmartin'
      },
      learningPoints: [
        'CodeIgniter framework',
        'MVC architecture',
        'Chart.js integration',
        'PDF generation',
        'Export functionality'
      ]
    }
  ],

  pythonDjango: [
    {
      id: 'django-1',
      name: 'Analytics Dashboard',
      description: 'Business analytics platform with Django',
      longDescription: 'Platform analytics untuk bisnis dengan visualisasi data real-time, custom reports, dan user management. Menggunakan Django, PostgreSQL, dan Chart.js.',
      stack: 'Python Django',
      technologies: ['Django', 'Python', 'PostgreSQL', 'Chart.js', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://analytics-django.herokuapp.com',
      githubUrl: 'https://github.com/username/django-analytics',
      features: [
        'Real-time analytics',
        'Custom reports',
        'Data visualization',
        'User management',
        'API endpoints',
        'Export to PDF/Excel'
      ],
      metrics: {
        stars: '2.1k',
        forks: '380',
        contributors: '16',
        lastCommit: '6 days ago',
        license: 'MIT'
      },
      author: {
        name: 'Lisa Wang',
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
        github: 'lisawang'
      },
      learningPoints: [
        'Django ORM advanced queries',
        'Data visualization',
        'Background tasks',
        'Caching strategies',
        'REST API with DRF'
      ]
    },
    {
      id: 'django-2',
      name: 'Task Manager API',
      description: 'RESTful API untuk aplikasi task management',
      longDescription: 'Backend API untuk aplikasi task management dengan Django REST Framework. Mendukung authentication, filtering, pagination, dan rate limiting.',
      stack: 'Python Django',
      technologies: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Redis'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      demoUrl: 'https://taskmanager-api.herokuapp.com/api',
      githubUrl: 'https://github.com/username/taskmanager-api',
      features: [
        'RESTful API',
        'JWT authentication',
        'Task CRUD',
        'User management',
        'Rate limiting',
        'API documentation'
      ],
      metrics: {
        stars: '1.6k',
        forks: '290',
        contributors: '11',
        lastCommit: '3 weeks ago',
        license: 'MIT'
      },
      author: {
        name: 'Tom Anderson',
        avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
        github: 'tomanderson'
      },
      learningPoints: [
        'Django REST Framework',
        'JWT authentication',
        'API versioning',
        'Caching with Redis',
        'API documentation'
      ]
    }
  ]
};

// Fungsi helper untuk mendapatkan contoh project
export const getProjectsByStack = (stackId) => {
  return projectExamples[stackId] || [];
};

export const getAllProjects = () => {
  let allProjects = [];
  Object.keys(projectExamples).forEach(stack => {
    allProjects = [...allProjects, ...projectExamples[stack]];
  });
  return allProjects;
};

export const getFeaturedProjects = (limit = 4) => {
  const allProjects = getAllProjects();
  // Sort by stars or other criteria
  return allProjects.sort((a, b) => b.metrics.stars - a.metrics.stars).slice(0, limit);
};

export const getProjectById = (id) => {
  const allProjects = getAllProjects();
  return allProjects.find(project => project.id === id) || null;
};

// Data statistik
export const projectStats = {
  totalProjects: getAllProjects().length,
  totalStars: getAllProjects().reduce((acc, curr) => {
    const stars = parseInt(curr.metrics.stars.replace('k', '000')) || 0;
    return acc + stars;
  }, 0),
  totalContributors: getAllProjects().reduce((acc, curr) => acc + curr.metrics.contributors, 0),
  mostUsedStack: 'MERN',
  averageStars: '2.1k'
};