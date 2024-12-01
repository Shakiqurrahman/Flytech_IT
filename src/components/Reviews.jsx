import { reviewsData } from "@/constants/reviewData";
import ReviewCard from "./ReviewCard";
import Marquee from "./ui/marquee";

const Reviews = () => {
    const firstRow = reviewsData.slice(0, reviewsData.length / 2);
    const secondRow = reviewsData.slice(reviewsData.length / 2);
    return (
        <>
            <h1 className="text-center font-semibold text-5xl mb-1">
                Student <span className="text-blue-500">Reviews</span>
            </h1>
            <p className="text-center text-gray-300">
                Celebrating Student Success Through Their Reviews.
            </p>
            <div className="mt-16 relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl gap-y-10">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review, index) => (
                        <ReviewCard key={index} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-body "></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-body "></div>
            </div>
        </>
    );
};

export default Reviews;
