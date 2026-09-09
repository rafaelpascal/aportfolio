import { useState, useEffect } from "react";
import {
  node,
  vue,
  nextjs,
  react,
  javascript,
  me,
  typescript,
} from "../../assets";
import { motion, AnimatePresence } from "framer-motion";

const INK = "#202942";
const ACCENT = "#FF014F";
const MUTED = "#666666";

/* ------------------------------- Data ---------------------------------- */

const BIO_FIELDS = [
  { label: "Name", value: "Emehelu Raphael O." },
  { label: "Area of Expertise", value: "Web Development" },
  { label: "Nationality", value: "Nigeria" },
  { label: "Course of Study", value: "Computer Science" },
  { label: "Education", value: "Higher National Diploma" },
  { label: "Address", value: "Prince and Princess Estate, FCT Abuja" },
  { label: "Years of Experience", value: "4+" },
  { label: "Preferred Language", value: "English" },
];

const SKILLS = [
  { key: "javascript", icon: javascript, label: "JavaScript", target: 90 },
  { key: "typescript", icon: typescript, label: "TypeScript", target: 80 },
  { key: "node", icon: node, label: "Node JS", target: 80 },
  { key: "react", icon: react, label: "React JS", target: 95 },
  { key: "nextjs", icon: nextjs, label: "Next JS", target: 85 },
  { key: "vue", icon: vue, label: "Vue JS", target: 70 },
  { key: "reactNative", icon: react, label: "React Native", target: 90 },
];

const DEGREES = [
  {
    title: "Computer Science",
    place: "Convenant Polytechnic",
    period: "2012 – 2014",
  },
  {
    title: "Computer Science",
    place: "Federal Polytechnic Oko",
    period: "2014 – 2016",
  },
  { title: "Web Development", place: "Devamplify", period: "2019 – 2020" },
];

const CERTIFICATIONS = [
  { title: "JavaScript Basics", place: "Codedamn", period: "2022" },
  { title: "JavaScript: ES6", place: "Pirplei", period: "2022" },
  { title: "Node JS", place: "Codedamn", period: "2020" },
];

const TABS = [
  { key: "bio", label: "Biography", index: "01" },
  { key: "skills", label: "Skills", index: "02" },
  { key: "education", label: "Education", index: "03" },
];

/* ------------------------------ Component ------------------------------- */

