import { useState } from "react";
import { recent } from "../../assets";
import { motion, AnimatePresence } from "framer-motion";
import {
  project1,
  faisurepay,
  Maihelt,
  project8,
  tvacs,
  biopay,
  revops,
  Mercies,
  faisure,
} from "../../assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const INK = "#202942";
const ACCENT = "#FB0452";

/* ------------------------------- Data ----------------------------------- */
/* One entry per project — add/remove/reorder here, the grid updates itself. */

const PROJECTS = [
  {
    img: Mercies,
    stack:
      "React JS, Node js, prisma, Postgres, Tanstack query, Typescript, Tailwind, Framer Motion",
    title: "Mercies international Academy",
    href: "https://merciesinternationalacademy.com.ng/",
    status: "live",
  },
  {
    img: faisure,
    stack: "React JS, Tailwind CSS, TypeScript",
    title: "Fairsure Landing Page",
    href: "https://fairsurepayment.com.ng/",
    status: "live",
  },
  {
    img: biopay,
    stack: "React JS, Typescript, Tailwind, Framer Motion",
    title: "Biopay",
    href: "https://biopay.appmart.services/",
    status: "live",
  },
  {
    img: tvacs,
    stack: "React JS, Typescript, Tailwind, Framer Motion",
    title: "TVACS",
    href: "https://tvacs.appmart.services/",
    status: "live",
  },
  {
    img: revops,
    stack: "React JS, Tailwind, TypeScript, React Query",
    title: "Revops (Fairsure) Bill Payment",
    href: "https://pheonix.fairsurepay.com/",
    status: "live",
  },
  {
    img: project8,
    stack: "Vue JS, Node JS",
    title: "Get Tax Clearance Certificate",
    href: "https://gettcc.online",
    status: "live",
  },
];

// Dummy placeholders — swap `accent`/`icon` initials for real screenshots
// (e.g. replace the gradient div in <PhoneMockup> with <img src={yourAsset} />)
// and fill in real name/stack/store links.
const MOBILE_APPS = [
  {
    name: "Fairsurepay",
    stack: "React Native, Tanstack Query",
    platform: "both",
    href: "https://play.google.com/store/apps/details?id=com.fairsure.payment",
    accent: "from-[#FB0452] to-[#202942]",
    initials: "FM",
    image: faisurepay,
  },
  {
    name: "Maihelt",
    stack: "React Native, Tanstack Query",
    platform: "both",
    href: "https://apps.apple.com/us/app/maihelt/id6801749725",
    accent: "from-[#FCB045] to-[#FB0452]",
    initials: "MH",
    image: Maihelt,
  },
];

/* ------------------------------ Components -------------------------------- */

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const { img, stack, title, href, status } = project;
  const isLive = status === "live";

  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl bg-[#20294208] shadow-[0_4px_24px_rgba(32,41,66,0.06)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="w-full"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Info bar — always visible so mobile visitors can see it too */}
      <div className="flex w-full items-center justify-between gap-3 bg-white px-5 py-3">
        <div className="min-w-0">
          <p className="truncate font-Manrop text-[11px] font-semibold leading-[16px] text-[#666666]">
            {stack}
          </p>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="block truncate font-Manrop text-[14px] font-semibold leading-[18px]"
              style={{ color: ACCENT }}
            >
              {title} <span className="text-[#666666]">(Live)</span>
            </a>
          ) : (
            <p
              className="truncate font-Manrop text-[14px] font-semibold leading-[18px]"
              style={{ color: ACCENT }}
            >
              {title} <span className="text-[#666666]">(Dev stage)</span>
            </p>
          )}
        </div>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full border-2 p-2 transition-colors duration-200"
            style={{ borderColor: INK }}
          >
            <FaArrowRightLong style={{ color: INK }} />
          </a>
        ) : (
          <span
            className="shrink-0 rounded-full border-2 p-2 opacity-40"
            style={{ borderColor: INK }}
            aria-hidden
          >
            <FaArrowRightLong style={{ color: INK }} />
          </span>
        )}
      </div>

      {!isLive && (
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 font-Manrop text-[10px] font-bold uppercase tracking-wide text-[#666666] shadow">
          In progress
        </span>
      )}
    </div>
  );
};

