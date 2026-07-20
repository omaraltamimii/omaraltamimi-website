export const site = {
  name: "Omar Al Tamimi",
  role: "Production & Automation Engineering Student",
  university: "Munich University of Applied Sciences",
  roles: [
    "Working Student — KRONES AG",
    "Team Member — FlightLab (Student Team)",
    "Mechanical Product Development",
    "Structural Development",
    "Founder of WolvesMacht",
    "CAD Engineering",
    "Product Development",
  ],
  location: "Munich, Germany",
  email: "omaraltamimi.de@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/omar-al-tamimi-37457428a/",
    instagram: "https://www.instagram.com/omar.altamimii/",
    github: "https://github.com/omaraltamimii",
  },
  companies: [
    { name: "KRONES AG", role: "Working Student — Mechanical Product Development" },
    { name: "FlightLab", role: "Team Member — Structural Development (Student Team)" },
    { name: "Munich University of Applied Sciences", role: "B.Eng. Production & Automation Engineering" },
  ],
};

export const nav = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "engineering", label: "ENGINEERING STUDIO" },
  { id: "work", label: "WORK WITH ME" },
  { id: "knowledge", label: "KNOWLEDGE HUB" },
  { id: "wolvesmacht", label: "WOLVESMACHT" },
  { id: "contact", label: "CONTACT" },
];

export const quickFacts = [
  { icon: "📍", label: "Munich, Germany" },
  { icon: "🎓", label: "Munich University of Applied Sciences" },
  { icon: "⚙️", label: "Production & Automation Engineering" },
  { icon: "🏭", label: "Working Student — KRONES AG" },
  { icon: "✈️", label: "Team Member — FlightLab (Student Team)" },
  { icon: "🐺", label: "Founder of WolvesMacht" },
  { icon: "🌍", label: "Arabic" },
  { icon: "🇩🇪", label: "German (DSH-2 / C1)" },
  { icon: "🇬🇧", label: "English" },
];

export type TimelineEntry = {
  date: string;
  title: string;
  body: string;
  tag?: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "2018",
    title: "Roots in Palestine",
    body: "Born and raised in Palestine. Graduated high school with a GPA equivalent to 1.8 in the German system. Decided to pursue engineering in Germany.",
    tag: "Origin",
  },
  {
    date: "2019",
    title: "Moved to Germany",
    body: "Started intensive German language studies. Adapted to a new country, culture and educational system.",
    tag: "Relocation",
  },
  {
    date: "2020",
    title: "DSH-2 (C1 German)",
    body: "Achieved the DSH-2 qualification (C1 German proficiency) and qualified for admission to German universities.",
    tag: "Language",
  },
  {
    date: "2021",
    title: "Worked full-time",
    body: "Positions at Amazon, warehouse and hospitality. Saved for relocation, accommodation, university and living expenses. Built discipline and financial responsibility.",
    tag: "Work",
  },
  {
    date: "2021–2023",
    title: "Engineering studies begin",
    body: "Housing difficulties, health setbacks and academic challenges delayed progress — but strengthened resilience. Successfully transferred to Munich University of Applied Sciences.",
    tag: "Studies",
  },
  {
    date: "Oct 2023",
    title: "Munich University of Applied Sciences",
    body: "Started Production & Automation Engineering. Discovered passion for mechanical product development, CAD engineering, product design, DFM, industrial and automation systems.",
    tag: "University",
  },
  {
    date: "Aug 2025",
    title: "KRONES AG — Internship",
    body: "Mechanical Product Development Intern. Worked on CAD engineering, engineering documentation, DFM, technical drawings, product optimization and engineering change management.",
    tag: "Industry",
  },
  {
    date: "2025 – Present",
    title: "KRONES AG — Working Student",
    body: "Continued in Mechanical Product Development, supporting industrial product development while expanding engineering expertise.",
    tag: "Industry",
  },
  {
    date: "Jun 2026 – Present",
    title: "FlightLab — Team Member (Student Team)",
    body: "Structural Development. Development of unmanned aircraft systems, lightweight structures, engineering documentation and manufacturing-ready solutions.",
    tag: "Industry",
  },
  {
    date: "Road Ahead",
    title: "The Road Ahead",
    body: "Become a Mechanical Product Development Engineer. Build innovative products. Launch WolvesMacht. Create engineering businesses. Help and mentor international students.",
    tag: "Vision",
  },
];

