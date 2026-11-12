export const personalInfo = {
  name: 'Dayanand Badiger',
  title: 'Software Trainee Engineer | Information Science Engineering Graduate',
  tagline: 'Software Trainee Engineer | Full Stack Developer',
  summary:
    'Information Science and Engineering graduate with practical experience in full-stack software development and a strong foundation in C#, .NET, PostgreSQL, Python, Django, React.js and REST APIs. Currently working as a Software Trainee Engineer, contributing to desktop application development, database operations, debugging and application maintenance. Capable of building robust, scalable and maintainable software applications from concept to deployment.',
  phone: '+917676406262',
  email: 'bdayanand21@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dayanandbadiger',
  github: 'https://github.com/BDayanand',
  resumeUrl: 'resume.html',
};

export const skills = {
  'Programming Languages': ['C#', 'Python', 'JavaScript', 'SQL'],
  'Web Technologies & Frameworks': ['HTML', 'CSS', 'React.js', 'Django', '.NET'],
  Databases: ['PostgreSQL', 'MongoDB', 'Firebase'],
  'Tools & Platforms': ['Visual Studio', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Render'],
  'Core Concepts': [
    'Object-Oriented Programming (OOP)',
    'REST APIs',
    'Authentication & Authorization',
    'JWT',
    'System Design',
  ],
};

export const projects = [
  {
    title: 'MedStock – Medical College Inventory Management System',
    subtitle: '',
    bullets: [
      'Developed a full-stack medical inventory management system using React, Django REST Framework, Firebase Authentication and Firestore.',
      'Implemented secure authentication, inventory tracking, supplier management, transaction management, and department-wise allocation through RESTful APIs.',
      'Designed interactive dashboards with inventory analytics, barcode/QR scanning, audit logs, notifications, and export functionality for efficient inventory management.',
    ],
    tech: ['React', 'Django REST Framework', 'Firebase Authentication', 'Firestore', 'RESTful APIs'],
  },
  {
    title: 'Cybersecurity Framework for Rural Digital Banking',
    subtitle: 'Final Year Project',
    bullets: [
      'Developed a secure mobile banking application using React Native and a web-based admin dashboard using React.js, integrating both with shared REST APIs built using Node.js, Express.js, and MongoDB.',
      'Implemented JWT authentication, OTP verification, and MPIN-based login for secure access, and integrated Brain.js-based MLP for real-time fraud detection and identification of suspicious transactions.',
      'Implemented Hyperledger Fabric blockchain for secure transaction records and SQLite for offline banking support in low-connectivity areas, along with an administrative dashboard to monitor transactions.',
    ],
    tech: ['React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Brain.js', 'Hyperledger Fabric', 'SQLite'],
  },
  {
    title: 'Heart Disease Prediction Using Machine Learning',
    subtitle: '',
    bullets: [
      'Developed a web-based heart disease prediction system using Python, Flask, and machine learning to assess the risk of heart disease based on patient health parameters.',
      'Implemented and evaluated multiple machine learning models, including Random Forest, SVM, MLP, and Neural Network, to improve prediction accuracy and support data-driven diagnosis.',
      'Built an interactive interface with patient data management, prediction results, and an admin dashboard.',
    ],
    tech: ['Python', 'Flask', 'Scikit-learn', 'Machine Learning', 'HTML', 'CSS'],
  },
];

export const experience = [
  {
    role: 'Software Trainee Engineer',
    company: 'Fleximage Technology, Bengaluru',
    period: 'July 2026 – Present',
    bullets: [
      'Contributing to application development and maintenance, including feature enhancements, bug fixes and application improvements.',
      'Developing and modifying application features using C#, .NET, OOP & PostgreSQL.',
      'Working with PostgreSQL for data retrieval, queries and database operations to support application features.',
      'Debugging issues related to application functionality, user permissions, and data handling.',
    ],
  },
  {
    role: 'Python Full Stack Development Training',
    company: 'QSpiders',
    period: '',
    bullets: [
      'Completed comprehensive training in Python, HTML, CSS, JavaScript, SQL and Django with a focus on full stack web development.',
      'Gained hands-on experience in Django, REST APIs, authentication, CRUD operations, database integration, and form handling through practical assignments.',
      'Strengthened programming and problem-solving skills through coding exercises and practical assignments.',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering in Information Science and Engineering',
    institution: 'Dayananda Sagar College of Engineering, Bengaluru',
    period: '2023 – 2026',
  },
  {
    degree: 'Diploma in Computer Science and Engineering',
    institution: 'Government Polytechnic, Channasandra, Bengaluru',
    period: '2020 – 2023',
  },
];

export const certifications = [
  {
    title: 'Artificial Intelligence',
    issuer: 'Coursera',
    description: 'Online certification covering core AI concepts, machine learning algorithms, and practical implementations.',
  },
];
