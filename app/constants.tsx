import GlassGaming from "./assets/otherprojects/game.png";
import Launch from "./assets/otherprojects/launch.png";
import Bookmark from "./assets/otherprojects/bookmark.png";
import Memory from "./assets/otherprojects/memory.png";
import Invoice from "./assets/otherprojects/invoice.png";
import Pomodoro from "./assets/otherprojects/pomodoro.png";
import Weather from "./assets/otherprojects/weather.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const WEBSITE_URL = "https://portfolio-puce-zeta-77.vercel.app";
export const IMAGE_URL = `${WEBSITE_URL}/images/avatar.jpg`;
export const IMAGE_WIDTH = "1200";
export const IMAGE_HEIGHT = "630";
export const PORTFOLIO_WEBSITE_NAME = "Hung Tran Portfolio";
// export const BLOG_WEBSITE_NAME = "Alissa's Blog";
export const TWITTER_CARD_TYPE = "summary_large_image";
export const AUTHOR = "Hung Tran";
export const BLOG_URL = "";
export const TWITTER_ACC = "";
export const TWITTER_PUBLISHER = "";
export const WEBSITE_KEYWORDS =
  "Learn Remix, React, JavaScript, Typescript, Hung Tran, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer";
export const BLOG_KEYWORDS =
  "Learn Remix, React, JavaScript, Typescript, Personal Blog, Technical Blog, Software Development, Developer, Software Engineer, Modern Programing, Frontend Programmer, Web Developer";
export const WEBSITE_DESCRIPTION =
  "Hung Tran is a software engineer in Hanoi, VN. He enjoys building software with elegant, performant, and maintainable frontend code.";
export const BLOG_DESCRIPTION =
  "Hi, I'm Hung Tran. I write blog about educational resources and tutorials for Remix, React, web development and more.";

export const topLevelLinksOnMobile: { href: string; displayName: string }[] = [
  {
    href: "/",
    displayName: "Home",
  },

  {
    href: "/#portfolio",
    displayName: "Portfolio",
  },
  {
    href: "/#projects",
    displayName: "Projects",
  },
  {
    href: "/#contact",
    displayName: "Contact",
  },
];
export const topLevelLinksOnDesktop: { href: string; displayName: string }[] = [
  {
    href: "/#portfolio",
    displayName: "Portfolio",
  },
  {
    href: "/#projects",
    displayName: "Projects",
  },
  {
    href: "/#contact",
    displayName: "Contact",
  },
];

export const THEME_COOKIE_KEY = "hung_tran_dev_theme";
interface SocialMediaIconData {
  name: string;
  className: string;
  icon: React.FC;
  externalUrl: string;
}
export const sm: SocialMediaIconData[] = [
  {
    name: "Facebook",
    className: "icon facebook relative bg-white text-black hover:text-white",
    icon: () => <FaFacebookF />,
    externalUrl: "https://www.facebook.com/gio250894",
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => <FaTwitter />,
    externalUrl: "https://twitter.com/",
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => <FaInstagram />,
    externalUrl: "https://www.instagram.com/",
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => <FaGithub />,
    externalUrl: "https://github.com/",
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => <FaLinkedin />,
    externalUrl: "https://www.linkedin.com",
  },
];
export const contactFormHtmlId = "contact-form";

export const tags = [
  { id: "algorithms", name: "algorithms" },
  { id: "tutorials", name: "tutorials" },
  {
    id: "frontEnd",
    name: "front-end",
  },
  {
    id: "backEnd",
    name: "backend",
  },
  {
    id: "css",
    name: "css",
  },
  {
    id: "html",
    name: "html",
  },
  {
    id: "javascript",
    name: "javascript",
  },
  {
    id: "performance",
    name: "performance",
  },
  {
    id: "personal",
    name: "personal",
  },
  {
    id: "productivity",
    name: "productivity",
  },
  {
    id: "react",
    name: "react",
  },
  {
    id: "remix",
    name: "remix",
  },
  {
    id: "typescript",
    name: "typescript",
  },
  {
    id: "git",
    name: "git",
  },
  {
    id: "resources",
    name: "resources",
  },
  {
    id: "testing",
    name: "testing",
  },
  {
    id: "general",
    name: "general",
  },
  { id: "security", name: "security" },
  { id: "hosting", name: "hosting" },
  { id: "databases", name: "databases" },
];

