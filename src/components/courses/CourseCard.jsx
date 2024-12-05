import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";
import { MagicCard } from "../ui/magic-card";
import ShineBorder from "../ui/shine-border";

const CourseCard = ({ course }) => {
    return (
        <ShineBorder
            className="relative border border-gray-800 rounded-xl backdrop-blur-[25px] bg-body overflow-hidden bg-gradient-to-b from-blueish/40 to-body md:shadow-xl text-white p-0"
            color={["#01506e", "#d1638ad4", "#0d0258"]}
            style="border-image-source: linear-gradient(to bottom, #030014, #3b81f5; border-image-slice: 1;"
        >
            
                <Image
                    src={course?.thumbnail}
                    alt={course?.title}
                    placeholder="blur"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-2 border-b pb-3 mb-3 border-white/20 border-dashed">
                        {course.title}
                    </h3>
                    <div className="flex items-center justify-between">
                        <p className="flex gap-2 items-center line font-bangla">
                            ৳ {course.courseFee}
                        </p>
                        <button className="font-semibold font-bangla bg-blue-600/20 px-5 py-2 rounded-lg inline-flex gap-2 items-center">
                            বিস্তারিত{" "}
                            <HiCursorClick className="text-xl text-blue-500" />
                        </button>
                    </div>
                </div>
        </ShineBorder>
    );
};

export default CourseCard;
