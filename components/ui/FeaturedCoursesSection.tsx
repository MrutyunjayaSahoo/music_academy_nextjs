"use client";
import Link from "next/link";
import courseData from "../../data/music_courses.json";
import Button1 from "./Buttons";
import { BackgroundGradient } from "./background-gradient";

// create your own datatype
// advantage of defining datatypes in ts that suppose you made an API call and in that API call you did not get the the price data or let say you have written description is must so you did not get from that API. So you will immediately get that error here that from the API which datatype is missing or data not coming. So either we have to modify the datatype or  check the API
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCoursesSection({ btnText }: { btnText: string }) {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            // put key necessary
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow gap-2">

                  <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>

                  <p className="text-sm text-neutral-700 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="bg-white text-black p-2 rounded-lg mt-2 "
                    
                  >
                    {btnText}
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link href={"/courses"} className="">
          <Button1 btnText="View All Courses" />
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCoursesSection;
