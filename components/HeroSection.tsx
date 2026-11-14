"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <div className="flex flex-col items-center space-y-6 ">
          {/* main heading */}
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
            Master the art of music
          </h1>

          {/* description */}
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you&apos;re a beginner or looking to refine
            your skills, join us to unlock your true potential.
          </p>

          {/* Button */}
          <div className="mt-4">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.5rem"
                className="bg-black-200 dark:bg-white text-white dark:text-black border-slate-800 dark:border-neutral-200 cursor-pointer"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