export const enum TEXT_HIGHLIGHT {
  BLUE = "var(--blue)",
  YELLOW = "var(--yellow)",
  GREEN = "var(--green)",
  RED = "var(--red)",
  ORANGE = "var(--orange)",
  PINK = "var(--pink)",
  PURPLE = "var(--purple)",
}
export const enum STICKY_HIGHLIGHT {
  BLUE = "rgba(75, 150, 255, 0.1)",
  YELLOW = "var(--sticky-yellow-bg)",
  GREEN = "var(--sticky-green-bg)",
  ORANGE = "var(--sticky-orange-bg)",
  PINK = "rgb(255, 69, 140, 0.1)",
  PURPLE = "rgb(196, 69, 255, 0.1)",
  RED = "rgba(255, 69, 69, 0.1)",
}
export const enum STICKY_BORDER {
  BLUE = "rgba(75, 150, 255, 1)",
  YELLOW = "var(--sticky-yellow-border)",
  GREEN = "var(--sticky-green-border)",
  ORANGE = "var(--sticky-orange-border)",
  PINK = "rgb(255, 81, 148)",
  PURPLE = "rgb(203, 89, 255)",
  RED = "rgb(255, 69, 69)",
}
export const fixedWidthLayoutClasses = `relative max-w-screen-lg w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0`;

export const skills = [
  {
    id: "a",
    name: "Javascript",
    icon: "/images/tech/javascript.svg",
  },
  {
    id: "b",
    name: "Typescript",
    icon: "/images/tech/typescript.svg",
  },
  {
    id: "c",
    name: "React.js",
    icon: "/images/tech/react.svg",
  },
  {
    id: "d",
    name: "HTML",
    icon: "/images/tech/html.svg",
  },
  {
    id: "e",
    name: "CSS",
    icon: "/images/tech/css.svg",
  },
  {
    id: "f",
    name: "Firebase",
    icon: "/images/tech/firebase.svg",
  },
  {
    id: "g",
    name: "Netlify",
    icon: "/images/tech/netlify.svg",
  },
  // {
  //   id: "h",
  //   name: "Supabase",
  //   icon: "/images/tech/supabase.svg"
  // },
  // {
  //   id: "i",
  //   name: "MongoDB",
  //   icon: "/images/tech/mongodb.svg"
  // },
  // {
  //   id: "j",
  //   name: "Stripe",
  //   icon: "/images/tech/stripe.svg"
  // },
  {
    id: "k",
    name: "Next.js",
    icon: "/images/tech/nextjs.svg",
  },
  {
    id: "l",
    name: "Tailwind",
    icon: "/images/tech/tailwindcss.svg",
  },
  // {
  //   id: "m",
  //   name: "Framer",
  //   icon: "/images/tech/framer.svg"
  // },
  {
    id: "n",
    name: "Contentful",
    icon: "/images/tech/contentful.svg",
  },
  {
    id: "o",
    name: "NPM",
    icon: "/images/tech/npm.svg",
  },
  {
    id: "p",
    name: "Sendgrid",
    icon: "/images/tech/sendgrid.svg",
  },
  {
    id: "q",
    name: "Prisma",
    icon: "/images/tech/prisma.svg",
  },
  {
    id: "r",
    name: "Vercel",
    icon: "/images/tech/vercel.svg",
  },
  {
    id: "s",
    name: "Remix",
    icon: "/images/tech/remix.svg",
  },
  {
    id: "t",
    name: "Cloudflare",
    icon: "/images/tech/cloudflare.svg",
  },
  {
    id: "u",
    name: "NodeJS",
    icon: "/images/tech/nodejs.svg",
  },
];

export const abilities = [
  "Writing easily understood, modular, fast, and type-safe code with TypeScript and modern JavaScript syntax and publishing packages to NPM.",
  "Responsive and performant web pages with React or Remix, with and SSR for a better user experience.",
  "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge.",
  "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful and payment APIs like Stripe",
  "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
  "Modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly.",
];

export const recentProjects = [
  {
    name: "Lunar",
    description:
      "A simple demo landing page with parallax scrolling effect and responsive layout.",
    gitRepo: "https://github.com/alissanguyen/lunar",
    website: "https://lunar.alissanguyen.dev",
    img: "/images/projects/lunar.jpg",
  },
  {
    name: "League Demo Page",
    description: "A demo landing page for League of Legends with animations.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://league.alissanguyen.dev",
    img: "/images/projects/lol.jpg",
  },
  {
    name: "Atom",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    img: "/images/projects/atom.jpg",
  },
  {
    name: "Planets",
    description:
      "A responsive landing page to learn about planets in the universe.",
    gitRepo: "https://github.com/alissanguyen/planets",
    website: "https://planets.alissanguyen.dev",
    img: "/images/projects/planets.jpg",
  },
  {
    name: "Calculator App",
    description:
      "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.dev",
    img: "/images/projects/calculator.jpg",
  },
  {
    name: "GitHub Spotter 2.0",
    img: "/images/projects/githubspotter2.jpg",
    description:
      "A website designed to search GitHub users by usernames with GitHub API.",
    gitRepo: "https://github.com",
    website: "https://github.com",
  },
];

