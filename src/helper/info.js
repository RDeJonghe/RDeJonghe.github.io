const info = {
  profile: {
    name: 'Ryan DeJonghe',
    photoSource: new URL('../assets/profile-photo.png', import.meta.url).href,
    introBoldArray: [
      // { text: 'Software Developer', isBold: false },
      // { text: ' for Denver Public Schools and ', isBold: false },
      // { text: 'creator of AI integrations', isBold: false },
      // { text: '.', isBold: false },
      { text: 'Software Developer', isBold: true },
      { text: ' for Denver Public Schools with expertise in ', isBold: false },
      { text: ' AI integrations. ', isBold: true },
    ],
    summary: `Driven to create innovative technology solutions that improve learning outcomes and streamline administrative tasks for educational institutions.`
  },
  experience: {
    headerTitle: 'Experience',
    listArray: [
      {
        title: 'Software Developer - Denver Public Schools',
        dates: 'Jul 2023 - Present',
        imageSource: new URL('../assets/dps.png', import.meta.url).href,
        descriptionArray: [
          'The rebuild of the course catalog application',
          'Revising math capstone logic to meet new educational standards',
          'Leading a knowledge centered service initiative to improve documentation',
          // 'Built dynamic, user-friendly interfaces using Vue3, leveraging its Composition API to enhance maintainability and scalability',
          // 'Designed and optimized complex SQL queries, stored procedures, and views to support robust data-driven applications',
          // 'Led a comprehensive rebuild of the Course Catalog application, coordinating improvements to all full stack components'
        ],
        hoverColor: 'rgba(0, 118, 189, 0.1)',
        link: 'https://portal.dpsk12.org/web/course-catalog',
        linkTitle: 'Course Catalog',
      },
      {
        title: 'CRM & Technology Specialist - Colorado State University Pueblo',
        dates: 'May 2020 - Dec 2024',
        imageSource: new URL('../assets/csup_logo.png', import.meta.url).href,
        descriptionArray: [
          'Having responsibility for managing the application to the university',
          'Authoring queries and executive level reports to support data driven decision making',
          'Overseeing university wide implementation of the Slate CRM as a super user'
          // 'Served as a superuser of the Slate CRM, managing system configurations and ensuring optimal performance',
          // 'Oversaw the university application process, resolving technical issues and enhancing user experience',
          // 'Maintained payment components to ensure accurate payment processing',
          // 'Developed advanced queries and executive-level reports to support data-driven decision making',
          // 'Planned and implemented production code changes, ensuring quality and adherence to timelines',
        ],
        hoverColor: 'rgba(0, 118, 189, 0.1)',
        link: 'https://technolutions.com/',
        linkTitle: 'Slate',
      },
      {
        title: 'Co-Creator - Seamless CICD',
        dates: 'Nov 2022 - Jun 2023',
        imageSource: new URL('../assets/s-logo.png', import.meta.url).href,
        descriptionArray: [
          // 'Built a CICD pipeline for containerized microservices on AWS',
          'Coding a frontend user interface in React to monitor pipeline runs',
          'The backend API and the creation of routes and data structures',
          'Working as a remote team and prioritizing productivity to meet deadlines'
        ],
        link: 'https://seamless-cicd.com/',
        linkTitle: 'Read Case Study',
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      }
    ]
  },
  skills: {
    headerTitle: 'Select Skills',
    skillsArray: [
      {
        title: 'Vue Framework',
        description: '',
        imageSource: new URL('../assets/vue.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: 'TypeScript',
        description: '',
        imageSource: new URL('../assets/typescript.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: 'JavaScript',
        description: '',
        imageSource: new URL('../assets/javascript.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: 'SQL Server',
        description: '',
        imageSource: new URL('../assets/sqlserver.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: 'OpenAI API',
        description: '',
        imageSource: new URL('../assets/openai.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: 'Ruby',
        description: '',
        imageSource: new URL('../assets/ruby.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: 'C# Development',
        description: '',
        imageSource: new URL('../assets/csharp.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      },
      {
        title: '.Net Framework',
        description: '',
        imageSource: new URL('../assets/net.svg', import.meta.url).href,
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      }
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
          'The Spanish program with an emphasis in linguistics',
          'My experience working for the Research Foundation and as a Teaching Associate',
          'How I was recognized as the outstanding student in the linguistics track'
        ],
        hoverColor: 'rgba(0, 118, 189, 0.1)',
      }
    ]
  }
}

export default info;