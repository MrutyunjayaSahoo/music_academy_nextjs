"use client";

import { cn } from "@/utils/cn";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { GridBackgroundDemo } from "./ui/GridBackgroundDemo";

//read the doc from aceternity there only mentioned about how to use the components and that is why quote, name, title defined inside array of object
const musicSchoolTestimonials = [
  {
    quote:
      "Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: "Samantha Lee",
    title: "Piano Student",
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: "Michael Chen",
    title: "Vocal Student",
  },
  {
    quote:
      "As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.",
    name: "Emily Taylor",
    title: "Violin Student",
  },
  {
    quote:
      "The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!",
    name: "Chris Morales",
    title: "Music Production Student",
  },
];

function MusicTestimonialCards() {
  return (
    // to activate the grid (dark:bg-grid-white/[0.2]) then

    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden bg-black dark:bg-white">
      
      <GridBackgroundDemo />
      
      {/* Testimonial content */}
      <div className="relative z-10 w-full">
        <h2 className="mb-8 px-4 text-center text-5xl font-bold text-white dark:text-neutral-800">
          Hear our Harmony: Voices of success
        </h2>

        <div className="flex w-full justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={musicSchoolTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicTestimonialCards;
