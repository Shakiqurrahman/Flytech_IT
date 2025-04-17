import { AllCoursesData } from "@/constants/coursesData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MdOutlineSchedule } from "react-icons/md";
import { TbCalendarMonth, TbCurrencyTaka } from "react-icons/tb";
import CourseFAQ from "../../../components/courses/CourseFAQ";
import Instructors from "../../../components/courses/Instructors";
import Multitabs from "../../../components/courses/Multitabs";
import offerShape from "/public/images/shapes/offer-shape.png";

const Courses = async ({ params }) => {
  const slug = (await params).slug;
  const courseData = AllCoursesData?.find((course) => course?.slug === slug);

  if (!courseData) notFound();

  return (
    <div className="max-width mb-10 mt-5 font-bangla">
      {courseData && (
        <div className="flex gap-6 items-start relative">
          <div className="w-full md:w-[calc(100%_-_380px)] pt-5">
            <div>
              <Image
                src={courseData?.thumbnail}
                alt="Course Thumbnail"
                className="w-full rounded-lg"
              />
              <h1 className="text-2xl sm:text-3xl font-semibold mt-5 mb-10">
                {courseData?.title}
              </h1>
              <div className="flex items-center bg-dark-gradient rounded-lg p-6 justify-around shadow">
                <div className="text-center">
                  <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl">
                    {courseData?.duration}
                  </h1>
                  <p className="text-sm sm:text-lg">
                    Month{courseData?.duration > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="text-center">
                  <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl">
                    {courseData?.hoursOfLessons}
                  </h1>
                  <p className="text-sm sm:text-lg">Hours of Lessons</p>
                </div>
                <div className="text-center">
                  <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl">
                    {courseData?.totalLessons}
                  </h1>
                  <p className="text-sm sm:text-lg">Total Lessons</p>
                </div>
              </div>
              <div className="border border-blue-400 bg-[#141c2c] rounded-lg p-5 block md:hidden mt-5">
                <h1 className="text-xl mb-5 text-blue-400 font-semibold">
                  কী কী থাকছে এই ক্যারিয়ার পাথে
                </h1>
                <ul className="mb-10">
                  {courseData?.youWillGet?.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 my-4">
                      <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                        {i + 1}
                      </span>
                      <p className="text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 justify-between">
                  <p className="flex items-center text-xl sm:text-3xl text-blue-400 font-semibold">
                    <TbCurrencyTaka className="text-2xl sm:text-4xl" />{" "}
                    <span>{courseData?.courseFee?.toFixed(2)}</span>
                  </p>
                  {courseData?.isOffer && (
                    <>
                      <p className="flex items-center text-base sm:text-xl font-semibold">
                        <TbCurrencyTaka className="text-lg sm:text-2xl" />{" "}
                        <span className="line-through">
                          {courseData?.originalFee?.toFixed(2)}
                        </span>
                      </p>
                      <div className="relative shrink-0">
                        <Image
                          src={offerShape}
                          alt="Course Offer Price"
                          className="size-[50px] object-contain"
                          placeholder="blur"
                        />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold">
                          {courseData?.discount}%
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="border border-blue-400 bg-[#141c2c] rounded-lg p-5 mt-2 block md:hidden">
                <h1 className="text-center font-semibold text-xl mb-3">
                  Starting Date {courseData?.startTime && "and Time"}
                </h1>
                <div className="flex items-center gap-4 justify-center">
                  <p className="flex items-center gap-1 text-base sm:text-lg">
                    <TbCalendarMonth className="text-xl sm:text-2xl text-blue-400" />
                    <span>{courseData?.startDate}</span>
                  </p>
                  {courseData?.startTime && (
                    <p className="flex items-center gap-1 text-base sm:text-lg">
                      <MdOutlineSchedule className="text-xl sm:text-2xl text-blue-400" />
                      <span>{courseData?.startTime}</span>
                    </p>
                  )}
                </div>
              </div>
              <Multitabs
                desc={courseData?.description}
                willLearn={courseData?.youWillLearn}
                community={courseData?.community}
                forWhom={courseData?.forWhom}
              />
              <Instructors items={courseData?.instructors} />
              <CourseFAQ faqs={courseData?.courseFAQ} />
            </div>
          </div>
          <div className="w-[380px] hidden md:block shrink-0 sticky top-0 pt-5">
            <div className="border border-blue-400 bg-linear-fade2 rounded-lg p-5">
              <h1 className="text-xl mb-5 text-blue-400 font-semibold">
                কী কী থাকছে এই ক্যারিয়ার পাথে
              </h1>
              <ul className="mb-10">
                {courseData?.youWillGet?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 my-4">
                    <span className="flex items-center justify-center size-7 rounded-full border border-white/20 bg-linear-fade">
                      {i + 1}
                    </span>
                    <p className="text-lg">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 justify-between">
                <p className="flex items-center text-3xl text-blue-400 font-semibold">
                  <TbCurrencyTaka className="text-4xl" />{" "}
                  <span>{courseData?.courseFee?.toFixed(2)}</span>
                </p>
                {courseData?.isOffer && (
                  <>
                    <p className="flex items-center text-xl font-semibold">
                      <TbCurrencyTaka className="text-2xl" />{" "}
                      <span className="line-through">
                        {courseData?.originalFee?.toFixed()}
                      </span>
                    </p>
                    <div className="relative">
                      <Image
                        src={offerShape}
                        alt="Course Offer Price"
                        className="size-[50px] object-contain"
                      />
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold">
                        {courseData?.discount}%
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="border border-blue-400 bg-linear-fade rounded-lg p-5 mt-3">
              <h1 className="text-center font-semibold text-xl mb-3">
                Starting Date {courseData?.startTime && "and Time"}
              </h1>
              <div className="flex items-center gap-4 justify-center">
                <p className="flex items-center gap-1 text-base sm:text-lg">
                  <TbCalendarMonth className="text-xl sm:text-2xl text-blue-400" />
                  <span>{courseData?.startDate}</span>
                </p>
                {courseData?.startTime && (
                  <p className="flex items-center gap-1 text-base sm:text-lg">
                    <MdOutlineSchedule className="text-xl sm:text-2xl text-blue-400" />
                    <span>{courseData?.startTime}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
