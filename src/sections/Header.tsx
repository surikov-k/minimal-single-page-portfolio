"use client";

import Link from "next/link";
import { FC, MouseEvent, useEffect, useState } from "react";

import { motion, useAnimate } from "motion/react";

import Button from "@/components/Button";

const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [topLineScope.current, { translateY: 4 }],
        [topLineScope.current, { rotate: 45 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { translateY: -4 }],
        [bottomLineScope.current, { rotate: -45 }],
      ]);
      navAnimate(navScope.current, { height: "100%" }, { duration: 0.7 });
    } else {
      topLineAnimate([
        [topLineScope.current, { rotate: 0 }],
        [topLineScope.current, { translateY: 0 }],
      ]);
      bottomLineAnimate([
        [bottomLineScope.current, { rotate: 0 }],
        [bottomLineScope.current, { translateY: 0 }],
      ]);
      navAnimate(navScope.current, { height: 0 }, { duration: 0.2 });
    }
  }, [
    bottomLineAnimate,
    bottomLineScope,
    isOpen,
    navAnimate,
    navScope,
    topLineAnimate,
    topLineScope,
  ]);

  const handleNavItemClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="">
      <div
        className="fixed top-0 left-0 z-10 h-0 w-full overflow-hidden bg-stone-900"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="group/nav-item relative isolate border-t border-stone-800 py-8 text-stone-200 last:border-b"
              onClick={handleNavItemClick}
            >
              <div className="container flex !max-w-full items-center justify-between">
                <span className="text-3xl transition-all duration-500 group-hover/nav-item:pl-4">
                  {label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 -z-10 h-0 w-full bg-stone-800 transition-all duration-500 group-hover/nav-item:h-full"></div>
            </a>
          ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 z-10 w-full mix-blend-exclusion backdrop-blur-md">
        <div className="container !max-w-full">
          <div className="flex h-20 items-center justify-between">
            <div>
              <Link href="/" className="text-xl font-bold text-white uppercase">
                <span>Alex&nbsp; Taylor</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
        <div className="container !max-w-full">
          <div className="flex h-20 items-center justify-end">
            <div className="flex items-center gap-4">
              <div
                className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 bg-stone-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    ref={topLineScope}
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{
                      transformOrigin: "12px 8px",
                    }}
                  />
                  <motion.rect
                    ref={bottomLineScope}
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{
                      transformOrigin: "12px 16px",
                    }}
                  />
                </svg>
              </div>
              <Button variant="primary" className="hidden md:inline-flex">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
