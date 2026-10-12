export const siteConfig = {
  name: "Mo'men Tarek",
  wordmark: "MO'MEN",
  title: "Full-Stack Developer",
  tagline: "Building ideas into reality.",
  location: "Egypt",

  email: "memo70931@gmail.com",
  whatsapp: "201556507666",  
  social: {
    github: "https://github.com/momen1010",
    linkedin: "https://www.linkedin.com/in/m%C3%B2men-tarek-983242392/",
    x: "",
  },

  cv: null,

  // ===== الصور =====
  portrait: {
    hero: "/portrait-hero.jpg",
    about: "/portrait-about.jpg",
    isPlaceholder: false, // ← خلاص عندك صورة
  },

  // ===== المشاريع =====
  projects: [
    {
      id: "kawkab-el-sa3ada",
      name: "Kawkab El Sa3ada",
      description: "A modern cafe website built around product presentation and customer ordering.",
      stack: ["React", "Node.js", "MongoDB"],
      screenshot: "/projects/happy.png",
      liveUrl: "https://kawkab-app.vercel.app/",
      repoUrl: "https://github.com/momen1010/kawkab-app.git",
    },
    {
      id: "tokyo-restaurant",
      name: "Tokyo Restaurant",
      description: "A restaurant web application with menu and ordering-related functionality.",
      stack: ["Next.js", "Firebase", "Tailwind"],
      screenshot: "/projects/tokyo.png",
      liveUrl: "https://tokyo-restaurant-eight.vercel.app/",
      repoUrl: "https://github.com/momen1010/tokyo-restaurant.git",
    },
    {
      id: "MO2men-car-s",
      name: "MO2men-car-s",
      description: "A simple and responsive web application for managing and displaying car listings..",
      stack: ["HTML5", "CSS3 / Tailwind CSS", "JavaScript"],
      screenshot: "/projects/car.png",
      repoUrl: "https://github.com/momen1010/MO2men-car-s.git",
    },
  ],

  // ===== المهارات =====
  skills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    backend: ["Node.js", "Express", "Python"],
    database: ["MongoDB", "Firebase", "PostgreSQL"],
    tools: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
  },
  song: {
    heading: "SOUND OF THE STREETS.",
    subheading: "The vibe behind the code.",
    title: "hwa 2nta meen",
    artist: "7mo elte5a",
    audio: "/audio/mo.mp3",
    cover: "",
    image: "/m00.jpeg",
    note: "Late nights, loud beats, clean code.",
  },
};