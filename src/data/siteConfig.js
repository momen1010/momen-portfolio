export const siteConfig = {
    name: "Mo'men Tarek",
    wordmark: "MO'MEN",
    title: "Full-Stack Developer",
    tagline: "Building ideas into reality.",
    location: "Egypt",
  
    // ===== التواصل الحقيقي =====
    email: "memo70931@gmail.com",
    social: {
      github: "https://github.com/momen1010",
      linkedin: "https://www.linkedin.com/in/m%C3%B2men-tarek-983242392/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5Jb1aM4jQICCSpX648z5IA%3D%3D", // ← اتأكد من الرابط
     
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
  };