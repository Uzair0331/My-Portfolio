import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio ',
  description: "Site built with Uzair Shaikh react template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Home',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Uzair Shaikh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Pakistan based <strong className="text-stone-100">Full Stack Developer</strong>, currently working at{' '}
        <strong className="text-stone-100">AppTycoons</strong> helping build a modern Frontend side
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">In my free time, you can catch me in</p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Software engineer based in Karachi, specializing in full-stack web development with a focus on the MERN stack. I'm currently enriching my skill set at AppTycoons as an Associate Software Engineer, where I leverage my expertise in Next.js, React.js, and Tailwind CSS to build responsive and scalable applications.`,
  aboutItems: [
    {label: 'Location', text: 'Karachi, Pak', Icon: MapIcon},
    {label: 'Age', text: '24', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding,Gaming,Traveling,sketching', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Karachi', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Associate Software Engineer roles', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Urdu',
        level: 10,
      },
      {
        name: 'Punjabi',
        level: 9,
      },
      {
        name: 'English',
        level: 6,
      },
      {
        name: 'Spanish',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Tailwind CSS ',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'React.js',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },

  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'MERN Stack',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project 1',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage1,
  },
  {
    title: 'Project 2',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage2,
  },
  {
    title: 'Project 3',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage3,
  },
  {
    title: 'Project 4',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage4,
  },
  {
    title: 'Project 5',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage5,
  },
  {
    title: 'Project  6',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage6,
  },
  {
    title: 'Project 7',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage7,
  },
  {
    title: 'Project 8',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage8,
  },

  {
    title: 'Project 9',
    description: '',
    url: 'https://github.com/Uzair0331?tab=repositories',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'march 2014',
    location: 'karachi',
    title: 'Board of secondary education',
    content: <p>Matriculation</p>,
  },
  {
    date: 'Oct 2016',
    location: 'Karachi',
    title: 'Higher Secondary School Certificate',
    content: <p>Intermediate</p>,
  },
  {
    date: 'Jan 2020',
    location: 'Karachi',
    title: 'HDSE I',
    content: <p>Web Designing, Application development & Mobile App development.</p>,
  },
  {
    date: 'July 2023',
    location: 'Karachi',
    title: 'HDSE II',
    content: <p>Web Designing, Application development & Mobile App development.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2023 - Dec 2023',
    location: 'Karachi',
    title: 'Software Engineer Intern',
    content: <p> Software Industry, MERN Stack ,Next.js , Problem Solving, Tailwind CSS, React.js ,React Native</p>,
  },
  {
    date: 'Jan 2024 - Present',
    location: 'karachi',
    title: 'Associate Software Engineer',
    content: <p>MERN Stack ,Next.js ,React.js ,Tailwind CSS ,React Native</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: '"Working with Uzair Shaikh has been a transformative experience for our project. Not only did they deliver high-quality code, but their attention to understanding and meeting our needs was exceptional. They consistently went above and beyond, making sure our project was not just completed, but successful. Highly recommended for anyone seeking a dedicated and skilled developer."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane dim',
      text: '"Mate possesses a deep understanding of modern web technologies and best practices, which is evident in their work."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Tom Whill',
      text: '"I had the pleasure of working with you dear on several challenging projects. They are not only technically proficient but also a great team player and leader."',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here you go !',
  items: [
    {
      type: ContactType.Email,
      text: 'uxair0331xhaikh@gmail.com',
      href: 'mailto:uxair0331xhaikh@gmail.com',
    },
    {
      type: ContactType.Instagram,
      text: '@im_uxair001',
      href: 'https://www.instagram.com/im_uxair001/',
    },
    {
      type: ContactType.Github,
      text: 'Uzair0331',
      href: 'https://github.com/Uzair0331',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Uzair0331'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/uzair-shaikh-15a7382a7/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/im_uxair001/'},
];
