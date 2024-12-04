import Image from "next/image";
import { HiCursorClick } from "react-icons/hi";

const CourseCard = ({ course }) => {
    return (
        <div className="border border-white/15 rounded-xl backdrop-blur-[25px] overflow-hidden">
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
                    <p className="flex gap-2 items-center line">
                        ৳ {course.courseFee}
                    </p>
                    <button className="font-bold bg-blue-600/20 px-5 py-2 rounded-lg inline-flex gap-2 items-center">
                        বিস্তারিত{" "}
                        <HiCursorClick className="text-xl text-blue-500" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
