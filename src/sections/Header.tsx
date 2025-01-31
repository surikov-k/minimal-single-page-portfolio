import Link from "next/link";
import { FC } from "react";

import Button from "@/components/Button";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
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
  return (
    <header className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex h-20 items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold uppercase">
              <span>Alex&nbsp; Taylor</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400 bg-stone-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <Button variant="primary" className="hidden md:inline-flex">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
