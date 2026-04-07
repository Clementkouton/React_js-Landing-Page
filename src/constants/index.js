import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  icoComment,
  icoDashboard,
  icoFacebook,
  icoFolders,
  icoInstagram,
  icoLinkedin,
  icoProfiles,
  icoStatistic,
  icoTailored,
  icoX,
  logoAmazon,
  logoGoogle,
  logoNetflix,
  logoSlack,
  logoZoom,
} from "../assets";

export const branding = [
  {
    id: "0",
    alt: "Logo Google",
    image: logoGoogle,
  },
  {
    id: "1",
    alt: "Logo Slack",
    image: logoSlack,
  },
  {
    id: "2",
    alt: "Logo Amazon",
    image: logoAmazon,
  },
  {
    id: "3",
    alt: "Logo Zoom",
    image: logoZoom,
  },
  {
    id: "4",
    alt: "Logo Netflix",
    image: logoNetflix,
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon Dashboard",
    image: icoDashboard,
    title: "Real-Time Analytics",
    text: "Visualize all your key metrics in one place with our intuitive dashboard. Track user engagement, conversion rates, and performance indicators in real-time to make data-driven decisions.",
  },
  {
    id: "1",
    alt: "Icon Comment",
    image: icoComment,
    title: "Team Collaboration",
    text: "Communicate seamlessly with your team through integrated messaging and comments. Share feedback, discuss strategies, and keep everyone aligned on project goals.",
  },
  {
    id: "2",
    alt: "Icon Tailored",
    image: icoTailored,
    title: "Personalized Experience",
    text: "Customize your workspace to match your workflow. Tailor notifications, layouts, and settings to create the perfect environment for your unique needs.",
  },
  {
    id: "3",
    alt: "Icon Statistic",
    image: icoStatistic,
    title: "Advanced Reporting",
    text: "Generate comprehensive reports with detailed analytics and insights. Export data in multiple formats and create custom visualizations to understand your business performance.",
  },
  {
    id: "4",
    alt: "Icon Profiles",
    image: icoProfiles,
    title: "User Management",
    text: "Manage team members and access permissions with ease. Create custom roles, control user permissions, and maintain security across your organization.",
  },
  {
    id: "5",
    alt: "Icon Folders",
    image: icoFolders,
    title: "Smart Organization",
    text: "Keep your projects organized with intuitive folder structures and tagging systems. Find files instantly with powerful search and filtering capabilities.",
  },
];

export const bulletPoints = [
  {
    id: "0",
    alt: "Quick Setup",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "Get Started in Minutes",
    text: "Our platform is designed for simplicity. Sign up, configure your workspace, and start tracking metrics within minutes. No technical expertise required.",
  },
  {
    id: "1",
    alt: "Multi-Device Support",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "Access Anywhere, Anytime",
    text: "Work seamlessly across desktop, tablet, and mobile devices. Your data syncs automatically so you always have the latest information at your fingertips.",
  },
  {
    id: "2",
    alt: "Enterprise Security",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "Enterprise-Grade Security",
    text: "Your data is protected with industry-leading encryption and compliance standards. Rest assured your sensitive information is safe with our secure infrastructure.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Starter",
    amount: 0,
    featured: false,
    features: [
      "Up to 10,000 monthly events",
      "1 project workspace",
      "Basic analytics dashboard",
      "30 days data retention",
      "Community support",
    ],
  },
  {
    id: "1",
    plan: "Professional",
    amount: 29,
    featured: true,
    features: [
      "Up to 1,000,000 monthly events",
      "5 project workspaces",
      "Advanced analytics & reports",
      "12 months data retention",
      "Priority email support",
      "Custom integrations",
    ],
  },
  {
    id: "2",
    plan: "Enterprise",
    amount: 99,
    featured: false,
    features: [
      "Unlimited monthly events",
      "Unlimited workspaces",
      "Full customization & white-label",
      "Unlimited data retention",
      "24/7 dedicated support",
      "API access & webhooks",
      "SSO & advanced security",
    ],
  },
];


export const social = [
  {
    id: "0",
    ico: icoFacebook,
    alt: "Facebook",
    link: "#/",
  },
  {
    id: "1",
    ico: icoX,
    alt: "X",
    link: "#/",
  },
  {
    id: "2",
    ico: icoInstagram,
    alt: "Instagram",
    link: "#/",
  },
  {
    id: "3",
    ico: icoLinkedin,
    alt: "Linkedin",
    link: "#/",
  },
];
