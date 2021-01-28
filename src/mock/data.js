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
  name: 'Lucas Gabriel',
  subtitle: "I'm a Front-End Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you want to get more informations about myself, contact-me throught the informations below, like E-mail, Whatsapp, LinkedIn or GitHub.. ',
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