const About = () => {
  const [activeTab, setActiveTab] = useState("bio");
  const [progress, setProgress] = useState(
    Object.fromEntries(SKILLS.map((s) => [s.key, 0])),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = { ...prev };
        let stillMoving = false;
        SKILLS.forEach(({ key, target }) => {
          if (prev[key] < target) {
            next[key] = Math.min(prev[key] + 5, target);
            stillMoving = true;
          }
        });
        if (!stillMoving) clearInterval(interval);
        return next;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="relative mx-auto mt-16 px-8 py-10 lg:max-w-6xl"
    >
      {/* ------------------------------ Intro ------------------------------ */}
      <div className="z-0 mb-24 flex flex-col items-center justify-between gap-10 sm:flex-row lg:mb-20">
        <div className="h-[440px] w-full rounded-full bg-transparent lg:w-[40%]">
          <motion.img
            src={me}
            alt="Portrait"
            className="w-full"
            whileHover={{ x: 20 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <p className="mb-4 bg-gradient-to-r from-[#419BDA] to-[#FB0452] bg-clip-text font-Manrop text-[20px] font-bold leading-6 text-transparent">
            ABOUT ME
          </p>
          <h2 className="w-full font-Manrop text-[36px] font-extrabold leading-[43.2px] text-[#202942] lg:w-[300px]">
            I Can Develop.
          </h2>
          <p className="mb-4 mt-8 font-Manrop text-[15px] font-normal leading-[25.5px] text-[#666666]">
            A skilled software developer with over 3+ years of experience, I am
            committed to delivering cost-effective and timely results while
            working within project specifications. With a strong passion for
            technology and a keen interest in learning, I am always looking for
            ways to grow and advance my skills. I am excited to be a part of a
            team that is dedicated to creating innovative and impactful
            products, and I am confident in my ability to make a positive
            contribution to any project.
          </p>

          <div className="mt-11 flex items-center gap-4 lg:gap-20">
            <img src={node} alt="" className="w-[70px]" />
            <div>
              <h2 className="font-Manrop text-[20px] font-bold leading-6 text-[#202942]">
                Full Stack Developer
              </h2>
              <p className="font-Manrop text-[15px] font-semibold leading-[25.5px] text-[#666666]">
                Appmart Integrated Limited
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------- Tabbed panel --------------------------- */}
      <div className="relative w-full rounded-3xl bg-gradient-to-r from-[#FCF8E4] to-[#F8FFFF] pt-16 lg:pt-8">
        {/* Tab bar */}
        <div className="absolute left-1/2 top-[-3.5rem] flex w-[92%] -translate-x-1/2 gap-2 rounded-full bg-white p-2 shadow-[0_8px_30px_rgba(32,41,66,0.1)] sm:w-[80%] lg:top-[-2rem]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative flex-1 rounded-full py-[15px] font-Manrop text-[15px] font-bold leading-6 sm:text-[18px]"
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: INK }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{ color: isActive ? "#fff" : INK }}
                >
                  {tab.label} - {tab.index}
                </span>
              </button>
            );
          })}
        </div>

        <div className="px-4 py-8 lg:px-24 lg:py-16">
          <AnimatePresence mode="wait">
            {activeTab === "bio" && (
              <motion.div
                key="bio"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid w-full grid-cols-1 gap-x-20 sm:grid-cols-2"
              >
                {BIO_FIELDS.map((field) => (
                  <div
                    key={field.label}
                    className="flex items-center justify-between border-b-[1.5px] border-[#66666633] py-3"
                  >
                    <h3 className="font-Manrop text-[14px] font-bold leading-6 text-[#202942] lg:text-[18px]">
                      {field.label}
                    </h3>
                    <p className="font-Manrop text-[12px] font-semibold leading-[25.5px] text-[#666666] lg:text-[15px]">
                      {field.value}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex w-full flex-col gap-6"
              >
                {SKILLS.map(({ key, icon, label, target }) => (
                  <div
                    key={key}
                    className="flex flex-col items-center gap-4 sm:flex-row sm:gap-12"
                  >
                    <div className="flex w-full items-center gap-6 sm:w-[45%]">
                      <img src={icon} alt="" className="w-[50px]" />
                      <h3 className="font-Manrop text-[18px] font-bold leading-6 text-[#202942] sm:text-[20px]">
                        {label}
                      </h3>
                    </div>
                    <div className="flex w-full items-center gap-4 sm:w-[55%]">
                      <span className="w-12 shrink-0 font-Manrop text-[16px] font-bold leading-6 text-[#202942] sm:w-16 sm:text-[24px]">
                        {progress[key]}%
                      </span>
                      <div className="h-[10px] w-full overflow-hidden rounded-full bg-[#20294214]">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: ACCENT }}
                          initial={{ width: 0 }}
                          animate={{ width: `${progress[key]}%` }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <span className="hidden text-[13px] text-[#66666699] sm:block">
                      /{target}%
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex w-full flex-col gap-16"
              >
                <TimelineRow items={DEGREES} />
                <TimelineRow items={CERTIFICATIONS} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ items }) => (
  <div className="flex flex-col items-stretch gap-8 sm:flex-row">
    {items.map((item) => (
      <div
        key={item.title + item.period}
        className="relative w-full border-l-2 px-3 lg:px-6"
        style={{ borderColor: ACCENT }}
      >
        <div
          className="absolute left-[-11px] top-[-16px] h-5 w-5 rounded-full border-4 bg-white"
          style={{ borderColor: ACCENT }}
        />
        <h3
          className="font-Manrop text-[20px] font-bold capitalize leading-6"
          style={{ color: INK }}
        >
          {item.title}
        </h3>
        <p
          className="my-3 font-Manrop text-[14px] font-semibold uppercase leading-6"
          style={{ color: INK }}
        >
          {item.place}
        </p>
        <span
          className="inline-block px-3 py-1.5 font-Manrop text-[14px] font-bold text-white"
          style={{ backgroundColor: ACCENT }}
        >
          {item.period}
        </span>
      </div>
    ))}
  </div>
);

export default About;
