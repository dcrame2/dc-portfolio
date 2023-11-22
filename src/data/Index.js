// import { IconName } from "react-icons/io5";
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
  aboutParagraph: `<p>Welcome to my corner of the web! I am a passionate Full Stack Web Developer, specializing in the dynamic world of JavaScript.  My mission is to transform your ideas into digital reality, crafting high-quality, user-centric solutions tailored to meet your businesses unique needs. I thrive on perpetual learning, constantly staying abreast of the latest industry trends and technologies. I am steady taking Udemy courses, watching YouTube, and reading the latest tech news.<br /><br /> My journey began with a solid foundation, earning a Bachelor of Science in Information Systems - Web Application Development from Illinois State University in 2018. With a diverse skill set and proficiency in a range of programming languages and tools, I am ready to embark on new challenges and create innovative, cutting-edge web experiences. 

  </p>`,
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
    {
      skill: "TypeScript",
      icon: {
        src: "/icons/logo-typescript.svg",
        alt: "TypeScript Icon",
      },
    },
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
    "Digital Delight",
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
      title: "Web Developer",
      company: "Digital Delight",
      timePeriod: "June 2022 - Present",
      jobDesc: [
        " Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, Strapi, React, WordPress, Next.js, and SASS",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      title: "Tech Specialist",
      company: "Text2Drive LLC",
      timePeriod: "November 2018 - May 2022",
      jobDesc: [
        "Implementing & deploying our mobile Online Bill Pay solution through our gateway provider. Connecting our software to dealerships Merchant Accounts through APIs.",
        "Installing & troubleshooting EMV Chip Readers to the dealerships Internet network.",
        "Completing Cost Analysis by collecting and analyzing our dealership’s credit card processing and comparing it to what we can save them.",
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
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/beggars-pizza",
      img: {
        src: "/projects/beggars_pizza.png",
        alt: "Beggars Pizza Homepage",
      },
      projectTitle: "Beggars Pizza",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/dot-security",
      img: {
        src: "/projects/dot_security.png",
        alt: "DOT Security Homepage",
      },
      projectTitle: "DOT Security",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/tulayna-limo-service",
      img: {
        src: "/projects/tulayna.png",
        alt: "Tulayna Limo Service Homepage",
      },
      projectTitle: "Tulayna Limo",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/zmac-transport",
      img: {
        src: "/projects/zmac.png",
        alt: "Zmac Transport",
      },
      projectTitle: "Zmac Transport",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/rowcare",
      img: {
        src: "/projects/rowcare.png",
        alt: "Rowcare Homepage",
      },
      projectTitle: "Rowcare",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/nggilbert",
      img: {
        src: "/projects/nggilbert.png",
        alt: "NG Gilbert Homepage",
      },
      projectTitle: "NG Gilbert",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/chicago-living-group",
      img: {
        src: "/projects/chicago_living.png",
        alt: "Chicago Living Homepage",
      },
      projectTitle: "Chicago Living",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/mpi-wjw",
      img: {
        src: "/projects/mpiwjw.png",
        alt: "MPI WJW Homepage",
      },
      projectTitle: "MPI WJW",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/digital-delight",
      img: {
        src: "/projects/digitaldelightpic.png",
        alt: "Digital Delight Homepage",
      },
      projectTitle: "Digital Delight",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/schuetz-insurance",
      img: {
        src: "/projects/schuetz_insurance.png",
        alt: "Schuetz Insurance Homepage",
      },
      projectTitle: "Schuetz Insurance",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/moulis-financial",
      img: {
        src: "/projects/moulisfinancial.png",
        alt: "Moulis Financial Homepage",
      },
      projectTitle: "Moulis Financial",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/movie-api",
      img: {
        src: "/projects/movie.png",
        alt: "Movie API Homepage",
      },
      projectTitle: "Movie API",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    // {
    //   href: "/pig-game",
    //   img: {
    //     src: "/projects/pig-game.png",
    //     alt: "Pig Game Homepage",
    //   },
    //   projectTitle: "Pig Game",
    //   desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    // },
    {
      href: "/delilah-mae",
      img: {
        src: "/projects/delilahmae.png",
        alt: "Delilah Mae Homepage",
      },
      projectTitle: "Delilah Mae",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/creative-agency",
      img: {
        src: "/projects/creativeagency.png",
        alt: "Creative Agency Homepage",
      },
      projectTitle: "Creative Agency",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/stars-and-stripes",
      img: {
        src: "/projects/starsandstripes.png",
        alt: "Stars and Stripes Homepage",
      },
      projectTitle: "Stars and Stripes",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/greek-life",
      img: {
        src: "/projects/greeklife.png",
        alt: "Greek Life Homepage",
      },
      projectTitle: "Greek Life",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
    {
      href: "/zombie-game",
      img: {
        src: "/projects/zombie-game.png",
        alt: "Zombie Game Homepage",
      },
      projectTitle: "Zombie Game",
      desc: "Impact Networking Impact Networking Impact Networking Impact NetworkingImpact Networking ",
    },
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
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
  //   slug: "/pig-game",
  //   pageData: {
  //     title: "Pig Game",
  //     websiteUrl: "https://helpfindmeamovie.netlify.app",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
  //     img: {
  //       src: "/projects/pig-game.png",
  //       alt: "Pig Game Homepage",
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
  //         skill: "CSS",
  //         icon: {
  //           src: "/icons/logo-css.svg",
  //           alt: "CSS Icon",
  //         },
  //       },
  //       {
  //         skill: "HTML",
  //         icon: {
  //           src: "/icons/logo-html.svg",
  //           alt: "JavaScript Icon",
  //         },
  //       },
  //     ],
  //   },
  // },
  {
    slug: "/delilah-mae",
    pageData: {
      title: "Delilah Mae",
      websiteUrl: "https://delilahmae.netlify.app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
      img: {
        src: "/projects/delilahmae.png",
        alt: "Delilah Mae Homepage",
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
      ],
    },
  },
  {
    slug: "/creative-agency",
    pageData: {
      title: "Creative Agency",
      websiteUrl: "https://creativeagencyllc.netlify.app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
      img: {
        src: "/projects/creativeagency.png",
        alt: "Creative Agency Homepage",
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
      ],
    },
  },
  {
    slug: "/stars-and-stripes",
    pageData: {
      title: "Stars and Stripes",
      websiteUrl: "https://carsandstripesforeverinc.com/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
      img: {
        src: "/projects/starsandstripes.png",
        alt: "Stars and Stripes Homepage",
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
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
        {
          skill: "React.js",
          icon: {
            src: "/icons/logo-react.svg",
            alt: "React.js Icon",
          },
        },
      ],
    },
  },
  {
    slug: "/greek-life",
    pageData: {
      title: "Greek Life",
      websiteUrl: "https://isugreeklife.netlify.app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
      img: {
        src: "/projects/greeklife.png",
        alt: "Greek Life Homepage",
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
      ],
    },
  },
  {
    slug: "/zombie-game",
    pageData: {
      title: "Zombie Game",
      websiteUrl: "https://eatthebrains.netlify.app",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
      img: {
        src: "/projects/zombie-game.png",
        alt: "Zombie Game Homepage",
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
      ],
    },
  },
  {
    slug: "/mpi-wjw",
    pageData: {
      title: "MPI WJW",
      websiteUrl: "https://mpiwjw.com/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni repudiandae aliquid fuga eveniet nihil ad aperiam vel pariatur quidem officia error maxime voluptatibus corporis accusamus, veritatis, ea tempore! Autem quo ad architecto vitae nam officia ex ab, et nisi tenetur maiores cumque perferendis ut nesciunt nostrum rerum, ipsam officiis!",
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
        url: "/logo/logo_no_bg.png",
        alt: "Mail Icon",
      },
    },
    {
      url: "https://github.com/dcrame2",
      icon: {
        url: "/logo/logo_no_bg.png",
        alt: "Github Icon",
      },
    },
    {
      url: "https://www.linkedin.com/in/dylan-cramer/",
      icon: {
        url: "/logo/logo_no_bg.png",
        alt: "LinkedIn Icon",
      },
    },
  ],
};
