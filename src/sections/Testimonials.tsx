"use client";

import Image from "next/image";
import { FC, useState } from "react";

import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setTestimonialIndex(
      (testimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleRightButtonClick = () => {
    setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
  };

  return (
    <section className="section">
      <h2 className="flex flex-col overflow-x-clip text-4xl tracking-tighter md:text-7xl lg:text-8xl">
        <span className="whitespace-nowrap">
          Some nice words from my past clients{" "}
        </span>
        <span className="text-red-orange-500 self-end whitespace-nowrap">
          Some nice words from my past clients{" "}
        </span>
      </h2>
      <div className="container">
        <div className="mt-20">
          {testimonials.map(
            ({ name, company, role, quote, image, imagePositionY }, index) =>
              testimonialIndex === index && (
                <div
                  key={name}
                  className="grid md:grid-cols-5 md:items-center md:gap-8 lg:gap-16"
                >
                  <div className="aspect-square md:col-span-2 md:aspect-[9/16]">
                    <Image
                      className="size-full object-cover"
                      style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
                      src={image}
                      alt={`${name} image`}
                    />
                  </div>
                  <blockquote className="md:col-span-3">
                    <div className="mt-8 text-3xl md:mt-0 md:text-5xl lg:text-6xl">
                      <span>&ldquo;</span>
                      <span className="">{quote}</span>
                      <span>&rdquo;</span>
                    </div>
                    <cite className="mt-4 block not-italic md:mt-8 md:text-lg lg:text-xl">
                      {name}, {role} @ {company}
                    </cite>
                  </blockquote>
                </div>
              )
          )}
        </div>
        <div className="mt-6 flex gap-4 lg:mt-10">
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400"
            onClick={handleLeftButtonClick}
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex size-11 items-center justify-center rounded-full border border-stone-400"
            onClick={handleRightButtonClick}
          >
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
