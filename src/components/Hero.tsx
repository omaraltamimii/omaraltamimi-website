import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Rocket,
  GraduationCap,
  Shield,
} from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const EXPERIENCE = [
  {
    icon: Building2,
    title: "KRONES AG",
    subtitle: "Mechanical Product Development",
    description:
      "Developing industrial packaging machinery through CAD engineering, product development, engineering documentation and manufacturing-oriented design.",
  },
  {
    icon: Rocket,
    title: "FlightLab",
    subtitle: "Structural Development",
    description:
      "Structural development of unmanned aircraft systems with a focus on lightweight structures, engineering documentation and design for manufacturing.",
  },
  {
    icon: GraduationCap,
    title: "Munich University of Applied Sciences",
    subtitle: "Production & Automation Engineering",
    description:
      "Final-Year Production & Automation Engineering student specializing in mechanical product development, CAD engineering and manufacturing systems.",
  },
  {
    icon: Shield,
    title: "WolvesMacht",
    subtitle: "Founder",
    description:
      "Building a premium performance brand inspired by engineering, discipline and continuous self-improvement.",
  },
];

const STATS = [
  {
    value: "2+",
    label: "Industrial Engineering Positions",
  },
  {
    value: "2",
    label: "Engineering Companies",
  },
  {
    value: "6+",
    label: "Years in Germany",
  },
  {
    value: "1",
    label: "Startup in Development",
  },
];

const go = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-pad pt-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-lux relative z-20"
      >
        {/* Location Badge */}
        <motion.div variants={item}>
          <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            Mechanical Product Development • Munich, Germany
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="mt-8 text-6xl font-black leading-[0.9] tracking-tight text-white md:text-8xl xl:text-[7rem]"
        >
          Omar
          <br />
          <span className="text-orange-500">Al Tamimi</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          {[
            "Mechanical Product Development",
            "CAD Engineering",
            "Entrepreneur",
            "Weighted Calisthenics",
          ].map((role) => (
            <span
              key={role}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-md"
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* University */}
        <motion.p
          variants={item}
          className="mt-8 text-sm uppercase tracking-[0.25em] text-orange-400"
        >
          Final-Year Production & Automation Engineering Student
        </motion.p>

        <motion.p variants={item} className="mt-2 text-lg text-gray-400">
          Munich University of Applied Sciences (HM)
        </motion.p>

        {/* Main Headline */}
        <motion.h2
          variants={item}
          className="mt-10 max-w-5xl text-4xl font-light leading-tight text-white md:text-6xl"
        >
          Engineering Products.
          <br />
          <span className="font-semibold text-orange-500">
            Building Businesses.
          </span>
          <br />
          Inspiring Performance.
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-10 max-w-4xl text-lg leading-9 text-gray-400"
        >
          I specialize in mechanical product development, CAD engineering
          and design for manufacturing while completing my final year in
          Production & Automation Engineering at Munich University of
          Applied Sciences.
          <br />
          <br />
          Alongside my studies, I have gained industrial engineering
          experience at{" "}
          <span className="font-semibold text-orange-400">KRONES AG</span>{" "}
          in mechanical product development and at{" "}
          <span className="font-semibold text-orange-400">FlightLab</span>{" "}
          in structural development for unmanned aircraft systems,
          contributing to engineering solutions ready for manufacturing.
          <br />
          <br />
          This website serves as my professional portfolio, documenting my
          engineering journey, entrepreneurial ventures and athletic
          development while sharing practical resources for engineering
          students and aspiring engineers.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-12 flex flex-wrap gap-4">
          <button onClick={() => go("engineering")} className="btn-ember">
            Engineering Portfolio
            <ArrowRight size={18} />
          </button>

          <button onClick={() => go("services")} className="btn-ghost">
            Engineering Services
          </button>

          <button onClick={() => go("contact")} className="btn-ghost">
            Let's Work Together
          </button>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          variants={item}
          className="mt-20 grid gap-6 lg:grid-cols-2 xl:grid-cols-4"
        >
          {EXPERIENCE.map((exp) => {
            const Icon = exp.icon;

            return (
              <motion.div
                key={exp.title}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all hover:border-orange-500/40 hover:bg-white/[0.05]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-orange-500/10 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {exp.title}
                  </h3>

                  <p className="mt-2 text-orange-400 font-medium">
                    {exp.subtitle}
                  </p>

                  <div className="my-6 h-px bg-gradient-to-r from-orange-500/60 to-transparent" />

                  <p className="text-sm leading-7 text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics */}
        <motion.div
          variants={item}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl"
            >
              <h2 className="text-5xl font-black text-orange-500">
                {stat.value}
              </h2>

              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          variants={item}
          className="mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-14"
        >
          <h2 className="text-4xl font-bold text-white">
            Engineering.
            <br />
            Entrepreneurship.
            <br />
            Performance.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-400">
            From industrial machinery at KRONES AG, to unmanned aircraft
            development at FlightLab, to building WolvesMacht, my goal is
            to combine engineering, entrepreneurship and disciplined
            execution into products that create real impact.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <span className="rounded-full bg-orange-500/10 px-5 py-3 text-orange-400">
              Mechanical Product Development
            </span>

            <span className="rounded-full bg-orange-500/10 px-5 py-3 text-orange-400">
              CAD Engineering
            </span>

            <span className="rounded-full bg-orange-500/10 px-5 py-3 text-orange-400">
              Design for Manufacturing
            </span>

            <span className="rounded-full bg-orange-500/10 px-5 py-3 text-orange-400">
              Product Design
            </span>

            <span className="rounded-full bg-orange-500/10 px-5 py-3 text-orange-400">
              Entrepreneurship
            </span>

            <span className="rounded-full bg-orange-500/10 px-5 py-3 text-orange-400">
              Weighted Calisthenics
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


