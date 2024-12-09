import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import ShineBorder from "../ui/shine-border";

const CourseCard = ({ course }) => {
    return (
        <ShineBorder
            className="relative border border-gray-800 rounded-xl backdrop-blur-[25px] bg-body overflow-hidden bg-gradient-to-b from-blueish/40 to-body md:shadow-xl text-white p-0 flex flex-col h-full"
            color={["#01506e", "#d1638ad4", "#0d0258"]}
            style="border-image-source: linear-gradient(to bottom, #030014, #3b81f5); border-image-slice: 1;"
        >
            <div className="h-[220px] w-full overflow-hidden">
                <Image
                    src={course?.thumbnail}
                    alt={course?.title}
                    placeholder="blur"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col flex-grow p-4">
                <h3 className="text-lg font-semibold line-clamp-2">
                    {course.title}
                </h3>
            </div>

            <div className="flex items-center justify-between border-t border-white/20 border-dashed p-4">
                <p className="flex gap-2 items-center line font-bangla">
                    ৳ {course.courseFee}
                </p>
                <button className="font-semibold font-bangla bg-blue-600/20 px-5 py-2 rounded-lg inline-flex gap-2 items-center">
                    বিস্তারিত{" "}
                    <HiCursorClick className="text-xl text-blue-500" />
                </button>
            </div>
        </ShineBorder>
    );
};

export default CourseCard;