const PhoneMockup = ({ app }) => {
  const { name, image, stack, platform, href, accent, initials } = app;

  const PlatformBadge = () => {
    if (platform === "ios") return <FaApple className="text-[14px]" />;
    if (platform === "android") return <FaGooglePlay className="text-[12px]" />;
    return (
      <span className="flex items-center gap-1 text-[11px]">
        <FaApple className="text-[13px]" />{" "}
        <FaGooglePlay className="text-[11px]" />
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phone bezel */}
      <div className="relative h-[380px] w-[190px] rounded-[2.2rem] border-[6px] border-[#202942] bg-[#202942] shadow-[0_12px_40px_rgba(32,41,66,0.18)]">
        <div className="absolute left-1/2 top-0 h-[22px] w-[90px] -translate-x-1/2 rounded-b-2xl bg-[#202942]" />
        <div
          className={`h-full w-full overflow-hidden rounded-[1.7rem] bg-gradient-to-br ${accent} flex items-center justify-center`}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-Manrop text-[42px] font-extrabold text-white/90">
              {initials}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-center">
        <div className="flex items-center gap-2 text-[#666666]">
          <PlatformBadge />
          <h3 className="font-Manrop text-[16px] font-bold leading-6 text-[#202942]">
            {name}
          </h3>
        </div>
        <p className="font-Manrop text-[12px] font-semibold leading-[18px] text-[#666666]">
          {stack}
        </p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-1 font-Manrop text-[13px] font-semibold"
            style={{ color: ACCENT }}
          >
            View App →
          </a>
        ) : (
          <span className="mt-1 font-Manrop text-[13px] font-semibold text-[#66666699]">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
};

/* -------------------------------- Section --------------------------------- */

const Work = () => {
  return (
    <section
      id="work"
      className="relative mx-auto mt-20 px-8 py-10 lg:max-w-6xl"
    >
      <img
        src={recent}
        alt=""
        className="absolute left-0 top-4 w-[50px] lg:left-[-2rem]"
      />

      <div className="mb-20">
        <p className="mb-4 bg-gradient-to-r from-[#419BDA] to-[#FB0452] bg-clip-text font-Manrop text-[20px] font-bold leading-6 text-transparent">
          MY WORK
        </p>
        <div className="flex flex-col items-start justify-center sm:flex-row lg:items-start lg:justify-between">
          <h2 className="w-full font-Manrop text-[26px] font-extrabold leading-[43.2px] text-[#202942] lg:w-[450px] lg:text-[36px]">
            Some of my Recent Work
          </h2>
          <div className="mt-8 flex w-full items-center justify-between lg:w-[400px]">
            <div>
              <h2 className="w-full font-Manrop text-[45px] font-extrabold leading-[45px] text-[#202942] lg:w-[250px]">
                15+
              </h2>
              <p className="w-full font-Manrop text-[15px] font-semibold leading-[28px] text-[#202942] lg:w-[250px]">
                Completed Project
              </p>
            </div>
            <div>
              <h2 className="w-full font-Manrop text-[45px] font-extrabold leading-[45px] text-[#202942] lg:w-[250px]">
                85%
              </h2>
              <p className="w-full font-Manrop text-[15px] font-semibold leading-[28px] text-[#202942] lg:w-[250px]">
                Positive Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Web projects grid — was 9 hand-copied blocks, now one map over PROJECTS */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* Mobile apps showcase */}
      <div className="mt-10">
        <p className="mb-4 bg-gradient-to-r from-[#419BDA] to-[#FB0452] bg-clip-text font-Manrop text-[20px] font-bold leading-6 text-transparent">
          MOBILE WORK
        </p>
        <h2 className="mb-10 font-Manrop text-[26px] font-extrabold leading-[36px] text-[#202942] lg:text-[32px]">
          Apps I've Built
        </h2>

        <div className="grid grid-cols-1 mx-auto w-full gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {MOBILE_APPS.map((app) => (
            <PhoneMockup key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
