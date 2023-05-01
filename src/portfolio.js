﻿/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";

// Your Summary And Greeting Section

const greeting = {
  username: "Sandeep Tiwari",
  title: "Hi all, I'm Sandeep",
  subTitle: emoji(
    "A Fullstack Developer 👨‍💻 | Data Science Enthusiast 📊 | Tech Writer ✍️ "
  ),
  resumeLink:
    "https://docs.google.com/document/d/13hBmlGjSFjGZBr2H_9Oazq04QpgKg6WB/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/sandeeptiwari",
  linkedin: "https://www.linkedin.com/in/sanditiwari/",
  gmail: "sandeep15mca@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/1245234/sandeep-tiwari",
  twitter: "https://twitter.com/sandi15tiwari",
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "I am an accomplished Software Engineer with over 11+ years of experience writing full-stack applications for the IT industry. I have experience with modern backend Java development utilizing many components of the Spring Framework. " +
      "I also have 4+ years of experience writing a performant frontend in JavaScript utilizing AngularJS And Angular framework.",
  skills: [
    emoji(
      "⚡ Developed a microservices-based architecture using Docker and Kubernetes to improve scalability and reduce deployment time for a financial services application"
    ),
    emoji("⚡ Managed the entire software development life cycle for a mobile application, Angular Application, including requirements gathering, design, development, testing, deployment, and maintenance"),
    emoji(
      "⚡ Designed and implemented a high-throughput, low-latency messaging system using Apache Kafka to enable real-time data processing for a large e-commerce platform, etc"
    ),
    emoji(
      "⚡ Designed and developed responsive and user-friendly web applications using Angular, HTML, CSS, and JavaScript"
    ),
    emoji(
        "⚡ Collaborated with designers to ensure the implementation of responsive and visually appealing UI designs"
    )
  ],

  softwareSkills: [
    {
      skillName: "java",
      classname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "reactJS",
      classname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "maven",
      classname: "vscode-icons:file-type-maven",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "git",
      classname: "logos:git-icon",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "jenkins",
      classname: "vscode-icons:file-type-jenkins",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "postgres",
      classname: "logos:postgresql",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "angular",
      classname: "logos-angular",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "kafka",
      classname: "simple-icons:kafka",
      style: {
        backgroundColor: "white",
        color: "#D00000",
      },
    },
    {
      skillName: "android",
      classname: "simple-icons:android",
      style: {
        backgroundColor: "transparent",
      },
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Lead",
      company: "Larsen & Toubro Infotech Limited ",
      companylogo: require("./assets/images/lti.png"),
      date: "April 2019 – Dec 2021",
      desc:
        "Lead developer of a team working on insurance related enterprise application.",
      descBullets: [
        "Assisted migrating a legacy JSF application to an AngularJS 1.8 SPA.",
        "Helped create a HATEOAS-driven REST API using Spring Boot with Spring Data. Subsequently led the effort to build documentation using Spring REST Docs to guarantee the API is always accurately documented.",
        "Architected a high-performance AngularJS framework to quickly and accurately create hundreds of business entities by uploading spreadsheets of data, saving clients time and resources when entering an insured\\'s information into our system.",
        "Integrated a JavaScript testing framework into our developers\\' daily workflow and created documentation for how best to create the tests. Over time, the test suite has risen to over 3,000 tests written by developers of all skill levels on the team.",
        "Served as Scrum Master for a team composed of developers, business analysts, and test analysts. Also worked on a company-wide pilot program to help spread agile across the corporation by defining best practices, sharing successes, and discussing lessons learned.",
        "Participated in organization-wide development standards meetings to help move team and enterprise best practices forward. Also facilitated large group discussions and presented on several technical topics to developers across the company to help drive culture shift toward knowledge sharing between teams.",
        "Served as mentor and technical leader to developers of varying skill levels and experience across multiple teams both on and off-shore."
      ]
    },
    {
      role: "Team Lead",
      company: "Aricent [Current is capgemini]",
      companylogo: require("./assets/images/aricent.png"),
      date: "Oct 2014 – March 2019",
      desc:
        "Successfully led a team of developers in the design, development, and implementation of enterprise applications for clients in various industries",
      descBullets: [
        "Collaborated with cross-functional teams to identify project requirements, define project scope, and develop project timelines and budgets",
        "Designed and developed microservices-based software solutions for clients in various industries.",
        "Coordinated team efforts to ensure timely and quality delivery of software products",
        "Mentored and trained junior developers on best practices in software development, resulting in improved team performance and client satisfaction.",
        "Integrated a JavaScript testing framework into our developers\\' daily workflow and created documentation for how best to create the tests. Over time, the test suite has risen to over 3,000 tests written by developers of all skill levels on the team.",
        "Served as Scrum Master for a team composed of developers, business analysts, and test analysts. Also worked on a company-wide pilot program to help spread agile across the corporation by defining best practices, sharing successes, and discussing lessons learned.",
        "Participated in code reviews, testing, and debugging activities to ensure the quality and reliability of software products.",
        "Researched and implemented new technologies and tools to enhance software development processes and improve team efficiency."
      ]
    },
    {
      role: "Mobile Developer",
      company: "Kiwi Tech India",
      companylogo: require("./assets/images/kiwi.png"),
      date: "July 2013 – Oct-2014",
      desc:
          "Successfully migrated the existing feature to a new and improved system, resulting in increased efficiency and productivity.",
      descBullets: [
        "Developed and implemented a strategy for the migration of the existing system to a new system, resulting in enhanced user experience and streamlined processes.",
        "Demonstrated adaptability and problem-solving skills by successfully leading the migration of the existing system to a new microservice architecture.",
      ],
    }
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sandeeptiwari", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Your certifications

const certifications = {
  certifications: [
    {
      title: "Java8",
      subtitle: "- Jose Portilla",
      logo_path: "pierian-data-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-23220abe-444e-4265-9afc-639ecf52916c/",
      alt_name: "Java 8",
      color_code: "#FEF6E6",
    },
    {
      title: "Android",
      subtitle: "- Android NDK",
      logo_path: "rahulshettyacademy-logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d420e92f-3aca-4363-b563-0b886919f6d6/",
      alt_name: "RahulShettyAcademy",
      color_code: "#FDE9EA",
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "",
      title: "",
      description:
        "",
    }
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "123",
  email_address: "sandeep15mca@gmail.com",
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  certifications,
};
