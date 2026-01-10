/** SIDE NAVBAR */
export const avatar = [
    { label: "profile", icon: "/images/nvBj-vz0.jpg", href: "#top", isImage: true },
];

export const sideLinks = [
  { label: "projects", icon: "PRJ", href: "#projects" },
  { label: "tech", icon: "TEC", href: "#tech" },
  { label: "experience", icon: "EXP", href: "#experience" },
  { label: "certs", icon: "CER", href: "#certs" },
  { label: "contact", icon: "/icons/email-envelope-white-icon.svg", href: "#contact", isImage: true },
];

/** HERO SECTION */
export const terminalLines = [
  "Welcome to Rachna's Portfolio",
  "---",
  "For a list of available commands, type `help`",
];

export const heroLinks = [
  { label: "Download CV", icon: "/icons/download-2-128.ico", isImage: true, href: "/cv.pdf"},
  { label: "Contact me", href: "#contact" },
  { label: "@facebook", icon: "/icons/facebook.svg", href: "https://www.facebook.com/CycomCyber", isImage: true, iconSize: 1.9 },
  { label: "@instagram", icon: "/icons/instagram.svg", href: "https://instagram.com", isImage: true, iconSize: 1.9 },
  { label: "@linkedin", icon: "/icons/linkedin.svg", href: "https://www.linkedin.com/in/ream-rachna-pich/", isImage: true, iconSize: 1.8 },
  { label: "@github", icon: "/icons/github.svg", href: "https://github.com/pich-reamrachna", isImage: true, iconSize: 2.1 },
];

/** PROJECTS SECTION */
export const projects = [
  {
    title: "Metasploitable",
    description: "This project focuses on utilizing Metasploit for penetration testing, aiming to identify and exploit vulnerabilities in systems.",
    imageUrl: "/images/splash.png",
    projectUrl: "",
  },
  {
    title: "Honeypot",
    description: "This project aims to strengthen organizations application security through capturing and analyzing their attackers' behaviour and purpose.",
    imageUrl: "/images/splash.png",
    projectUrl: "",
  },
  {
    title: "Human-Pose Follower Robot",
    description: "Self-gathered datasets in order to train a model using YOLOV8 Pose Classification model. Utilized that model to control a Robot action based on Human Pose.",
    imageUrl: "/images/splash.png",
    projectUrl: "",
  },
];

/** TECHSTACK SECTION */
export const techstack = [
  {
    name: "Python", imageUrl: "/images/Python-logo-notext.svg.png", description: "Utilized Python to mobilize Robots."
  },
  {
    name: "Java", imageUrl: "/icons/Java_programming_language_logo.svg", description: "Utilized Java to create a simple terminal chat application."
  },
  {
    name: "Next.js", imageUrl: "/images/nextjs-icon-dark-background.png", description: "Utilized Next.js Framework in creating this portfolio."
  },
  {
    name: "HTML/CSS", imageUrl: "/images/html5-css3-hd-removebg-preview.png", description: "Utilized Basic HTML & CSS for web development."
  },
  {
    name: "Kali Linux", imageUrl: "/images/Kali-dragon-icon.svg.png", description: "Utilized Kali Linux for cybersecurity tools"
  },
  {
    name: "Metasploit", imageUrl: "/images/metasploit-framework-logo.svg.png", description: "Experienced in Metasploit for penetration testing on vulnerable machines."
  },
  {
    name: "Wireshark", imageUrl: "/images/wireshark-logo-big.CkRjSOaC_2eT4Ah.png", description: "Basic Wireshark packet analysis."
  },
  {
    name: "Nmap", imageUrl: "/images/nmap.png", description: "Experienced in Nmap for network scanning."
  }
];

/** EXPERIENCE SECTION */
export const experience = [
  {
    role: "Web Development",
    year: "2025 - Present",
  },
  {
    role: "Capture The Flag (CTF) Competitor",
    year: "2025",
  }
]
