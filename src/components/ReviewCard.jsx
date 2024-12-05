import { cn } from "@/lib/utils";
import Image from "next/image";

const ReviewCard = ({ img, name, body }) => {
    return (
        <figure
            className={cn(
                "relative w-[300px] sm:w-[400px] cursor-pointer overflow-hidden rounded-xl p-4 sm:p-6",
                "bg-linear-fade  hover:bg-gray-50/[.02] font-bangla"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Image
                    className="rounded-full object-cover"
                    width="40"
                    height="40"
                    alt="Review"
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-base font-medium dark:text-white line-clamp-1">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-4 text-base font-normal line-clamp-5 leading-relaxed">
                {body}
            </blockquote>
        </figure>
    );
};

export default ReviewCard;
