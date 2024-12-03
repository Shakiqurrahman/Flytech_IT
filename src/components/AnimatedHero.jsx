"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import animationData from "/Animation.lottie";

const AnimatedHero = () => {
    return (
        <>
            {/* <Lottie animationData={animationData} /> */}
            <DotLottieReact
                src="/Animation.lottie"
                loop
                autoplay
                className="size-full select-none pointer-events-none"
            />
        </>
    );
};

export default AnimatedHero;
