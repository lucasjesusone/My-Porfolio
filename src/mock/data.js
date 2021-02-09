import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lucas | Desenvolvedor', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lucas Gabriel de Jesus',
  subtitle: "I'm a Software Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne:
    "My name's Lucas Gabriel de Jesus and I am a student of analysis and system development.",
  paragraphTwo:
    'Actually I am improving my knowledges with the Javascript language with front end and back end with NodeJS, Besides, I am using some frameworks like ReactJS, React Native',
  paragraphThree:
    'I can speak Portuguese as a native speaker and English, btw, I am also learning German language too.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dino.png',
    title: 'Dino Game',
    info:
      "This game was built only with HTML / CSS and Javascript, It was made by bootcamp in the Digital Innovatio One. It works like a Dino Game when we're without network connection.",
    info2: 'You can check the repo below.',
    url: '',
    repo: 'https://github.com/LucasJesusone/Replica-Dino-Game', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'page.png',
    title: 'Landing Page',
    info: 'This Landing Page is being built for a personal project with Gatsby / ReactJS and CSS.',
    info2: 'You can check all details in the repo below.',
    url: '',
    repo: 'https://github.com/LucasJesusone/React-Landing-Page', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'If you want to get more informations about myself, contact-me throught the informations below, by E-mail, Whatsapp, LinkedIn or GitHub.. ',
  btn: 'Send me an E-mail',
  email: 'lucasjesusone@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucasgabrieljesus/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LucasJesusone',
    },
    {
      id: nanoid(),
      name: 'whatsapp',
      url: 'https://bit.ly/39oUzpn',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
