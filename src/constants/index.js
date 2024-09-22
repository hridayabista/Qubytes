import {
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  discordBlack,
  facebook,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Services",
    url: "#services",
  },
  {
    id: "1",
    title: "Softwares",
    url: "#softwares",
  },
  {
    id: "2",
    title: "Book Now",
    url: "#softwares",
  },
  {
    id: "3",
    title: "Categories",
    url: "#categories",
  },
  {
    id: "4",
    title: "More Info",
    url: "#categories",
  },
  {
    id: "5",
    title: "Get Started",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Automated Account Generation",
  "Automated Audit Reporting",
  "Automated IRD and Tax Calculations",
  "Automated Business Progress Tracking",
  "Strategic Business Progression Suggestions",
];

export const roadmap = [
  {
    id: "0",
    title: "CMS Websites and Mobile Apps",
    text: "Unlock the full potential of your business with intuitive Content Management System websites and user-friendly mobile apps.",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "E-Commerce Websites and Mobile Apps",
    text: "Boost your sales with custom e-commerce platforms and high-performance mobile apps.",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Hotel, Cafe, Restaurant Booking and Tourism Plannig",
    text: "Unlock new opportunities with our integrated booking and tourism planning solutions for the hospitality industry.",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "E-Learnign and Education Planning",
    text: "Enhance your educational programs with integrated e-learning platforms and comprehensive planning solutions.",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Software Development",
    text: "Propel your business to new heights with our cutting-edge and innovative software solutions, designed to drive sustained growth and operational excellence.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitCard1,
  },
  {
    id: "1",
    title: "Website and Web App Development",
    text: "Boost your business with our expert website and web app development services, designed to enhance engagement and drive growth.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitCard2,
    light: true,
  },
  {
    id: "2",
    title: "Mobile App Development",
    text: "Revolutionize your business strategy with our seamless and intuitive mobile app development services.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitCard3,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
