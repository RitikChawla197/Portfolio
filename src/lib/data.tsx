import { Icons } from '@/components/icons'
import { Experience, NavLink, Project, Skill } from './types'

export const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
]

export const projectsData: Project[] = [
  {
    slug: 'tailwind-admin-panel',
    video: '/assets/videos/tailwind-admin.mp4',
    title: 'Tailwind Admin Panel',
    description:
      "This admin panel handles core workflows such as creating, updating, and deleting users, assigning permissions, and managing user roles.",
    role: 'Frontend Developer',
    duration: '2024',
    highlights: [
      'Built role-based user management flows for admin operations.',
      'Designed reusable dashboard UI components for CRUD-heavy screens.',
      'Improved maintainability by structuring features into isolated modules.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Material-UI'],
    links: {
      preview: 'restricted',
      github: '#',
      githubApi: '#',
    },
  },
  {
    slug: 'gis-dashboard',
    video: '/assets/videos/gis-dash.mp4',
    title: 'GIS Dashboard',
    description:
      'This dashboard presents data with charts and tables for clearer analysis and monitoring.',
    role: 'Frontend Developer',
    duration: '2024',
    highlights: [
      'Developed data visualization surfaces with charts and tabular views.',
      'Improved data readability through structured filtering and layout.',
      'Focused on responsive behavior for desktop and wide-screen workflows.',
    ],
    technologies: ['React.js', 'Material-UI', 'Recharts'],
    links: {
      preview: 'restricted',
      github: '#',
      githubApi: '#',
    },
  },
  {
    slug: 'cyme-authentication',
    image: '/assets/images/cymea.png',
    title: 'CYME Authentication',
    description:
      'This dashboard presents data with charts and tables for clearer analysis and monitoring.',
    role: 'Frontend Developer',
    duration: '2024',
    highlights: [
      'Implemented authentication-facing workflows for enterprise users.',
      'Delivered production UI under company policy and security constraints.',
      'Integrated frontend flows with protected backend endpoints.',
    ],
    technologies: ['React.js', 'Material-UI', 'Recharts'],
    links: {
      preview: 'restricted',
      github: '#',
      githubApi: '#',
    },
  },
  {
    slug: 'tasq-management',
    image: '/assets/images/tasq.png',
    title: 'TASQ Management',
    description:
      'This dashboard presents data with charts and tables for clearer analysis and monitoring.',
    role: 'Full Stack Developer',
    duration: '2025',
    highlights: [
      'Built task management workflows with modern Next.js app architecture.',
      'Implemented type-safe UI and state handling with TypeScript.',
      'Designed polished and reusable interfaces using shadcn/ui components.',
    ],
    technologies: ['Next.js', 'TypeScript', 'shadcn/ui', 'Vercel (Hosting)'],
    links: {
      preview: 'https://tasqmanage.vercel.app/',
      github: '#',
      githubApi: '#',
    },
  },
] as const

export const experiencesData: Experience[] = [
  {
    title: 'Software Developer',
    company: 'Trident Techlabs Limited, On-Site',
    description:
      "Designed and optimized responsive interfaces using React.js, Bootstrap 5, and Material UI. Developed dashboards and interactive tools to enhance user experience. Improved the functionality of the company's GIS panel by addressing processing issues using multiple approaches.",
    period: '2024 May - Present',
    technologies: [
      'React',
      'Tailwind',
      'Bootstrap',
      'Shadcn',
      'API Integration',
      'ETL',
      'Error Handling and Debugging',
    ],
    logo: '/assets/images/tridentlogo.png'
  },
  {
    title: 'Internship Trainee',
    company: 'Trident Techlabs Limited, On-Site',
    description:
      "Assisted in developing an admin panel for the company's website. Gained experience with Bootstrap libraries such as Material-UI and Ant Design, and collaborated with senior developers on complex projects.",
    period: '2023 Sep - 2024 Apr',
    technologies: ['JavaScript', 'Bootstrap', 'Tailwind CSS'],
    logo: '/assets/images/tridentlogo.png'
  },
]

export const skillsData: Skill[] = [
  {
    name: 'Tailwind',
    icon: <Icons.tailwind className="size-12" />,
    colorClass: 'hover:text-cyan-400',
  },
  {
    name: 'JavaScript',
    icon: <Icons.javascript className="size-12" />,
    colorClass: 'hover:text-yellow-400',
  },
  {
    name: 'TypeScript',
    icon: <Icons.typescript className="size-12" />,
    colorClass: 'hover:text-blue-500',
  },
  {
    name: 'Github',
    icon: <Icons.github className="size-12" />,
    colorClass: 'hover:text-foreground',
  },
  {
    name: 'Redux',
    icon: <Icons.redux className="size-12" />,
    colorClass: 'hover:text-violet-500',
  },
  {
    name: 'React',
    icon: <Icons.react className="size-12" />,
    colorClass: 'hover:text-sky-400',
  },
  {
    name: 'Next.js',
    icon: <Icons.nextjs className="size-12" />,
    colorClass: 'hover:text-foreground',
  },
  {
    name: 'shadcn/ui',
    icon: <Icons.shadcn className="size-12" />,
    colorClass: 'hover:text-foreground',
  },
  {
    name: 'Docker',
    icon: <Icons.docker className="size-12" />,
    colorClass: 'hover:text-blue-500',
  },
]
