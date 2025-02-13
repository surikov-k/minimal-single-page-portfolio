"use client";

import Image from "next/image";
import { FC, useEffect, useRef } from "react";

import {
  motion,
  stagger,
  useAnimate,
  useScroll,
  useTransform,
} from "motion/react";
import SplitType from "split-type";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Button from "@/components/Button";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraintWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "240%"]
  );

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });
    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        translate: "0",
      },
      { duration: 0.5, delay: stagger(0.2) }
    );
  }, [titleAnimate, titleScope]);

  return (
    <section>
      <div className="sticky top-0 grid items-stretch md:h-screen md:grid-cols-12">
        <div className="flex flex-col justify-center md:col-span-7">
          <div className="container !max-w-full">
            <motion.h1
              ref={titleScope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-40 text-5xl md:mt-0 md:text-6xl lg:text-7xl"
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button
                  variant="secondary"
                  iconAfter={
                    <div className="size-5 overflow-hidden">
                      <div className="flex h-5 w-10 transition-transform duration-500 group-hover/button:-translate-x-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>View my work</span>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                <Button variant="text">Let&apos;s talk</Button>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="relative md:col-span-5">
          <motion.div
            className="mt-20 max-md:!w-full md:absolute md:right-0 md:mt-0 md:size-full"
            style={{ width: portraintWidth }}
          >
            <Image
              src={heroImage}
              alt="My portait"
              className="size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollingDiv} className="h-[200vh]"></div>
    </section>
  );
};

export default Hero;
