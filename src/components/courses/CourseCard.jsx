import offerShape from "@/assets/images/shapes/offer-shape.png";
import Image from "next/image";
import Link from "next/link";
import { AiFillProject } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import ShineBorder from "../ui/shine-border";

const CourseCard = ({ course }) => {
  return (
    <ShineBorder
      className="relative border border-gray-800 rounded-xl backdrop-blur-[25px] bg-body overflow-hidden bg-gradient-to-b from-blueish/40 to-body md:shadow-xl text-white p-0 flex flex-col h-full"
      color={["#01506e", "#d1638ad4", "#0d0258"]}
      style="border-image-source: linear-gradient(to bottom, #030014, #3b81f5); border-image-slice: 1;"
    >
      <div className="w-full overflow-hidden relative">
        <Image
          src={course?.thumbnail}
          alt={course?.title}
          placeholder="blur"
          className="w-full h-full object-cover"
        />
        {course?.isOffer && (
          <div className="absolute top-3 right-3">
            <div className="relative">
              <Image
                src={offerShape}
                alt="Course Offer Price"
                className="size-[45px] object-contain"
              />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black font-semibold text-sm">
                {course?.discount}%
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold line-clamp-2">{course?.title}</h3>
      </div>

      <div className="border-t border-white/20 border-dashed p-4">
        <div className="flex gap-2 items-center text-gray-300 mb-2">
          <p className="text-xs font-semibold flex items-center gap-1">
            <RiBook2Fill className="text-sm" />
            {course?.totalLessons} লেসন্স
          </p>
          <p className="text-xs font-semibold flex items-center gap-1">
            <AiFillProject className="text-sm" />
            {course?.totalProjects}+ প্রজেক্ট
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <p className="flex gap-2 items-center text-[22px] font-semibold tracking-wide font-bangla">
              ৳ {course?.courseFee}
            </p>
            {course?.isOffer && (
              <p className="text-sm line-through text-yellowish">
                {course?.originalFee}
              </p>
            )}
          </div>
          <Link
            href={`/courses/${course?.slug}`}
            className="font-semibold font-bangla bg-yellowish/85 hover:bg-yellowish/75 duration-300 px-5 py-2 rounded-lg inline-flex gap-2 items-center"
          >
            বিস্তারিত <HiCursorClick className="text-xl text-white" />
          </Link>
        </div>
      </div>
    </ShineBorder>
  );
};

export default CourseCard;
