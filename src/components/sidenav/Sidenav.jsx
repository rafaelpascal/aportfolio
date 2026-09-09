import { useState, useEffect } from "react";
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoBriefcaseOutline,
  IoChatbubblesOutline,
} from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { menu, close } from "../../assets";

// Single source of truth for nav content — edit here, both layouts update.
const NAV_ITEMS = [
  { key: "home", href: "#", label: "Home", Icon: IoHomeOutline },
  {
    key: "service",
    href: "#service",
    label: "Services",
    Icon: IoSettingsOutline,
  },
  { key: "work", href: "#work", label: "Portfolio", Icon: IoBriefcaseOutline },
  { key: "about", href: "#about", label: "About", Icon: FaRegUser },
  // {
  //   key: "testimonies",
  //   href: "#testimonies",
  //   label: "Comments",
  //   Icon: AiOutlineComment,
  // },
  {
    key: "contact",
    href: "#contact",
    label: "Contact",
    Icon: IoChatbubblesOutline,
  },
];

const ACCENT = "#FF014F";
const INK = "#202942";

const Sidenav = () => {
  const [toggle, setToggle] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth < 840 : false,
  );
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 840);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (key) => {
    setActive(key);
    if (isSmallScreen) setToggle(false);
  };

  return (
    <>
      {isSmallScreen ? (
        <MobileNav
          toggle={toggle}
          setToggle={setToggle}
          active={active}
          onSelect={handleSelect}
        />
      ) : (
        <DesktopNav active={active} onSelect={handleSelect} />
      )}
    </>
  );
};

/* ---------------------------- Desktop rail ---------------------------- */

const DesktopNav = ({ active, onSelect }) => (
  <nav
    aria-label="Primary"
    className="fixed left-0 top-0 z-20 flex h-screen w-[92px] flex-col items-center bg-white shadow-[4px_0_24px_rgba(32,41,66,0.06)]"
  >
    <div
      className="flex h-[88px] w-full items-center justify-center"
      style={{ backgroundColor: ACCENT }}
    >
      <span className="font-Lobster text-4xl text-white">R</span>
    </div>

    <ul className="mt-6 flex w-full flex-1 flex-col items-center gap-1">
      {NAV_ITEMS.map((item) => (
        <NavRailItem
          key={item.key}
          item={item}
          isActive={active === item.key}
          onSelect={onSelect}
        />
      ))}
    </ul>
  </nav>
);

const NavRailItem = ({ item, isActive, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const { Icon, label, href, key } = item;

  return (
    <li className="group relative w-full px-3">
      <a
        href={href}
        onClick={() => onSelect(key)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-14 w-full items-center justify-center rounded-2xl transition-colors duration-200"
        style={{
          backgroundColor: isActive ? "rgba(255,1,79,0.08)" : "transparent",
        }}
      >
        {/* active indicator */}
        {isActive && (
          <motion.span
            layoutId="active-pill"
            className="absolute left-0 h-6 w-[3px] rounded-full"
            style={{ backgroundColor: ACCENT }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}

        <Icon
          size={22}
          style={{ color: isActive ? ACCENT : INK }}
          className="transition-transform duration-200 group-hover:scale-110"
        />

        {/* label flyout, doesn't reflow the rail */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.15 }}
              className="pointer-events-none absolute left-[calc(100%+12px)] whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-lg"
              style={{ backgroundColor: INK }}
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </a>
    </li>
  );
};

/* ----------------------------- Mobile nav ------------------------------ */

const MobileNav = ({ toggle, setToggle, active, onSelect }) => (
  <div className="fixed left-0 top-0 z-20 w-full p-4">
    <div className="flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 shadow-[0_4px_24px_rgba(32,41,66,0.08)] backdrop-blur-xl">
      <span className="font-Lobster text-2xl" style={{ color: ACCENT }}>
        R
      </span>
      <button
        aria-label={toggle ? "Close menu" : "Open menu"}
        aria-expanded={toggle}
        onClick={() => setToggle((t) => !t)}
        className="rounded-full p-1"
      >
        <img src={toggle ? close : menu} alt="" className="w-6" />
      </button>
    </div>

    <AnimatePresence>
      {toggle && (
        <motion.ul
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-3 overflow-hidden rounded-2xl bg-white/95 p-2 shadow-[0_8px_32px_rgba(32,41,66,0.12)] backdrop-blur-xl"
        >
          {NAV_ITEMS.map(({ key, href, label, Icon }) => {
            const isActive = active === key;
            return (
              <li key={key}>
                <a
                  href={href}
                  onClick={() => onSelect(key)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-150"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255,1,79,0.08)"
                      : "transparent",
                    color: isActive ? ACCENT : INK,
                  }}
                >
                  <Icon size={20} />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  </div>
);

export default Sidenav;
