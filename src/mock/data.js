import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
  img: 'photo.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
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
    repo: 'https://github.com/LucasJesusone', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Me envie um e-mail no botão abaixo.',
  btn: 'Clique aqui',
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
