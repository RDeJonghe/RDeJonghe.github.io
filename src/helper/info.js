const info = {
  profile: {
    name: 'Ryan DeJonghe',
    photoSource: new URL('../assets/profile-photo.png', import.meta.url).href,
    introBoldArray: [
      { text: 'Software Developer', isBold: true },
      { text: ' for Denver Public Schools with expertise in ', isBold: false },
      { text: ' AI integrations. ', isBold: true },
    ],
    summary: `Driven to create innovative solutions that improve learning outcomes and streamline administrative tasks for educational institutions.`
  },
  experience: {
    headerTitle: 'Experience',
    listArray: [
      {
        title: 'Software Developer - Denver Public Schools',
        dates: 'Jul 2023 - Present',
        imageSource: new URL('../assets/dps.png', import.meta.url).href,
        descriptionArray: [
          'Rebuilding the course catalog application',
          'Revising math and literacy capstone logic to meet new standards',
          'Developing documentation to standardize a yearly data roll forward process',
        ],
        hoverColor: '#CCECFF',
        // link: 'https://portal.dpsk12.org/web/course-catalog',
        linkTitle: 'Course Catalog',
      },
      {
        title: 'CRM & Technology Specialist - Colorado State University Pueblo',
        dates: 'May 2020 - Dec 2024',
        imageSource: new URL('../assets/csup_logo.png', import.meta.url).href,
        descriptionArray: [
          'Managing the application to the university',
          'Authoring queries and executive level reports to support data driven decision making',
          'University wide implementation of the Slate CRM'
        ],
        hoverColor: '#CCECFF',
      },
      {
        title: 'Co-Creator - Seamless CICD',
        dates: 'Nov 2022 - Jun 2023',
        imageSource: new URL('../assets/s-logo.png', import.meta.url).href,
        descriptionArray: [
          'Coding a frontend user interface in React to monitor pipeline runs',
          'The backend API and the creation of routes and data structures',
          'Working as a remote team and prioritizing productivity to meet deadlines'
        ],
        // link: 'https://seamless-cicd.com/',
        linkTitle: 'Case Study',
        hoverColor: '#CCECFF',
      },
    ]
  },
  skills: {
    headerTitle: 'Select Skills',
    skillsArray: [
      {
        title: 'JavaScript',
        description: '',
        imageSource: new URL('../assets/javascript.svg', import.meta.url).href,
        hoverColor: 'rgba(240, 219, 79, 0.5)',
      },
      {
        title: 'TypeScript',
        description: '',
        imageSource: new URL('../assets/typescript.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 122, 204, 0.5)',
      },
      {
        title: 'Vue Framework',
        description: 'Frontend Development',
        imageSource: new URL('../assets/vue.svg', import.meta.url).href,
        hoverColor: 'rgba(65, 184, 131, 0.5)',
      },
      {
        title: 'SQL Server',
        description: '',
        imageSource: new URL('../assets/sqlserver.svg', import.meta.url).href,
        hoverColor: 'rgba(169, 29, 34, 0.5)',
      },
      {
        title: 'C# Programming',
        description: '',
        imageSource: new URL('../assets/csharp.svg', import.meta.url).href,
        hoverColor: 'rgba(104, 33, 122, 0.5)',
      },
      {
        title: '.Net Framework',
        description: '',
        imageSource: new URL('../assets/net.svg', import.meta.url).href,
        hoverColor: 'rgba(13, 130, 202, 0.5)',
      },
      {
        title: 'OpenAI API',
        description: '',
        imageSource: new URL('../assets/openai.svg', import.meta.url).href,
        hoverColor: 'rgba(116, 170, 156, 0.5)',
      },
      {
        title: 'Ruby',
        description: '',
        imageSource: new URL('../assets/ruby.svg', import.meta.url).href,
        hoverColor: 'rgba(158, 12, 0, 0.5)',
      },
    ],
  },
  education: {
    headerTitle: 'Education',
    listArray: [
      {
        title: 'Master of Arts - San Diego State University',
        dates: 'Aug 2011 - Dec 2013',
        imageSource: new URL('../assets/sdsu-athletics.png', import.meta.url).href,
        descriptionArray: [
          'The Spanish linguistics program',
          'My experience teaching undergraduate Spanish classes',
          'Working for the Research Foundation'
        ],
        hoverColor: '#CCECFF',
      }
    ]
  }
}

export default info;