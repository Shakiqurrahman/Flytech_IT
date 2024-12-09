import thumbnail from "@/assets/images/courses-thumbnail/course1.jpg";
import offerShape from "@/assets/images/shapes/offer-shape.png";
import Image from "next/image";
import { MdOutlineSchedule } from "react-icons/md";
import { TbCalendarMonth, TbCurrencyTaka } from "react-icons/tb";
import CourseFAQ from "./CourseFAQ";
import Instructors from "./Instructors";
import Multitabs from "./Multitabs";

const Courses = () => {
  return (
    <div className="max-width mb-10 mt-5 font-bangla">
      <div className="flex gap-5 items-start relative">
        <div className="w-full md:w-[calc(100%_-_380px)] pt-5">
          <div>
            <Image
              src={thumbnail}
              alt="Course Thumbnail"
              className="w-full rounded-lg"
            />
            <h1 className="text-2xl sm:text-3xl font-semibold mt-5 mb-10">
              Data Science and Machine Learning Career Path
            </h1>
            <div className="flex items-center bg-dark-gradient rounded-lg p-6 justify-around shadow">
              <div className="text-center">
                <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl">
                  161
                </h1>
                <p className="text-sm sm:text-lg">Students</p>
              </div>
              <div className="text-center">
                <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl">
                  150+
                </h1>
                <p className="text-sm sm:text-lg">Hours of Lessons</p>
              </div>
              <div className="text-center">
                <h1 className="text-blue-400 font-medium text-2xl sm:text-3xl">
                  60
                </h1>
                <p className="text-sm sm:text-lg">Total Lessons</p>
              </div>
            </div>
            <div className="border border-blue-400 bg-[#141c2c] rounded-lg p-5 block md:hidden mt-5">
              <h1 className="text-xl mb-5 text-blue-400 font-semibold">
                কী কী থাকছে এই ক্যারিয়ার পাথে
              </h1>
              <ul className="mb-10">
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    1
                  </span>
                  <p className="text-lg">১৫০+ প্রিরেকর্ডেড ভিডিও</p>
                </li>
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    2
                  </span>
                  <p className="text-lg">৬০+ লাইভ ক্লাস</p>
                </li>
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    3
                  </span>
                  <p className="text-lg">২৪+ কনসেপচুয়াল লাইভ ক্লাস</p>
                </li>
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    4
                  </span>
                  <p className="text-lg">ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্টস</p>
                </li>
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    5
                  </span>
                  <p className="text-lg">ডেইলি ২টি সাপোর্ট সেশন</p>
                </li>
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    6
                  </span>
                  <p className="text-lg">মক ইন্টারভিউ</p>
                </li>
                <li className="flex items-center gap-2 my-4">
                  <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                    7
                  </span>
                  <p className="text-lg">লাইফটাইম অ্যাকসেস</p>
                </li>
              </ul>
              <div className="flex items-center gap-3 justify-between">
                <p className="flex items-center text-xl sm:text-3xl text-blue-400 font-semibold">
                  <TbCurrencyTaka className="text-2xl sm:text-4xl" />{" "}
                  <span>6000.00</span>
                </p>
                <p className="flex items-center text-base sm:text-xl font-semibold">
                  <TbCurrencyTaka className="text-lg sm:text-2xl" />{" "}
                  <span className="line-through">6000.00</span>
                </p>
                <div className="relative shrink-0">
                  <Image
                    src={offerShape}
                    alt="Course Offer Price"
                    className="size-[50px] object-contain"
                  />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold">
                    25%
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-blue-400 bg-[#141c2c] rounded-lg p-5 mt-2 block md:hidden">
              <h1 className="text-center font-semibold text-xl mb-3">
                Starting Date and Time
              </h1>
              <div className="flex items-center gap-4 justify-center">
                <p className="flex items-center gap-1 text-base sm:text-lg">
                  <TbCalendarMonth className="text-xl sm:text-2xl text-blue-400" />
                  <span>8 December, 2024</span>
                </p>
                <p className="flex items-center gap-1 text-base sm:text-lg">
                  <MdOutlineSchedule className="text-xl sm:text-2xl text-blue-400" />
                  <span>9:00 p.m.</span>
                </p>
              </div>
            </div>
            <Multitabs />
            <Instructors />
            <CourseFAQ />
          </div>
        </div>
        <div className="w-[380px] hidden md:block shrink-0 sticky top-0 pt-5">
          <div className="border border-blue-400 bg-[#141c2c] rounded-lg p-5">
            <h1 className="text-xl mb-5 text-blue-400 font-semibold">
              কী কী থাকছে এই ক্যারিয়ার পাথে
            </h1>
            <ul className="mb-10">
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  1
                </span>
                <p className="text-lg">১৫০+ প্রিরেকর্ডেড ভিডিও</p>
              </li>
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  2
                </span>
                <p className="text-lg">৬০+ লাইভ ক্লাস</p>
              </li>
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  3
                </span>
                <p className="text-lg">২৪+ কনসেপচুয়াল লাইভ ক্লাস</p>
              </li>
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  4
                </span>
                <p className="text-lg">ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্টস</p>
              </li>
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  5
                </span>
                <p className="text-lg">ডেইলি ২টি সাপোর্ট সেশন</p>
              </li>
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  6
                </span>
                <p className="text-lg">মক ইন্টারভিউ</p>
              </li>
              <li className="flex items-center gap-2 my-4">
                <span className="flex items-center justify-center size-6 rounded-full border-2 border-blue-400">
                  7
                </span>
                <p className="text-lg">লাইফটাইম অ্যাকসেস</p>
              </li>
            </ul>
            <div className="flex items-center gap-3 justify-between">
              <p className="flex items-center text-3xl text-blue-400 font-semibold">
                <TbCurrencyTaka className="text-4xl" /> <span>6000.00</span>
              </p>
              <p className="flex items-center text-xl font-semibold">
                <TbCurrencyTaka className="text-2xl" />{" "}
                <span className="line-through">6000.00</span>
              </p>
              <div className="relative">
                <Image
                  src={offerShape}
                  alt="Course Offer Price"
                  className="size-[50px] object-contain"
                />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold">
                  25%
                </span>
              </div>
            </div>
          </div>
          <div className="border border-blue-400 bg-[#141c2c] rounded-lg p-5 mt-2">
            <h1 className="text-center font-semibold text-xl mb-3">
              Starting Date and Time
            </h1>
            <div className="flex items-center gap-4 justify-center">
              <p className="flex items-center gap-1 text-lg">
                <TbCalendarMonth className="text-2xl text-blue-400" />
                <span>8 December, 2024</span>
              </p>
              <p className="flex items-center gap-1 text-lg">
                <MdOutlineSchedule className="text-2xl text-blue-400" />
                <span>9:00 p.m.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
