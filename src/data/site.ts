export const site = {
  name: "Omar Al Tamimi",
  role: "Production & Automation Engineering (Mechatronics) Student",
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
    { name: "Munich University of Applied Sciences", role: "B.Eng. Production & Automation Engineering (Mechatronics)" },
  ],
};

export const nav = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "story", label: "WHO IS OMAR" },
  { id: "engineering", label: "ENGINEERING STUDIO" },
  { id: "work", label: "WORK WITH ME" },
  { id: "knowledge", label: "KNOWLEDGE HUB" },
  { id: "wolvesmacht", label: "WOLVESMACHT" },
  { id: "contact", label: "CONTACT" },
];

export const quickFacts = [
  { icon: "📍", label: "Munich, Germany" },
  { icon: "🎓", label: "Munich University of Applied Sciences" },
  { icon: "⚙️", label: "Production & Automation Engineering (Mechatronics)" },
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
    body: "Started Production & Automation Engineering (Mechatronics). Discovered passion for mechanical product development, CAD engineering, product design, DFM, industrial and automation systems.",
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

export type StoryBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string };

export const story: StoryBlock[] = [
  { type: "heading", text: "Who Is Omar Al Tamimi?" },
  { type: "paragraph", text: "Some people grow up believing that the future is something they can simply plan." },
  { type: "paragraph", text: "Omar Al Tamimi grew up learning something different:" },
  { type: "quote", text: "Sometimes, before you can build a future, you first have to learn how to survive the present." },
  { type: "paragraph", text: "Omar was born as the youngest of seven children, into a family that was already entering a different stage of life. His parents were older, his older siblings were already growing into their own lives, and Omar often felt as though he had arrived at the end of a chapter that had begun long before him." },
  { type: "paragraph", text: "There was love, but there was also pressure." },
  { type: "paragraph", text: "The family did not have much money. From the outside, people might have assumed they were doing reasonably well, but inside the home, life was shaped by financial uncertainty, responsibilities, and constant pressure." },
  { type: "paragraph", text: "Omar grew up surrounded by problems that were much bigger than a child should have to understand." },
  { type: "paragraph", text: "His father had difficult relationships with many people and gradually became increasingly isolated, including from parts of his own family. That isolation affected Omar too. Relationships that might otherwise have existed naturally became complicated, and Omar grew up without a strong circle of people his own age." },
  { type: "paragraph", text: "Even work was not always a place of safety." },
  { type: "paragraph", text: "When he worked alongside his father, he experienced bullying and difficult treatment from people around him. Instead of learning that the world was a safe place to belong, he learned early to be cautious, to observe, and to protect himself." },
  { type: "paragraph", text: "At school, things were not easy either." },
  { type: "paragraph", text: "Academically, Omar struggled at times. Outside the classroom, he carried a constant sense of pressure and fear. While other children could simply focus on growing up, he often felt as though he had to think about problems that were already waiting for him." },
  { type: "paragraph", text: "He was learning to survive before he had learned how to live." },
  { type: "paragraph", text: "Then, in 2016, his mother died." },
  { type: "paragraph", text: "She was one of the central figures in his life, and losing her while he was still young changed him permanently." },
  { type: "paragraph", text: "It was not simply the loss of a person." },
  { type: "paragraph", text: "It was the loss of one of the places where life felt familiar." },
  { type: "paragraph", text: "After that, the feeling of having to stand on his own became even stronger." },
  { type: "paragraph", text: "Years later, Omar would describe much of his early life through a simple idea: survival mode." },
  { type: "paragraph", text: "Always thinking about the next problem. The next payment. The next responsibility. The next thing that could go wrong." },
  { type: "paragraph", text: "And yet, somewhere inside that environment, another instinct was developing — the desire to build a different life." },
  { type: "heading", text: "A New Chapter" },
  { type: "paragraph", text: "In 2019, Omar left Palestine and moved to Germany." },
  { type: "paragraph", text: "He did not arrive with everything figured out." },
  { type: "paragraph", text: "He arrived with ambition, uncertainty, and the determination to create possibilities that had not existed before." },
  { type: "paragraph", text: "Germany became a completely new chapter. A new language. A new culture. A new education system. A new social environment. A new way of living." },
  { type: "paragraph", text: "But the transition was not easy." },
  { type: "paragraph", text: "Instead of immediately feeling at home, Omar sometimes found himself facing the opposite: long nights, loneliness, financial uncertainty, and the feeling of being far away from the people and environment he had known." },
  { type: "paragraph", text: "There were moments when the silence became heavy enough to make him question everything — even whether he was being heard by God." },
  { type: "paragraph", text: "But he continued learning." },
  { type: "paragraph", text: "Not just German. He was learning Germany itself. How to navigate its institutions. How to study within its system. How to work. How to live independently. How to ask for help. How to keep going when help was not available." },
  { type: "paragraph", text: "In 2020, the COVID-19 pandemic arrived and disrupted the world." },
  { type: "paragraph", text: "For Omar, studying in a foreign country became even more isolated. University life moved behind screens, normal routines disappeared, and the process of building a new life became harder at exactly the moment when connection was needed most." },
  { type: "paragraph", text: "Still, he continued his education." },
  { type: "paragraph", text: "The years that followed were not a smooth climb." },
  { type: "paragraph", text: "There were periods of serious financial pressure. Accommodation became unstable enough that Omar changed where he lived four times within a single year. Eventually, he lost his place in student accommodation altogether." },
  { type: "paragraph", text: "There were long journeys simply to reach the places he needed to be, sometimes spending hours travelling in a single day." },
  { type: "paragraph", text: "And through all of it, he kept studying." },
  { type: "paragraph", text: "He was also learning to live with a physical burden that few people could see." },
  { type: "paragraph", text: "A tumor behind his eye, close to the optic nerve, brought pain into parts of everyday life that looked completely normal from the outside. There were days when studying, working, or simply concentrating required pushing through discomfort that other people could not see." },
  { type: "paragraph", text: "At other points, depression and exhaustion made even ordinary responsibilities difficult." },
  { type: "paragraph", text: "But Omar had already spent much of his life learning what it meant to continue when circumstances were not ideal." },
  { type: "paragraph", text: "So he continued." },
  { type: "paragraph", text: "Not because it was easy." },
  { type: "paragraph", text: "Because stopping was never the life he wanted." },
  { type: "heading", text: "Building Something Different" },
  { type: "paragraph", text: "At Hochschule München, Omar found a direction that connected naturally with the way he had always thought." },
  { type: "paragraph", text: "Engineering." },
  { type: "paragraph", text: "He pursued Production & Automation Engineering (Mechatronics) and began developing interests across mechanical design, CAD, electronics, programming, automation, product development, and emerging technologies." },
  { type: "paragraph", text: "Engineering gave structure to something that had always existed inside him: the desire to understand how things work and then make them better." },
  { type: "paragraph", text: "His education eventually moved beyond classrooms." },
  { type: "paragraph", text: "Through his experience at KRONES AG, Omar gained hands-on experience in mechanical product development and saw what engineering looks like when ideas have to become real machines." },
  { type: "paragraph", text: "Through FlightLab, he explored structural development for unmanned aircraft systems and continued working at the intersection of mechanical engineering and technology." },
  { type: "paragraph", text: "The boy who once felt that his circumstances were larger than his possibilities was gradually becoming someone capable of creating possibilities himself." },
  { type: "paragraph", text: "But engineering was only one part of the transformation." },
  { type: "heading", text: "From Survival to Strength" },
  { type: "paragraph", text: "Omar also became an athlete." },
  { type: "paragraph", text: "Training became a different kind of education." },
  { type: "paragraph", text: "In the gym, progress was measurable." },
  { type: "paragraph", text: "One repetition became two. Two became five. Five became ten." },
  { type: "paragraph", text: "Strength was no longer something abstract. It was something that could be built." },
  { type: "paragraph", text: "Slowly, the mindset developed through years of adversity found a new direction." },
  { type: "paragraph", text: "Survival became discipline. Fear became preparation. Pressure became resilience. And uncertainty became motivation to build something of his own." },
  { type: "paragraph", text: "That philosophy eventually became part of the idea behind WolvesMacht — a vision centered around strength, loyalty, discipline, personal development, and building together." },
  { type: "paragraph", text: "Because Omar understands what it feels like to have very little. Very little money. Very little certainty. Very little support. And sometimes, very little reason to believe that tomorrow will be easier." },
  { type: "paragraph", text: "He also understands that people do not have to remain defined by where they started." },
  { type: "heading", text: "Engineer. Athlete. Builder." },
  { type: "paragraph", text: "Today, Omar is still learning. He is still studying. Still training. Still experimenting. Still building." },
  { type: "paragraph", text: "But there is an important difference between the person who arrived in Germany and the person he is becoming." },
  { type: "paragraph", text: "He is no longer only trying to survive." },
  { type: "paragraph", text: "He is learning how to live. How to create. How to connect. How to build relationships. How to build a career. How to build businesses. How to build a life that is not controlled by fear of what comes next." },
  { type: "paragraph", text: "His journey has never been a straight line." },
  { type: "paragraph", text: "It has included loss, poverty, bullying, isolation, academic struggles, migration, a global pandemic, financial instability, housing uncertainty, physical pain, depression, and moments of profound doubt." },
  { type: "paragraph", text: "But none of those things became the end of his story. They became part of its foundation." },
  { type: "paragraph", text: "Every time life forced him to begin again, he learned something new about himself. Every difficult chapter left behind another layer of resilience." },
  { type: "paragraph", text: "And every time the world told him to simply endure, another part of him began asking a different question:" },
  { type: "quote", text: "What can I build from this?" },
  { type: "paragraph", text: "That question is still guiding him today." },
  { type: "paragraph", text: "Omar does not want his past to be something he hides. He wants to transform it. Into knowledge. Into strength. Into engineering. Into entrepreneurship. Into opportunities for other people. Into something that lasts longer than the circumstances that created it." },
  { type: "paragraph", text: "Because his story was never really about having an easy life." },
  { type: "quote", text: "It was about learning to build one." },
  { type: "paragraph", text: "Engineer. Athlete. Builder." },
  { type: "paragraph", text: "From survival mode to building mode." },
  { type: "paragraph", text: "And the story is still being written." },
];
