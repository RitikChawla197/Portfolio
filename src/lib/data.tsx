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
    video: 'assets/videos/tailwind-admin.mp4',
    title: 'Tailwind Admin Panel ',
    description:
      'This Admin Panel handles all the functionalities like Creating , updating and deleting users. Assigning User\'s their Permissions and Changing user types to admin or View',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Vite',
      'Material-UI',
    ],
    links: {
      preview: '#',
      github: '#',
      githubApi: '#',
    },
  },
  {
    video: 'assets/videos/gis-dash.mp4',
    title: 'GIS Dashboard',
    description:
      'This Dashboard offers all the data to seen using Graphs and Tables from react charts',
    technologies: [
      'React.js',
      'Material-UI',
      'Recharts',
    ],
    links: {
      preview: '#',
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
      'Designed and optimized responsive interfaces using React.js, Bootstrap 5, and Material UI. Developed dashboards and interactive tools to enhance user experience. Improved the functionality of the company’s GIS panel by addressing processing issues using various methods.',
    period: '2024 May - Present',
    technologies: ['React', 'Tailwind', 'Bootstrap', 'Shadcn', 'API-integration', 'ETL', 'Error Handling and Debugging'],
  },
  {
    title: 'Internship Trainee',
    company: 'Trident Techlabs Limited, On-Site',
    description:
      'Assisted in developing Admin Panel for Company\'s website. Gained experience in Bootstrap Libraries like Material-UI and AntDesign and collaborated with senior developers on complex projects.',
    period: '2023 Sep - 2024 Apr',
    technologies: ['JavaScript', 'Bootstrap', 'Tailwind CSS'],
  },
 
]

export const skillsData: Skill[] = [
  { name: 'Tailwind', icon: <Icons.tailwind className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'Github', icon: <Icons.github className="size-12" /> },
  { name: 'Redux', icon: <Icons.redux className="size-12" /> },
  // { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'React', icon: <Icons.react className="size-12" /> },
  // { name: 'NextJS', icon: <Icons.nextjs className="size-12" /> },
  // { name: 'NestJS', icon: <Icons.nestjs className="size-12" /> },
  // { name: 'Prisma', icon: <Icons.prisma className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
]