export const engineering = {
  experience: [
    {
      company: "KRONES AG",
      role: "Working Student — Mechanical Product Development",
      points: [
        "Mechanical Product Development",
        "CAD Engineering",
        "Engineering Documentation",
        "Design for Manufacturing",
        "Engineering Change Management",
      ],
    },
    {
      company: "FlightLab",
      role: "Team Member — Structural Development (Student Team)",
      points: [
        "Unmanned aircraft systems",
        "Lightweight structures",
        "Engineering documentation",
        "Manufacturing-ready solutions",
      ],
    },
  ],
  projects: [
    "Mechanical Product Development",
    "CAD Engineering",
    "Product Design",
    "Engineering Documentation",
    "Design for Manufacturing",
    "Manufacturing",
    "Engineering Change Management",
    "Technical Drawings",
  ],
  software: [
    "Solid Edge",
    "SolidWorks",
    "Fusion 360",
    "AutoCAD",
    "Python",
    "LTspice",
  ],
  skills: [
    "Mechanical Design",
    "CAD",
    "DFM",
    "Industrial Engineering",
    "Automation",
    "Engineering Documentation",
  ],
};

export const workWithMe = [
  {
    title: "Engineering",
    items: [
      "CAD Modeling",
      "Mechanical Product Development",
      "Product Design",
      "Engineering Documentation",
      "Technical Drawings",
      "Engineering Consulting",
      "Design for Manufacturing",
      "Reverse Engineering",
    ],
  },
  {
    title: "Student Success",
    items: [
      "Technical Mechanics",
      "Statics",
      "Strength of Materials",
      "Vibrations",
      "Machine Elements",
      "Construction (Konstruktion)",
      "CAD",
      "Exam Preparation",
      "Study Planning",
      "CV Reviews",
      "Career Guidance",
    ],
  },
  {
    title: "Germany",
    items: [
      "Student Mentoring",
      "German Conversation Practice",
      "Engineering Career Guidance",
      "Working Student Advice",
      "Internship Advice",
      "CV",
      "Cover Letter",
      "Interview Preparation",
      "Accommodation Tips",
      "University Tips",
    ],
    note: "Only advice based on my own experience — not legal or immigration consulting.",
  },
  {
    title: "Modeling",
    items: [
      "Commercial",
      "Lifestyle",
      "Sports",
      "Fitness",
      "Brand Collaborations",
      "Campaigns",
    ],
  },
];

export const knowledgeHub = {
  topics: [
    "Engineering",
    "Germany",
    "Career",
    "Fitness",
    "Product Development",
    "CAD",
    "Mechanical Engineering",
    "Production Engineering",
    "Automation",
  ],
  downloads: [
    "Engineering CV Template",
    "German CV Template",
    "Cover Letter Template",
    "Internship Checklist",
    "Study Planner",
    "Technical Mechanics Notes",
    "Formula Sheets",
    "CAD Shortcuts",
    "Engineering Interview Questions",
    "University Survival Guide",
  ],
};

export const wolvesmacht = {
  name: "WolvesMacht",
  arabic: "سطوة الذئاب",
  translit: "Satwat Al-Dhi'ab",
  meaning: "The Strength and Presence of the Wolves.",
  story: [
    "WolvesMacht was never created to become just another clothing brand. It was born from a simple belief: the strongest communities are built on shared values.",
    "The name combines two powerful ideas. \"Wolves\" represent loyalty, resilience, intelligence and unity — a wolf is strong on its own, but a pack becomes something far greater than the sum of its members. \"Macht\" is the German word for strength, power and influence.",
    "WolvesMacht is founded on the idea that while family is one of life's greatest blessings, we also have the opportunity to build another family throughout our journey — a family connected by purpose, respect and shared values.",
    "It is for people who choose discipline over excuses. People who value loyalty. People who lift each other up instead of competing against one another. People who understand that greatness is built through consistency, not shortcuts.",
    "Whether you are an engineer, entrepreneur, athlete, student or creator, your background does not define your place here. Your character does.",
  ],
  pillars: [
    {
      title: "A Community",
      body: "Bringing together ambitious individuals who believe in becoming stronger — physically, mentally and professionally — while helping those around them do the same.",
    },
    {
      title: "A Symbol of Discipline",
      body: "A commitment to continuous growth. A reminder that we can always find people who share our vision and walk the same path.",
    },
    {
      title: "A Pack, Not a Coincidence",
      body: "A pack is not formed by coincidence. It is formed by people who choose to move forward together.",
    },
  ],
  roadmap: [
    { phase: "Phase 01", title: "Foundation", body: "Community, identity and the WolvesMacht manifesto." },
    { phase: "Phase 02", title: "First Drop", body: "Initial apparel release rooted in the pack's values." },
    { phase: "Phase 03", title: "Community Platform", body: "Spaces for engineers, athletes and creators to grow together." },
    { phase: "Phase 04", title: "Long-Term Movement", body: "A brand and community that outlends any single product." },
  ],
  launchDate: "To be announced",
  newsletter: "Join the pack. Receive updates on the launch, drops and community.",
};

export const contact = {
  email: "omaraltamimi.de@gmail.com",
  socials: [
    { label: "LinkedIn", href: site.socials.linkedin },
    { label: "Instagram", href: site.socials.instagram },
    { label: "GitHub", href: site.socials.github },
  ],
};