export const mainProjects = [
  {
    name: "useTypewriter Hook",
    img: "/images/projects/usetypewriter.jpg",
    description:
      "A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.",
    role: "2020 — Design & web development",
    frameworks: ["React.js", "Next.js", "TypeScript", "CSS"],
    gitRepo: "https://github.com/alissanguyen/react-use-typewriter",
    website: "https://usetypewriter.com/",
    npm: "https://www.npmjs.com/package/use-typewriter-hook",
    bgLight: "linear-gradient(-120deg, #fedfe7, #fbedff)",
    bgDark:
      "linear-gradient(120deg, rgba(255, 91, 137, 0.25) 53.5%, rgba(234, 68, 68, .25) 100.2%)",
  },

  {
    name: "Dont Buy From Me",
    img: "/images/projects/dontbuyfromme.jpg",
    description:
      "A demo shopping website with add to cart features and purchases enabled.",
    role: "2020 — Design & web development",
    frameworks: ["Remix", "Stripe", "TailwindCSS", "Prisma"],
    gitRepo: "https://github.com/alissanguyen/dont-buy-from-me",
    website: "http://www.dontbuyfrom.me/",
    inProgress: true,
    bgLight: "linear-gradient(120deg, #d3e0ff, #eaeaff)",
    bgDark:
      "linear-gradient(120deg, rgba(82, 91, 219, .25) 11.2%, rgba(65, 71, 150, 0.25))",
  },
  {
    name: "Clipboard Demo Page",
    img: "/images/projects/clipboard.jpg",
    description:
      "A responsive landing page for a tool called Clipboard with animations.",
    role: "2020 — Web development",
    frameworks: ["React.js", "Javascript", "HTML & SCSS"],
    gitRepo: "https://github.com/alissanguyen/clipboard-page",
    website: "https://clipboard.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #ffeede, #fff9ea)",
    bgDark:
      "linear-gradient(120deg, rgba(217, 164, 4, .25) 10.7%, rgba(242, 116, 5, .25) 113.2%)",
  },
  {
    name: "Crowdfund",
    img: "/images/projects/crowdfund.jpg",
    description: "A responsive demo landing page for crowdfunding projects.",
    role: "2020 — Web development",
    frameworks: ["React.js", "Javascript", "HTML & CSS"],
    gitRepo: "https://github.com/alissanguyen/demo-crowdfunding-page",
    website: "https://crowdfund.alissanguyen.dev",
    bgLight: "linear-gradient(120deg, #e0f7ff, #dffff4)",
    bgDark:
      "linear-gradient(120deg, rgba(14, 174, 87, .25) 0%, rgba(12, 116, 117, .25) 90%)",
  },
];

export const otherProjects = [
  {
    icon: GlassGaming,
    name: "Glass Gaming",
    description:
      "A demo UI for gamers to track gaming progress with inneumorphism design.",
    gitRepo: "https://github.com/alissanguyen/glass-gaming-website",
    website: "https://glassgaming.alissanguyen.dev",
  },
  {
    icon: Launch,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev",
  },
  {
    icon: Bookmark,
    name: "Bookmark Page Demo",
    description: "A demo landing page for a bookmark tool.",
    gitRepo: "https://github.com/alissanguyen/demo-bookmark-page",
    website: "https://bookmark.alissanguyen.dev",
  },
  {
    icon: Memory,
    name: "Memory Game",
    description: "A memory game website.",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    website: "https://memory.alissanguyen.dev/",
  },
  {
    icon: Invoice,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management.",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.dev",
  },

  {
    icon: Pomodoro,
    name: "Pomodoro Timer App",
    description: "A pomodoro inspired timer with mobile-first design.",
    gitRepo: "https://github.com/alissanguyen/pomodoro-app",
    website: "https://pomodoro.alissanguyen.dev/",
  },
  {
    icon: Weather,
    name: "Weatherly",
    description:
      "A 5-day weather website that includes forecast for every 3 hours.",
    gitRepo: "https://github.com/alissanguyen/weatherly",
    website: "https://weatherly.alissanguyen.dev/",
  },
];

export const facts = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description: "Chột and Đực (boys) give me energy to work hard everyday.",
    background: "/images/facts/cat.jpg",
  },
  {
    index: 2,
    title: `I won a semi-pro Dota2 tournament`,
    description: "This is probably the biggest achievement I have achieved :D",
    background: "/images/facts/harvard.jpg",
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    background: "/images/facts/snake.jpg",
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description:
      "When I was 10 I thought I can be the prime minister of Viet Nam XD. ",
    background: "/images/facts/ambitious.jpg",
  },
  {
    index: 5,
    title: "My favorite subject was Physics",
    description:
      "I once achieved 11th place in the provincial exam for excellent students in Physics.",
    background: "/images/facts/math.jpg",
  },
  {
    index: 6,
    title: "I love chili sauce!",
    description: "I can eat chili sauce with pretty much everything.",
    background: "/images/facts/tuong-ot.jpg",
  },
  {
    index: 7,
    title: "I'm still an aerospace engineer",
    description:
      "That's right, you're not mistaken, I studied aerospace in college",
    background: "/images/facts/hang-khong.jpg",
  },
  {
    index: 8,
    title: "I really like jokes but I suck at them",
    description: "Unfortunately these jokes only work if you got them.",
    background: "/images/facts/dad-joke.jpg",
  },
];

export const NAVBAR_ID = "Navbar";
