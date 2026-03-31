/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Motice - Congelados & Diversos",
  title: "Saudações, seja bem-vindo(a) a nossa loja online de congelados e diversos! 🥶🍽️",
  subTitle: emoji(
    "Fornecemos produtos congelados e diversos com qualidade, preços acessíveis e entrega ao domicílio, garantindo comodidade e satisfação aos nossos clientes."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Stelvio-Chibuco",
  linkedin: "https://www.linkedin.com/in/stélvio-chibuco-301676263",
  gmail: "stelviochibuco@outlook.com",
  gitlab: "https://gitlab.com/Stelvio-Chibuco",
  facebook: "https://web.facebook.com/stelvio.chibuco/",
  twitter: "https://twitter.com/StelvioChibuco",
  medium: "https://medium.com/@stelviochibuco799",
  stackoverflow:
    "https://stackoverflow.com/users/22986839/st%c3%a9lvio-chibuco",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Quem Somos?",
  subTitle:
    "Somos um estabelecimento comercial dedicado ao fornecimento de produtos alimentares de qualidade, com especial foco em produtos congelados e itens essenciais para o dia a dia das famílias. Trabalhamos para garantir que cada cliente tenha acesso a alimentos práticos, seguros e com excelente relação entre qualidade e preço, contribuindo para facilitar a rotina doméstica.",
  skills: [
    emoji(
      "⚡ Seleção rigorosa de produtos – Trabalhamos com critérios exigentes na escolha dos nossos fornecedores e produtos, garantindo padrões consistentes de qualidade;"
    ),
    emoji("⚡ Frescura e conservação adequada – Mantemos processos cuidadosos de armazenamento, higiene e cadeia de frio, assegurando que os produtos cheguem ao cliente em perfeitas condições;"),
    emoji(
      "⚡ Variedade para o dia a dia – Oferecemos uma gama de congelados e produtos diversos, pensados para atender às necessidades alimentares das famílias;"
    ),
    emoji(
      "⚡ Preços acessíveis – Procuramos manter uma política de preços justa, permitindo que mais pessoas tenham acesso a produtos de qualidade;"
    ),
    emoji(
      "⚡ Entrega ao domicílio – Facilitamos a vida dos nossos clientes com serviço de entrega rápida e conveniente, levando os produtos diretamente até sua casa."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader: "Especialização em Engenharia de Desenvolvimento de Sistemas",
      duration: "Fevereiro de 2022 - Dezembro de 2023",
      desc: "Participou das Jornadas Cientificas II na UJC.",
      descBullets: [
        "Sistema de controle de acesso baseado no reconhecimento facial e emissão de alertas de segurança."
      ]
    },
    {
      schoolName: "Universidade Save",
      logo: require("./assets/images/UniSave_logo.png"),
      subHeader:
        "Licenciatura em Informática Com Especialização em Engenharia de Desenvolvimento de Sistemas",
      duration: "Março de 2020 - Outubro de 2024",
      desc: "Classificado entre os 20% melhores do curso. Tendo frequentado disciplinas sobre Engenharia de Software, Segurança Cibernética, Sistemas Operacionais, IA, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Front-end/Design", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Back-end",
      progressPercentage: "90%"
    },
    {
      Stack: "Programação",
      progressPercentage: "95%"
    },
    {
      Stack: "Linux",
      progressPercentage: "99%"
    },
    {
      Stack: "Microsoft",
      progressPercentage: "98%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Estágio Técnico Profissional",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Fevereiro 2023 – Maio 2023"
    },
    {
      role: "Estágio de Desenvolvimento de Software",
      company: "UniSave",
      companylogo: require("./assets/images/UniSave_logo.png"),
      date: "Julho 2023 – Novembro 2023"
    },
    {
      role: "Estágio Técnico Profissional",
      company: "CMC De Xai-Xai",
      companylogo: require("./assets/images/cmcxxLogo.png"),
      date: "Julho 2024 – Maio 2025"
    },
    {
      role: "Estágio Técnico Profissional",
      company: "INAGE - Gaza",
      companylogo: require("./assets/images/inageLogo.png"),
      date: "Abril 2025"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Nossos Produtos:",
  subtitle: "Congelados e Diversos",
  projects: [
    {
      image: require("./assets/images/MG_7753.jpg"),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MG_7758.jpg"),
      projectName: "",
      projectDesc:
        "",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7752.jpg"),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/MG_7759.jpg"),
      projectName: "",
      projectDesc:
        "",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Congelados e Diversos 🥶🍽️"),
  subtitle:
    "",

  achievementsCards: [
    {
      image: require("./assets/images/MG_7748.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7764.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7757.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },    
    {
      image: require("./assets/images/MG_7762.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },    
    {
      image: require("./assets/images/MG_7754.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};



  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog",
  subtitle:
    "Com amor pelo desenvolvimento de coisas legais, adoro escrever e ensinar aos outros o que aprendi.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      image: require("./assets/images/MG_7795.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7787.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7794.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7805.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7808.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PALESTRAS",
  subtitle: emoji(
    "AdoroO COMPARTILHAR MEU CONHECIMENTO LIMITADO E RECEBER UM CRACHÁ DE PALESTRANTE 😅"
  ),

  talks: [
    {
      image: require("./assets/images/MG_7746.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7738.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7739.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7747.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7740.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast🎙️"),
  subtitle: "Adoro falar sobre mim e tecnologia",
  podcast: [
    {
      image: require("./assets/images/MG_7818.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7813.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7812.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },
    {
      image: require("./assets/images/MG_7785.jpg"),
      imageAlt: "Produto",
      footerLink: [
        {
          name: "Whatsapp",
          url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."
        }
      ]
    },               
    {
      image: require("./assets/images/MG_7781.jpg"),
      imageAlt: "Produto",
      footerLink: [{name: "Whatsapp", url: "https://wa.me/258875631636?text=Olá!%20Gostaria%20de%20ter%20mais%20informações%20sobre%20os%20vossos%20produtos%20e%20serviços."}]
    }
  ],
  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Para Mais Informações 👇 Entre em Contacto ☎️ ☎️"),
  subtitle:
    "Quer saber mais sobre os nossos produtos, encomendas ou entregas ao domicílio? A equipa da Motice Congelados & Diversos está disponível para ajudar.",
  number: "+258875631636",
  email_address: "moticecongelados@outlook.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@StelvioChibuco", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
