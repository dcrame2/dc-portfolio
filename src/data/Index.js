export const navData = {
  logo: { url: "/logo/logo_no_bg.png", alt: "DC Logo" },
  homeLink: "/",
  navLinks: [
    {
      text: "About",
      url: "/#about",
    },
    {
      text: "Work History",
      url: "/#work-history",
    },
    {
      text: "Projects",
      url: "/#projects",
    },
    {
      text: "Contact",
      url: "/#contact",
    },
  ],
};

export const heroData = {
  imgD: {
    url: "/logo/d_logo.png",
    alt: "D Logo",
  },
  imgC: {
    url: "/logo/c_logo.png",
    alt: "D Logo",
  },
  eyebrow: "Hi, I am",
  name: "Dylan Cramer",
  title: "Full Stack Developer",
};

export const aboutData = {
  id: "about",
  header: {
    eyebrow: "Learn",
    title: "About",
  },
  aboutParagraph: `<p>Hello! I am a passionate Full Stack Web Developer, specializing in the dynamic world of JavaScript. I am steady taking Udemy courses, watching YouTube, and reading the latest tech news.<br /><br /> My journey began with earning a Bachelor of Science in Information Systems - Web Application Development from Illinois State University in 2018. With a diverse skill set and proficiency in a range of programming languages and tools, I am ready to embark on new challenges and create innovative, cutting-edge web experiences. </p>`,
  cards: [
    {
      skill: "JavaScript",
      icon: {
        src: "/icons/logo-javascript.svg",
        alt: "JavaScript Icon",
      },
    },
    {
      skill: "React.js",
      icon: {
        src: "/icons/logo-react.svg",
        alt: "React.js Icon",
      },
    },
    {
      skill: "Next.js",
      icon: {
        src: "/icons/logo-next.svg",
        alt: "Next.js Icon",
      },
    },
    {
      skill: "HTML",
      icon: {
        src: "/icons/logo-html.svg",
        alt: "JavaScript Icon",
      },
    },
    {
      skill: "CSS",
      icon: {
        src: "/icons/logo-css.svg",
        alt: "CSS Icon",
      },
    },
    {
      skill: "Node.js",
      icon: {
        src: "/icons/logo-node.svg",
        alt: "Node.js Icon",
      },
    },
    {
      skill: "PHP",
      icon: {
        src: "/icons/logo-php.svg",
        alt: "PHP Icon",
      },
    },
    {
      skill: "WordPress",
      icon: {
        src: "/icons/logo-wordpress.svg",
        alt: "WordPress Icon",
      },
    },
    {
      skill: "Strapi",
      icon: {
        src: "/icons/logo-strapi.svg",
        alt: "Strapi Icon",
      },
    },
    {
      skill: "Git",
      icon: {
        src: "/icons/logo-git.svg",
        alt: "Git Icon",
      },
    },
    {
      skill: "SASS",
      icon: {
        src: "/icons/logo-sass.svg",
        alt: "SASS Icon",
      },
    },
    {
      skill: "Styled Components",
      icon: {
        src: "/icons/logo-styled-components.svg",
        alt: "Styled Components Icon",
      },
    },
    // {
    //   skill: "TypeScript",
    //   icon: {
    //     src: "/icons/logo-typescript.svg",
    //     alt: "TypeScript Icon",
    //   },
    // },
    {
      skill: "React Native",
      icon: {
        src: "/icons/logo-react-native.svg",
        alt: "React Native Icon",
      },
    },
    {
      skill: "Postgres SQL",
      icon: {
        src: "/icons/logo-postgresql.svg",
        alt: "Postgres SQL Icon",
      },
    },
    {
      skill: "Framer Motion",
      icon: {
        src: "/icons/logo-framer-motion.svg",
        alt: "Framer Motion Icon",
      },
    },
    {
      skill: "Bash",
      icon: {
        src: "/icons/logo-bash.svg",
        alt: "Bash Icon",
      },
    },
  ],
};

