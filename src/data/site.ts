// ============================================================
// CENTRAL CONTENT CONFIGURATION
// All editable content lives here. Update values to change the
// website without touching component code.
// ============================================================

export const site = {
  name: "Omar Al Tamimi",
  shortName: "Omar",
  role: "Production & Automation Engineering (Mechatronics)",
  location: "Munich, Germany",
  email: "omaraltamimi.de@gmail.com",
  instagramUrl: "https://www.instagram.com/omar.altamimii/",
  heroTagline: "Engineering × Strength × Calisthenics",
  muscleUpGoal: 10,
  muscleUpCurrent: 1,
};

export const nav = [
  { id: "fitness", label: "FITNESS" },
  { id: "engineering", label: "ENGINEERING" },
  { id: "about", label: "ABOUT" },
  { id: "work", label: "WORK WITH ME" },
  { id: "contact", label: "CONTACT" },
];

// ============================================================
// MEDIA SYSTEM — Replace placeholder paths with real media
// ============================================================

export const media = {
  heroImage: "/images/Omar.Training.jpeg",
  heroVideo: null as string | null,
  fitness: [
    { label: "Muscle-Up @ 112 KG", category: "Muscle-ups", src: "/images/Omar.Training.jpeg" },
    { label: "Weights", category: "Weighted dips", src: "/images/Weighted_Dips.jpeg" },
    { label: "Pull-Up Strength", category: "Pull-ups", src: "/images/WhatsApp_Image_2025-02-24_at_22.33.53.jpeg" },
    { label: "Calisthenics", category: "Bodyweight strength", src: "/images/Portrait.jpeg" },
    { label: "Athletic Training", category: "Strength", src: "/images/Frame_1511.png" },
  ],
};

// ============================================================
// STATS — Social proof strip
// ============================================================

export const stats = [
  { value: "152K+", label: "Views in the last 30 days" },
  { value: "29K+", label: "Highest Reel views" },
  { value: "359", label: "Instagram followers" },
  { value: "193 CM", label: "Height" },
];

// ============================================================
// INTRO — Three pillars
// ============================================================

export const pillars = [
  {
    number: "01",
    title: "ENGINEERING",
    body: "Production & Automation Engineering (Mechatronics)",
  },
  {
    number: "02",
    title: "STRENGTH",
    body: "Strength training & athletic development",
  },
  {
    number: "03",
    title: "CALISTHENICS",
    body: "Bodyweight strength, skills & muscle-ups",
  },
];

// ============================================================
// FITNESS SECTION
// ============================================================

export const fitnessCategories = [
  "Muscle-ups",
  "Pull-ups",
  "Weighted pull-ups",
  "Dips",
  "Weighted dips",
  "Calisthenics",
  "Strength training",
  "Athletic development",
  "Mobility",
  "Other sports",
];

// ============================================================
// MUSCLE-UP JOURNEY PROGRESSION
// ============================================================

export const muscleUpProgression = [1, 3, 5, 10];

// ============================================================
// CREATOR / UGC SECTION
// ============================================================

export const creatorServices = [
  { title: "UGC", body: "Fitness UGC for social media and advertising." },
  { title: "SPORTSWEAR", body: "Training and lifestyle content featuring sportswear." },
  { title: "PRODUCT CONTENT", body: "Natural product demonstrations and fitness-focused product integration." },
  { title: "SHORT-FORM VIDEO", body: "Instagram Reels and social-first creative." },
  { title: "TRAINING CONTENT", body: "Authentic gym and calisthenics content." },
  { title: "AD CREATIVES", body: "Short-form content suitable for paid social advertising." },
];

// ============================================================
// ENGINEERING SECTION
// ============================================================

export const engineering = {
  image: "/images/Engineering.jpeg",
  experience: [
    {
      company: "KRONES AG",
      role: "Industrial experience — Mechanical Product Development",
    },
  ],
  tools: {
    cad: ["Solid Edge", "SolidWorks", "Fusion 360", "AutoCAD"],
    embedded: ["Arduino", "ESP32"],
    programming: ["Python", "C"],
  },
  focus: [
    "Production & Automation",
    "CAD & 3D Design",
    "Embedded Systems",
    "Automation",
    "Engineering Projects",
    "Industrial Experience",
  ],
};

// ============================================================
// ABOUT SECTION
// ============================================================

export const about = {
  paragraphs: [
    "Omar Al Tamimi is a Production & Automation Engineering (Mechatronics) student based in Munich, Germany.",
    "Outside university, he focuses on strength training, calisthenics and athletic development.",
    "His current athletic goal is to progress toward 10 consecutive muscle-ups while continuously developing strength, skills and overall athletic performance.",
    "He is also building a personal brand around engineering, fitness and continuous self-development.",
  ],
};

// ============================================================
// CONTENT / JOURNEY SECTION
// ============================================================

export const journeyItems = [
  { title: "MUSCLE-UP", body: "Skill development" },
  { title: "STRENGTH", body: "Weighted dips / pull-ups" },
  { title: "CALISTHENICS", body: "Bodyweight skills" },
  { title: "ATHLETICISM", body: "Different sports and physical development" },
  { title: "ENGINEERING", body: "Technical development" },
];
