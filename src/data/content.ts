
// Content data for the portfolio site
// This centralized data source makes it easy to replace with API calls later

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  logo: string;
  color: string;
  isComingSoon: boolean;
  url?: string;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  year: string;
}

export interface Insight {
  id: number;
  content: string;
  tag: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  url?: string;
}

export interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  languageColor: string;
  url?: string;
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  location: string;
  motto: string;
  about: string;
  photo?: string;
  email: string;
}

export const personalInfo: PersonalInfo = {
  name: "Kevin Isom",
  roles: ["Lead Software Developer", "System Architect", "Startup Founder"],
  location: "Nairobi, Kenya",
  motto: "Building digital products that blend technology and impact",
  about: "I lead LESOM Dynamics, a venture studio powering innovative digital products across fintech, smart city innovation, and decentralized systems.",
  email: "contact@kevinison.dev"
};

export const projects: Project[] = [
  {
    id: "verify-checkin",
    title: "VerifyCheckIn",
    description: "Visitor management SaaS platform backed by Microsoft for Startups",
    logo: "VC",
    color: "bg-blue-500",
    isComingSoon: false,
    url: "#verify-checkin"
  },
  {
    id: "mat-iko",
    title: "Mat-Iko",
    description: "Real-time matatu tracking system for Nairobi commuters",
    logo: "MI",
    color: "bg-green-500",
    isComingSoon: false,
    url: "#mat-iko"
  },
  {
    id: "sim-shield",
    title: "SIMShield",
    description: "SIM swap fraud detection using telco APIs for secure authentication",
    logo: "SS",
    color: "bg-purple-500",
    isComingSoon: false,
    url: "#sim-shield"
  },
  {
    id: "pay-fusion",
    title: "PayFusion",
    description: "NFC-powered payment aggregator for seamless transactions",
    logo: "PF",
    color: "bg-orange-500",
    isComingSoon: false,
    url: "#pay-fusion"
  },
  {
    id: "safe-haven-dao",
    title: "SafeHavenDAO",
    description: "Decentralized organization for community safety",
    logo: "SH",
    color: "bg-red-500",
    isComingSoon: true,
  },
  {
    id: "carbon-sphere",
    title: "CarbonSphere",
    description: "Carbon credit marketplace using blockchain",
    logo: "CS",
    color: "bg-teal-500",
    isComingSoon: true,
  }
];

export const achievements: Achievement[] = [
  {
    id: "eth-safari",
    icon: "Trophy",
    title: "EthSafari Hackathon Winner",
    description: "Built a decentralized solution for tracking and verifying supply chains",
    year: "2023",
  },
  {
    id: "africas-talking",
    icon: "Award",
    title: "Africa's Talking Hackathon Finalist",
    description: "Developed an SMS-based emergency response system",
    year: "2022",
  },
  {
    id: "innovate-nbo",
    icon: "Star",
    title: "InnovateNBO Finalist",
    description: "Created an urban mobility solution for Nairobi's transport challenges",
    year: "2022",
  },
  {
    id: "microsoft-startups",
    icon: "Users",
    title: "Microsoft for Startups Program",
    description: "Selected for the Microsoft for Startups program with VerifyCheckIn",
    year: "2021",
  }
];

export const insights: Insight[] = [
  {
    id: 1,
    content: "Building for impact means creating solutions that actually solve real problems for people, not just tech for tech's sake.",
    tag: "#ProductStrategy",
  },
  {
    id: 2,
    content: "The African tech ecosystem doesn't need to mirror Silicon Valley. We need authentic solutions built for our unique contexts.",
    tag: "#AfricanTech",
  },
  {
    id: 3,
    content: "For startups building in emerging markets, focus on solving fundamental problems with simple, accessible technology before jumping to AI or blockchain.",
    tag: "#StartupAdvice",
  },
  {
    id: 4,
    content: "The future of financial inclusion in Africa depends on seamless integrations between traditional finance and digital innovation.",
    tag: "#Fintech",
  },
  {
    id: 5,
    content: "Smart city technology isn't just about sensors and data, but creating systems that empower citizens to participate in urban development.",
    tag: "#SmartCities",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "fintech-infrastructure",
    title: "Building Resilient Fintech Infrastructure in Africa",
    excerpt: "Key insights on creating reliable financial technology solutions for the African market",
    date: "March 15, 2023",
    category: "Fintech",
    url: "#blog/fintech-infrastructure"
  },
  {
    id: "iot-urban-mobility",
    title: "The Role of IoT in Urban Mobility Solutions",
    excerpt: "How Internet of Things is transforming transportation systems in African cities",
    date: "January 28, 2023",
    category: "Smart Cities",
    url: "#blog/iot-urban-mobility"
  },
  {
    id: "decentralized-identity",
    title: "Decentralized Identity: Beyond the Blockchain Hype",
    excerpt: "Exploring practical applications of decentralized identity systems in everyday scenarios",
    date: "November 10, 2022",
    category: "Blockchain",
    url: "#blog/decentralized-identity"
  },
];

export const repositories: Repository[] = [
  {
    id: "verifycheckin-backend",
    name: "verifycheckin-backend",
    description: "Backend API for the VerifyCheckIn visitor management system",
    language: "TypeScript",
    stars: 24,
    forks: 8,
    languageColor: "bg-blue-500",
    url: "https://github.com/isomkevin/verifycheckin-backend"
  },
  {
    id: "matiko-tracking-app",
    name: "matiko-tracking-app",
    description: "Mobile application for real-time matatu tracking in Nairobi",
    language: "React Native",
    stars: 37,
    forks: 12,
    languageColor: "bg-purple-500",
    url: "https://github.com/isomkevin/matiko-tracking-app"
  },
  {
    id: "simshield-core",
    name: "simshield-core",
    description: "SIM swap fraud detection core library for telecom integration",
    language: "Python",
    stars: 16,
    forks: 5,
    languageColor: "bg-yellow-500",
    url: "https://github.com/isomkevin/simshield-core"
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/isomkevin",
    icon: "Github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/kevinison",
    icon: "Linkedin"
  },
  {
    platform: "Email",
    url: "mailto:contact@kevinison.dev",
    icon: "Mail"
  }
];
