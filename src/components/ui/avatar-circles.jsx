"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

const AvatarCircles = ({ numPeople, className, avatarUrls }) => {
    return (
        <div
            className={cn(
                "z-10 flex -space-x-4 rtl:space-x-reverse",
                className
            )}
        >
            {avatarUrls.map((url, index) => (
                <Image
                    key={index}
                    className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                    src={url.imageUrl}
                    width={40}
                    height={40}
                    alt={`Avatar ${index + 1}`}
                />
            ))}
            {numPeople && (
                <p className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
                    +{numPeople}
                </p>
            )}
        </div>
    );
};

export default AvatarCircles;
