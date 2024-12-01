import { cn } from "@/lib/utils";
import Image from "next/image";

const ReviewCard = ({ img, name, body }) => {
    return (
        <figure
            className={cn(
                "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-6",
                "border-gray-50/[.1] bg-gradient-to-tl from-[#4f0239]/30 via-[#01506e]/30 to-[#0d0258]/35 hover:bg-gray-50/[.05]"
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
            <blockquote className="mt-4 text-sm font-normal line-clamp-5 leading-relaxed">
                {body}
            </blockquote>
        </figure>
    );
};

export default ReviewCard;
