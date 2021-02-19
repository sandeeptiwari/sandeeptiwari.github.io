module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Sandeep Tiwari',
    // Main Site Title
    title: `Sandeep Tiwari`,
    // Description that goes under your name in main bio
    description: `Senior Software Engineer with a history of high-quality application development.`,
    // Optional: Twitter account handle
    author: `sandi15tiwari`,
    // Optional: Github account URL
    github: `https://github.com/sandeeptiwari/`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/techie-sandeep-tiwari/`,
    // Content of the About Me section
    about: `I am an accomplished Software Engineer with over 8+ years of experience writing full-stack applications for the insurance industry. I have experience with modern backend Java development utilizing many components of the Spring Framework. I also have 4+ years of experience writing a performant frontend in JavaScript utilizing AngularJS.`,
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Larsen & Toubro Infotech Limited ',
        description: 'Team Lead, April 2019 - Present',
        link: 'https://www.lntinfotech.com/',
        children: [
          {
            description: 'Lead developer of a team working on continual improvements to an in-house policy administration system.'
          },
          {
            description: 'Assisted migrating a legacy JSF application to an AngularJS 1.8 SPA.'
          },
          {
            description: 'Helped create a HATEOAS-driven REST API using Spring Boot with Spring Data. Subsequently led the effort to build documentation using Spring REST Docs to guarantee the API is always accurately documented.'
          },
          {
            description: 'Architected a high-performance AngularJS framework to quickly and accurately create hundreds of business entities by uploading spreadsheets of data, saving clients time and resources when entering an insured\'s information into our system.'
          },
          {
            description: 'Integrated a JavaScript testing framework into our developers\' daily workflow and created documentation for how best to create the tests. Over time, the test suite has risen to over 3,000 tests written by developers of all skill levels on the team.'
          },
          {
            description: 'Served as Scrum Master for a team composed of developers, business analysts, and test analysts. Also worked on a company-wide pilot program to help spread agile across the corporation by defining best practices, sharing successes, and discussing lessons learned.'
          },
          {
            description: 'Participated in organization-wide development standards meetings to help move team and enterprise best practices forward. Also facilitated large group discussions and presented on several technical topics to developers across the company to help drive culture shift toward knowledge sharing between teams.'
          },
          {
            description: 'Served as mentor and technical leader to developers of varying skill levels and experience across multiple teams both on and off-shore.'
          }
        ]
      },
      {
        name: 'Aricent Alran Group',
        description: 'Team Lead, May 2017 - March 2019',
        link: 'https://	aricent.com/',
        children: [
          {
            description: 'Member of a project tasked to replace a legacy policy administration system with Guidewire PolicyCenter.'
          },
          {
            description: 'Implemented an efficient tool to extract, store, and version ISO XML electronic rating content into SQL Server databases using Hibernate. Subsequently, designed and developed an extensible Java API to update and retrieve the rating content for several consumers.'
          },
          {
            description: 'Constructed an application that interacted with several external vendors to enable real-time ordering, storage, and retrieval of experience rating data.'
          },
          {
            description: 'Developed an enterprise integration that synchronized agent and agency licensing information from an internal web service to a running policy administration system.'
          },
          {
            description: 'Wrote significant logic to automate several manual user workflows that kept data synchronized between key entities, which resulted in a higher level of system data integrity and a superior user experience.'
          },
          {
            description: 'Designed and implemented the refactoring of major entities in a production code base to allow for greater code reuse throughout the project’s lifecycle.'
          },
          {
            description: 'Responsible for performing monthly code base merges from a production system and testing existing functionality.'
          }
        ]
      },
      {
        name: 'Aricent Alran Group',
        description: 'Senior Software Engineer, Oct 2014 - July 2017',
        link: 'https://	aricent.com/',
        children: [
          {
            description: 'Member of a project tasked to replace a legacy policy administration system with Guidewire PolicyCenter.'
          },
          {
            description: 'Implemented an efficient tool to extract, store, and version ISO XML electronic rating content into SQL Server databases using Hibernate. Subsequently, designed and developed an extensible Java API to update and retrieve the rating content for several consumers.'
          },
          {
            description: 'Constructed an application that interacted with several external vendors to enable real-time ordering, storage, and retrieval of experience rating data.'
          },
          {
            description: 'Developed an enterprise integration that synchronized agent and agency licensing information from an internal web service to a running policy administration system.'
          },
          {
            description: 'Wrote significant logic to automate several manual user workflows that kept data synchronized between key entities, which resulted in a higher level of system data integrity and a superior user experience.'
          },
          {
            description: 'Designed and implemented the refactoring of major entities in a production code base to allow for greater code reuse throughout the project’s lifecycle.'
          },
          {
            description: 'Responsible for performing monthly code base merges from a production system and testing existing functionality.'
          }
        ]
      },
      {
        name: 'KiwiTech India Pvt.Ltd.',
        description: 'Software Developer, July 2013 - Oct 2014',
        link: 'https://www.kiwitech.com/',
        children: [
          {
            description: 'Part of a Revenue Integrity team that tracked payment progress from more than sixty insurance companies sending payments on behalf of over one million patients that visit The University of Iowa Hospitals and Clinics each year.'
          },
          {
            description: 'Developed and supported efficient user-centered software for tracking hospital finances for more than four million patient charges a year.'
          },
          {
            description: 'Developed logic that systematically handled 60% of each analyst’s potential workload, greatly impacting a team of analysts who had identified and collected over $25 million between 2005 and 2010.'
          },
          {
            description: 'Provided hands-on training and technical assistance to a group of analysts who used our software on a daily basis.'
          },
          {
            description: 'Created informative reports using metrics collected from applications showing where analysts could better focus their efforts.'
          }
        ]
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Java, JavaScript, Kotlin',
      },
      {
        name: 'Frameworks',
        description: 'Spring, Spring Boot, Spring Data, AngularJS',
      },
      {
        name: 'Other',
        description:
          'Docker, CI / CD, Unit Testing, Hypermedia-based API design, Reactive Programming, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-20537868-1`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333f99`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