export const historyData = {
  id: "work-history",
  logo: {
    src: "/logo/logo_no_bg.png",
    alt: "DC Logo",
  },
  header: {
    eyebrow: "Learn",
    title: "Work",
  },
  companies: [
    "Impact Networking",
    "Text2Drive LLC",
    "SOGO Marketing",
    "Plainfield Central HS",
  ],
  companiesInfo: [
    {
      title: "Web Developer",
      company: "Impact Networking",
      timePeriod: "June 2022 - Present",
      jobDesc: [
        " Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, Strapi, React, WordPress, Next.js, and SASS",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      title: "Web Specialist",
      company: "Text2Drive LLC",
      timePeriod: "November 2018 - May 2022",
      jobDesc: [
        "Implementing & deploying our mobile Online Bill Pay solution through our gateway provider. Connecting our software to dealerships Merchant Accounts through APIs.",
        "Installing & troubleshooting EMV Chip Readers to the dealerships Internet network.",
      ],
    },
    {
      title: "Web Developer",
      company: "SOGO Marketing",
      timePeriod: "November 2018 - February 2019",
      jobDesc: [
        "Creating & maintaining clients WordPress websites using JavaScript & HTML/CSS",
        "Android Mobile Application new feature implementation & bug fixes",
      ],
    },
    {
      title: "Assistant Wrestling Coach",
      company: "Plainfield Central HS",
      timePeriod: "October 2020 - Present",
      jobDesc: [
        "Coaching High School athletics for all grade levels: Freshman - Seniors",
        "Teach and lead new wrestling skills during practice and meets/tournaments",
      ],
    },
  ],
};

export const projectData = {
  id: "projects",
  header: {
    eyebrow: "Learn",
    title: "Projects",
  },

  projects: [
    {
      href: "/impact-networking",
      img: {
        src: "/projects/impactmybiz.png",
        alt: "Impact Homepage",
      },
      projectTitle: "Impact Networking",
    },
    {
      href: "/beggars-pizza",
      img: {
        src: "/projects/beggars_pizza.png",
        alt: "Beggars Pizza Homepage",
      },
      projectTitle: "Beggars Pizza",
    },
    {
      href: "/dot-security",
      img: {
        src: "/projects/dot_security.png",
        alt: "DOT Security Homepage",
      },
      projectTitle: "DOT Security",
    },
    {
      href: "/tulayna-limo-service",
      img: {
        src: "/projects/tulayna.png",
        alt: "Tulayna Limo Service Homepage",
      },
      projectTitle: "Tulayna Limo",
    },
    {
      href: "/zmac-transport",
      img: {
        src: "/projects/zmac.png",
        alt: "Zmac Transport",
      },
      projectTitle: "Zmac Transport",
    },
    {
      href: "/rowcare",
      img: {
        src: "/projects/rowcare.png",
        alt: "Rowcare Homepage",
      },
      projectTitle: "Rowcare",
    },
    {
      href: "/nggilbert",
      img: {
        src: "/projects/nggilbert.png",
        alt: "NG Gilbert Homepage",
      },
      projectTitle: "NG Gilbert",
    },
    {
      href: "/chicago-living-group",
      img: {
        src: "/projects/chicago_living.png",
        alt: "Chicago Living Homepage",
      },
      projectTitle: "Chicago Living",
    },
    {
      href: "/mpi-wjw",
      img: {
        src: "/projects/mpiwjw.png",
        alt: "MPI WJW Homepage",
      },
      projectTitle: "MPI WJW",
    },
    {
      href: "/digital-delight",
      img: {
        src: "/projects/digitaldelightpic.png",
        alt: "Digital Delight Homepage",
      },
      projectTitle: "Digital Delight",
    },
    {
      href: "/schuetz-insurance",
      img: {
        src: "/projects/schuetz_insurance.png",
        alt: "Schuetz Insurance Homepage",
      },
      projectTitle: "Schuetz Insurance",
    },
    {
      href: "/moulis-financial",
      img: {
        src: "/projects/moulisfinancial.png",
        alt: "Moulis Financial Homepage",
      },
      projectTitle: "Moulis Financial",
    },
    {
      href: "/movie-api",
      img: {
        src: "/projects/movie.png",
        alt: "Movie API Homepage",
      },
      projectTitle: "Movie API",
    },
    // {
    //   href: "/delilah-mae",
    //   img: {
    //     src: "/projects/delilahmae.png",
    //     alt: "Delilah Mae Homepage",
    //   },
    //   projectTitle: "Delilah Mae",
    // },
    // {
    //   href: "/creative-agency",
    //   img: {
    //     src: "/projects/creativeagency.png",
    //     alt: "Creative Agency Homepage",
    //   },
    //   projectTitle: "Creative Agency",
    // },
    // {
    //   href: "/greek-life",
    //   img: {
    //     src: "/projects/greeklife.png",
    //     alt: "Greek Life Homepage",
    //   },
    //   projectTitle: "Greek Life",
    // },
    // {
    //   href: "/zombie-game",
    //   img: {
    //     src: "/projects/zombie-game.png",
    //     alt: "Zombie Game Homepage",
    //   },
    //   projectTitle: "Zombie Game",
    // },
  ],
};

export const projectPagesData = [
  {
    slug: "/beggars-pizza",
    pageData: {
      title: "Beggars Pizza",
      websiteUrl: "https://www.beggarspizza.com/",
      description: `<p>The development of the Beggars Pizza website was a collaborative endeavor undertaken by a dynamic team of two skilled developers, including myself, who synergized their efforts within the framework of an Agile Methodology. <br/> <br/> Engaging closely with the talented UX and UI teams, our collaborative approach seamlessly integrated design and functionality to create a digital masterpiece.<br/> <br/>  Leveraging cutting-edge technologies, the website was crafted using Next.js for a robust front-end, Strapi Headless CMS for efficient content management, Styled Components to ensure a sleek and responsive design, Framer Motion for fluid and engaging animations, and a PostgreSQL database to enhance data management.</p>`,
      img: {
        src: "/projects/beggars_pizza.png",
        alt: "Beggars Pizza Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },
        {
          skill: "Postgres SQL",
          icon: {
            src: "/icons/logo-postgresql.svg",
            alt: "Postgres SQL API Icon",
          },
        },
        {
          skill: "Strapi",
          icon: {
            src: "/icons/logo-strapi.svg",
            alt: "Strapi Icon",
          },
        },
        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/impact-networking",
    pageData: {
      title: "Impact Networking",
      websiteUrl: "https://www.impactmybiz.com/",
      description: `<p>The development of the Impact Networking website was a collaborative endeavor undertaken by a dynamic team of two skilled developers, including myself, who synergized their efforts within the framework of an Agile Methodology. <br/> <br/> Engaging closely with the talented UX and UI teams, our collaborative approach seamlessly integrated design and functionality to create a digital masterpiece.<br/> <br/>  Leveraging cutting-edge technologies, the website was crafted using Next.js for a robust front-end, Strapi Headless CMS for efficient content management, Styled Components to ensure a sleek and responsive design, Framer Motion for fluid and engaging animations, and a PostgreSQL database to enhance data management.</p>`,
      img: {
        src: "/projects/impactmybiz.png",
        alt: "Impact Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },
        {
          skill: "Postgres SQL",
          icon: {
            src: "/icons/logo-postgresql.svg",
            alt: "Postgres SQL API Icon",
          },
        },
        {
          skill: "Strapi",
          icon: {
            src: "/icons/logo-strapi.svg",
            alt: "Strapi Icon",
          },
        },
        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/zmac-transport",
    pageData: {
      title: "Zmac Transport",
      websiteUrl: "https://frontend-staging.zmactransport.com/",
      description: `<p>The development of the ZMac Transport website was a collaborative endeavor undertaken by a dynamic team of two skilled developers, including myself, who synergized their efforts within the framework of an Agile Methodology. <br/> <br/> Engaging closely with the talented UX and UI teams, our collaborative approach seamlessly integrated design and functionality to create a digital masterpiece.<br/> <br/>  Leveraging cutting-edge technologies, the website was crafted using Next.js for a robust front-end, Strapi Headless CMS for efficient content management, Styled Components to ensure a sleek and responsive design, Framer Motion for fluid and engaging animations, and a PostgreSQL database to enhance data management.</p>`,
      img: {
        src: "/projects/zmac.png",
        alt: "Zmac Transport",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },
        {
          skill: "Postgres SQL",
          icon: {
            src: "/icons/logo-postgresql.svg",
            alt: "Postgres SQL API Icon",
          },
        },
        {
          skill: "Strapi",
          icon: {
            src: "/icons/logo-strapi.svg",
            alt: "Strapi Icon",
          },
        },
        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/dot-security",
    pageData: {
      title: "DOT Security",
      websiteUrl: "https://dotsecurity.com/",
      description: `<p>The development of the DOT Security website was a collaborative endeavor undertaken by a dynamic team of three skilled developers, including myself, who synergized their efforts within the framework of an Agile Methodology. <br/> <br/> Engaging closely with the talented UX and UI teams, our collaborative approach seamlessly integrated design and functionality to create a digital masterpiece.<br/> <br/>  Leveraging cutting-edge technologies, the website was crafted using Next.js for a robust front-end, Strapi Headless CMS for efficient content management, Styled Components to ensure a sleek and responsive design, Framer Motion for fluid and engaging animations, and a PostgreSQL database to enhance data management.</p>`,
      img: {
        src: "/projects/dot_security.png",
        alt: "DOT Security Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },
        {
          skill: "Postgres SQL",
          icon: {
            src: "/icons/logo-postgresql.svg",
            alt: "Postgres SQL API Icon",
          },
        },
        {
          skill: "Strapi",
          icon: {
            src: "/icons/logo-strapi.svg",
            alt: "Strapi Icon",
          },
        },
        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/tulayna-limo-service",
    pageData: {
      title: "Tulayna Limo Service",
      websiteUrl: "https://www.tulaynalimoservice.com/",
      description: `<p>The creation of the Tulayna Limo Service website was a freelance endeavor that I undertook in collaboration with another skilled developer. This unique opportunity allowed us to combine our technical expertise using a collaborative approach, implementing an Agile methodology for an effective workflow. <br/> <br/>Taking on the responsibility of both design and development, I worked closely with the other developer to bring the brand vision to life. The entire brand identity and website design were meticulously crafted by us using Figma, ensuring a cohesive and visually appealing user experience. <br/> <br/>The website itself was built using Next.js, Strapi Headless CMS, Styled Components, and Framer Motion — a powerful stack that seamlessly blended functionality and aesthetics. This project exemplifies not only our proficiency in web development but also our ability to deliver a comprehensive solution by integrating design and technology cohesively.</p>`,
      img: {
        src: "/projects/tulayna.png",
        alt: "Tulayna Limo Service Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },
        {
          skill: "Postgres SQL",
          icon: {
            src: "/icons/logo-postgresql.svg",
            alt: "Postgres SQL API Icon",
          },
        },
        {
          skill: "Strapi",
          icon: {
            src: "/icons/logo-strapi.svg",
            alt: "Strapi Icon",
          },
        },
        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/rowcare",
    pageData: {
      title: "Townsend Rowcare",
      websiteUrl: "https://dev-townsendcorp.impactpreview.com/new-rowcare-com",
      description:
        "<p>Engaged in a collaborative endeavor, Townsend Rowcare stands testament to my involvement in a sophisticated web development project executed within the structured framework of an agile methodology sprint cycle.<br/><br/> Operating at the intersection of design and functionality, my co-development with another skilled professional involved close collaboration with the UX and UI teams. This refined website, meticulously crafted on the robust foundation of WordPress as the Content Management System, attests to my nuanced understanding and adept utilization of an array of cutting-edge technologies and languages. <br/><br/>The seamless integration of PHP, JavaScript, SASS, HTML, and WordPress not only underscores the technical finesse brought to the project but also exemplifies my commitment to delivering a user-centric digital experience.</p>",
      img: {
        src: "/projects/rowcare.png",
        alt: "Rowcare Homepage",
      },
      builtWith: [
        {
          skill: "PHP",
          icon: {
            src: "/icons/logo-php.svg",
            alt: "PHP Icon",
          },
        },
        {
          skill: "JavaScript",
          icon: {
            src: "/icons/logo-javascript.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "SASS",
          icon: {
            src: "/icons/logo-sass.svg",
            alt: "SASS Icon",
          },
        },
        {
          skill: "HTML",
          icon: {
            src: "/icons/logo-html.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "WordPress",
          icon: {
            src: "/icons/logo-wordpress.svg",
            alt: "WordPress Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/nggilbert",
    pageData: {
      title: "Townsend NG Gilbert",
      websiteUrl:
        "https://dev-townsendcorp.impactpreview.com/new-nggilbert-com",
      description:
        "<p>Engaged in a collaborative endeavor, Townsend NG Gilbert stands testament to my involvement in a sophisticated web development project executed within the structured framework of an agile methodology sprint cycle.<br/><br/> Operating at the intersection of design and functionality, my co-development with another skilled professional involved close collaboration with the UX and UI teams. This refined website, meticulously crafted on the robust foundation of WordPress as the Content Management System, attests to my nuanced understanding and adept utilization of an array of cutting-edge technologies and languages. <br/><br/>The seamless integration of PHP, JavaScript, SASS, HTML, and WordPress not only underscores the technical finesse brought to the project but also exemplifies my commitment to delivering a user-centric digital experience.</p>",
      img: {
        src: "/projects/nggilbert.png",
        alt: "NG Gilbert Homepage",
      },
      builtWith: [
        {
          skill: "PHP",
          icon: {
            src: "/icons/logo-php.svg",
            alt: "PHP Icon",
          },
        },
        {
          skill: "JavaScript",
          icon: {
            src: "/icons/logo-javascript.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "SASS",
          icon: {
            src: "/icons/logo-sass.svg",
            alt: "SASS Icon",
          },
        },
        {
          skill: "HTML",
          icon: {
            src: "/icons/logo-html.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "WordPress",
          icon: {
            src: "/icons/logo-wordpress.svg",
            alt: "WordPress Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/chicago-living-group",
    pageData: {
      title: "Chicago Living Group",
      websiteUrl: "https://chicagolivinggroup.com/",
      description: `<p>The creation of the Chicago Living Group website was a freelance endeavor that I undertook in collaboration with another skilled developer. This unique opportunity allowed us to combine our technical expertise using a collaborative approach, implementing an Agile methodology for an effective workflow. <br/> <br/>Taking on the responsibility of both design and development, I worked closely with the other developer to bring the brand vision to life. The entire brand identity and website design were meticulously crafted by us using Figma, ensuring a cohesive and visually appealing user experience. <br/> <br/>The website itself was built using Next.js, Strapi Headless CMS, Styled Components, and Framer Motion — a powerful stack that seamlessly blended functionality and aesthetics. This project exemplifies not only our proficiency in web development but also our ability to deliver a comprehensive solution by integrating design and technology cohesively.</p>`,
      img: {
        src: "/projects/chicago_living.png",
        alt: "Chicago Living Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },
        {
          skill: "Postgres SQL",
          icon: {
            src: "/icons/logo-postgresql.svg",
            alt: "Postgres SQL API Icon",
          },
        },
        {
          skill: "Strapi",
          icon: {
            src: "/icons/logo-strapi.svg",
            alt: "Strapi Icon",
          },
        },
        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/digital-delight",
    pageData: {
      title: "Digital Delight",
      websiteUrl: "https://thedigitaldelight.com/",
      description: `<p>The creation of the Digital Delight website was a freelance endeavor that I undertook in collaboration with another skilled developer. This unique opportunity allowed us to combine our technical expertise using a collaborative approach, implementing an Agile methodology for an effective workflow. <br/> <br/>Taking on the responsibility of both design and development, I worked closely with the other developer to bring the brand vision to life. The entire brand identity and website design were meticulously crafted by us using Figma, ensuring a cohesive and visually appealing user experience. <br/> <br/>The website itself was built using Next.js, Styled Components, and Framer Motion — a powerful stack that seamlessly blended functionality and aesthetics. This project exemplifies not only our proficiency in web development but also our ability to deliver a comprehensive solution by integrating design and technology cohesively.</p>`,
      img: {
        src: "/projects/digitaldelightpic.png",
        alt: "Digital Delight Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "Next.js",
          icon: {
            src: "/icons/logo-next.svg",
            alt: "Next.js Icon",
          },
        },
        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },

        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/schuetz-insurance",
    pageData: {
      title: "Schuetz Insurance",
      websiteUrl: "https://schuetzinsurance.com/",
      description:
        "<p>Engaged in a collaborative endeavor, Schuetz Insurance stands testament to my involvement in a sophisticated web development project executed within the structured framework of an agile methodology sprint cycle.<br/><br/> Operating at the intersection of design and functionality, my co-development with another skilled professional involved close collaboration with the UX and UI teams. This refined website, meticulously crafted on the robust foundation of WordPress as the Content Management System, attests to my nuanced understanding and adept utilization of an array of cutting-edge technologies and languages. <br/><br/>The seamless integration of PHP, JavaScript, SASS, HTML, and WordPress not only underscores the technical finesse brought to the project but also exemplifies my commitment to delivering a user-centric digital experience.</p>",
      img: {
        src: "/projects/schuetz_insurance.png",
        alt: "Schuetz Insurance Homepage",
      },
      builtWith: [
        {
          skill: "PHP",
          icon: {
            src: "/icons/logo-php.svg",
            alt: "PHP Icon",
          },
        },
        {
          skill: "JavaScript",
          icon: {
            src: "/icons/logo-javascript.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "SASS",
          icon: {
            src: "/icons/logo-sass.svg",
            alt: "SASS Icon",
          },
        },
        {
          skill: "HTML",
          icon: {
            src: "/icons/logo-html.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "WordPress",
          icon: {
            src: "/icons/logo-wordpress.svg",
            alt: "WordPress Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/moulis-financial",
    pageData: {
      title: "Moulis Financial",
      websiteUrl: "https://moulisfinancial.com/",
      description: `<p>The creation of the Moulis Financial website was a freelance endeavor that I undertook in collaboration with another skilled developer. This unique opportunity allowed us to combine our technical expertise using a collaborative approach, implementing an Agile methodology for an effective workflow. <br/> <br/>Taking on the responsibility of both design and development, I worked closely with the other developer to bring the brand vision to life. The entire brand identity and website design were meticulously crafted by us using Figma, ensuring a cohesive and visually appealing user experience. <br/> <br/>The website itself was built using Next.js, Styled Components, and Framer Motion — a powerful stack that seamlessly blended functionality and aesthetics. This project exemplifies not only our proficiency in web development but also our ability to deliver a comprehensive solution by integrating design and technology cohesively.</p>`,
      img: {
        src: "/projects/moulisfinancial.png",
        alt: "Moulis Financial Homepage",
      },
      builtWith: [
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },

        {
          skill: "Styled Components",
          icon: {
            src: "/icons/logo-styled-components.svg",
            alt: "Styled Components Icon",
          },
        },

        {
          skill: "Framer Motion",
          icon: {
            src: "/icons/logo-framer-motion.svg",
            alt: "Framer Motion Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/movie-api",
    pageData: {
      title: "Movie API",
      websiteUrl: "https://helpfindmeamovie.netlify.app",
      description:
        "<p>The Movie API serves as a solo venture, strategically crafted to push the boundaries of my web development skills. This independent project served as a comprehensive exploration of my proficiency in harnessing APIs, demonstrating my ability to dynamically manipulate data using JavaScript and Axios. <br /> <br />At its core, The Movie API is a showcase of my commitment to not only extracting valuable information from external sources but also transforming that data into an engaging frontend. The project emphasizes a visually appealing interface, thoughtfully designed to offer users a seamless experience enhanced by efficient search functionalities.<br /> <br />Technologically, this endeavor relied on a robust combination of JavaScript for dynamic scripting, Axios for streamlined API communication, and the foundational trio of HTML, CSS, and JavaScript to breathe vitality into every aspect of the project. Each line of code and design decision encapsulates my dedication to not just meeting technical benchmarks, but also elevating the overall user journey. The Movie API is more than a coding exercise; it stands as a testament to my passion for crafting web applications that seamlessly blend aesthetics with functionality.</p>",
      img: {
        src: "/projects/movie.png",
        alt: "Movie API Homepage",
      },
      builtWith: [
        {
          skill: "JavaScript",
          icon: {
            src: "/icons/logo-javascript.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "CSS",
          icon: {
            src: "/icons/logo-css.svg",
            alt: "CSS Icon",
          },
        },
        {
          skill: "HTML",
          icon: {
            src: "/icons/logo-html.svg",
            alt: "JavaScript Icon",
          },
        },
      ],
    },
  },
  // {
  //   slug: "/delilah-mae",
  //   pageData: {
  //     title: "Delilah Mae",
  //     websiteUrl: "https://delilahmae.netlify.app",
  //     description:
  //       "<p>The Delilah Mae website stands as a testament to my proficiency in React.js, showcased through a personal project inspired by my niece. Delilah Mae's digital timeline is a testament to both my technical skills and the heartfelt desire to create a meaningful online space.<br /> <br />Motivated by a personal connection, I undertook the development of this website to encapsulate key moments in Delilah's life. Beyond being a technical exercise in React.js and Styled Components, it's a heartfelt gift ensuring that, as she matures, Delilah will have a dedicated online platform chronicling her growth through carefully curated images. The Delilah Mae website represents a harmonious blend of technology and emotion, demonstrating the power of web development in preserving cherished memories.</p>",
  //     img: {
  //       src: "/projects/delilahmae.png",
  //       alt: "Delilah Mae Homepage",
  //     },
  //     builtWith: [
  //       {
  //         skill: "React.js",
  //         icon: {
  //           src: "/icons/logo-react.svg",
  //           alt: "React.js Icon",
  //         },
  //       },
  //       {
  //         skill: "Styled Components",
  //         icon: {
  //           src: "/icons/logo-styled-components.svg",
  //           alt: "Styled Components Icon",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   slug: "/creative-agency",
  //   pageData: {
  //     title: "Creative Agency",
  //     websiteUrl: "https://creativeagencyllc.netlify.app",
  //     description:
  //       "<p>The inception of The Creative Agency website marked a turning point in my journey through the intricacies of frontend development. As a fledgling developer, it served as a significant milestone, a canvas where I wove together JavaScript, HTML, and CSS into a cohesive masterpiece.<br /><br />This project wasn't merely a culmination of skills; it was a deliberate challenge I set for myself—a playground where I could synthesize and showcase the culmination of my learning. Crafting this website demanded not just technical prowess but a harmonious blend of creativity and precision, exemplifying my commitment to mastering frontend intricacies. The Creative Agency isn't just a project; it's a testament to my dedication, a tangible embodiment of my evolving expertise in the realm of web development.</p>",
  //     img: {
  //       src: "/projects/creativeagency.png",
  //       alt: "Creative Agency Homepage",
  //     },
  //     builtWith: [
  //       {
  //         skill: "JavaScript",
  //         icon: {
  //           src: "/icons/logo-javascript.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //       {
  //         skill: "HTML",
  //         icon: {
  //           src: "/icons/logo-html.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //       {
  //         skill: "CSS",
  //         icon: {
  //           src: "/icons/logo-css.svg",
  //           alt: "CSS Icon",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   slug: "/greek-life",
  //   pageData: {
  //     title: "Greek Life",
  //     websiteUrl: "https://isugreeklife.netlify.app",
  //     description:
  //       "<p>The Greek Life website represents a milestone in my college journey at Illinois State University, serving as the inaugural web project I undertook. Collaborating with a fellow classmate, we embarked on the creation of this website using Bootstrap, HTML, CSS, and JavaScript.<br /><br />This venture marked my entry into web development, as the Greek Life website aimed to provide a user-friendly platform showcasing the diverse chapters available to students at Illinois State University. As my maiden voyage into website construction, the project holds a special place in my development journey.<br /><br />Constructed with the powerful combination of Bootstrap for responsive design and the foundational trio of HTML, CSS, and JavaScript, the Greek Life website is a testament to my early exploration of web technologies. It stands not only as a practical project but also as a symbol of my commitment to delivering accessible and visually appealing web experiences during my formative years in the field.</p>",
  //     img: {
  //       src: "/projects/greeklife.png",
  //       alt: "Greek Life Homepage",
  //     },
  //     builtWith: [
  //       {
  //         skill: "JavaScript",
  //         icon: {
  //           src: "/icons/logo-javascript.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //       {
  //         skill: "HTML",
  //         icon: {
  //           src: "/icons/logo-html.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //       {
  //         skill: "CSS",
  //         icon: {
  //           src: "/icons/logo-css.svg",
  //           alt: "CSS Icon",
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   slug: "/zombie-game",
  //   pageData: {
  //     title: "Zombie Game",
  //     websiteUrl: "https://eatthebrains.netlify.app",
  //     description:
  //       "<p>The creation of The Zombie Game marked a pivotal chapter in my academic journey at Illinois State University. This compact yet engaging project involved the clever utilization of arrow keys to simulate brain consumption, complete with an integrated counter to tally each brain devoured. <br /><br />Forged during my college years, The Zombie Game presented formidable challenges that, upon reflection, have ignited a desire to revisit and elevate the project. An introspective look at the codebase reveals opportunities for refactoring, a testament to my commitment to continual growth and the pursuit of coding excellence.<br /><br />While The Zombie Game currently caters to desktop users and lacks responsive design, it stands as a showcase of my proficiency in JavaScript, HTML, and CSS. Despite the initial intricacies encountered during its development, I successfully navigated the complexities, ultimately earning an A grade—a recognition of my unwavering dedication to delivering high-quality work. The Zombie Game, though rooted in the past, symbolizes an ongoing journey of refining and advancing my coding prowess.</p>",
  //     img: {
  //       src: "/projects/zombie-game.png",
  //       alt: "Zombie Game Homepage",
  //     },
  //     builtWith: [
  //       {
  //         skill: "JavaScript",
  //         icon: {
  //           src: "/icons/logo-javascript.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //       {
  //         skill: "HTML",
  //         icon: {
  //           src: "/icons/logo-html.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //       {
  //         skill: "CSS",
  //         icon: {
  //           src: "/icons/logo-css.svg",
  //           alt: "CSS Icon",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    slug: "/mpi-wjw",
    pageData: {
      title: "MPI WJW",
      websiteUrl: "https://mpiwjw.com/",
      description:
        "<p>Engaged in a collaborative endeavor, MPI WJW stands testament to my involvement in a sophisticated web development project executed within the structured framework of an agile methodology sprint cycle.<br/><br/> Operating at the intersection of design and functionality, my solo development involved close collaboration with the UX and UI teams. This refined website, meticulously crafted on the robust foundation of WordPress as the Content Management System, attests to my nuanced understanding and adept utilization of an array of cutting-edge technologies and languages. <br/><br/>The seamless integration of PHP, JavaScript, SASS, HTML, and WordPress not only underscores the technical finesse brought to the project but also exemplifies my commitment to delivering a user-centric digital experience.</p>",
      img: {
        src: "/projects/mpiwjw.png",
        alt: "MPI WJW Homepage",
      },
      builtWith: [
        {
          skill: "PHP",
          icon: {
            src: "/icons/logo-php.svg",
            alt: "PHP Icon",
          },
        },
        {
          skill: "JavaScript",
          icon: {
            src: "/icons/logo-javascript.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "SASS",
          icon: {
            src: "/icons/logo-sass.svg",
            alt: "SASS Icon",
          },
        },
        {
          skill: "HTML",
          icon: {
            src: "/icons/logo-html.svg",
            alt: "JavaScript Icon",
          },
        },
        {
          skill: "WordPress",
          icon: {
            src: "/icons/logo-wordpress.svg",
            alt: "WordPress Icon",
          },
        },
      ],
    },
  },
];

export const footerData = {
  logo: { url: "/logo/logo_no_bg.png", alt: "DC Logo" },
  homeLink: "/",
  copyright: " Dylan Cramer",
  footerLinks: [
    {
      text: "About",
      url: "/#about",
    },
    {
      text: "Work History",
      url: "/#work-history",
    },
    {
      text: "Projects",
      url: "/#projects",
    },
    {
      text: "Contact",
      url: "/#contact",
    },
  ],
  socialIcons: [
    {
      url: "mailto: dcrame2@gmail.com",
      icon: {
        url: "/icons/mail.svg",
        alt: "Mail Icon",
      },
    },
    {
      url: "https://github.com/dcrame2",
      icon: {
        url: "/icons/github.svg",
        alt: "Github Icon",
      },
    },
    {
      url: "https://www.linkedin.com/in/dylan-cramer/",
      icon: {
        url: "/icons/linkedin.svg",
        alt: "LinkedIn Icon",
      },
    },
  ],
};

export const contactData = {
  id: "contact",
  header: {
    title: "Contact",
  },
  logo: { url: "/logo/logo_no_bg.png", alt: "DC Logo" },

  description: "React out for any questions!",
};

export const contactCTAData = {
  header: "Contact Me",
  logo: { url: "/logo/logo_no_bg.png", alt: "DC Logo" },
  href: "/#contact",
  description:
    "Have any questions for me? I'd be happy to answer them via my contact form.",
};
