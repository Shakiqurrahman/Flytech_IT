import { avatars } from "@/constants/avatarsData";
import Image from "next/image";
import AnimatedHero from "./AnimatedHero";
import AvatarCircles from "./ui/avatar-circles";
import NumberTicker from "./ui/number-ticker";
import Particles from "./ui/particles";
import triangleShape from "/public/images/shapes/hero-triangle.png";
import triangleShape2 from "/public/images/shapes/triangle-shape.png";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full">
        <Image
          src={triangleShape}
          alt="hero shape"
          className="absolute left-4 sm:left-20 top-5 animate-moveLeftRight"
        />
        <Particles
          className="absolute inset-0"
          quantity={150}
          ease={50}
          refresh
        />
        <div className="max-w-[1600px] w-full rounded-full h-[400px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-blue-900 to-transparent absolute left-1/2 -translate-x-1/2 blur-[200px] animate-gradient"></div>
        <div className="max-width min-h-[calc(100vh_-_90px)]">
          <Image
            src={triangleShape2}
            alt="hero shape"
            className="absolute left-1/2 -bottom-10 md:bottom-10 animate-spin-slow"
          />
          <div className="relative  flex flex-col md:flex-row justify-center items-center mt-32 mb-16">
            <div className=" mb-10 w-full md:w-2/5">
              <div className="flex items-center gap-2">
                <div className="bg-greenish w-5 h-2 rounded-full"></div>
                <p className="uppercase tracking-[4px] text-xs text-gray-300">
                  Education Solution
                </p>
              </div>
              <h1 className="text-5xl sm:text-7xl w-full sm:w-[500px] font-bold">
                Elevate Your Career!
              </h1>
              <p className="bg-blueish py-2 px-5 rounded-md mt-4 inline-block">
                Learn Skills. Achieve Success.
              </p>
              {/* <p className="bg-greenish py-2 px-5 rounded-md mt-4 inline-block">
                                Learn Skills. Achieve Success.
                            </p> */}
              <div className="space-y-2 mt-10 mb-4">
                <AvatarCircles numPeople={1000} avatarUrls={avatars} />
                <p>
                  <span className="text-xl font-bold">
                    <NumberTicker value={1000} className="text-white" />+{" "}
                  </span>
                  Satisfied Students
                </p>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <AnimatedHero />
            </div>
          </div>
          <div className="text-center max-w-[1000px] mx-auto">
            <p className="text-sm sm:text-base mb-2">
              Transform your passion into a profession with comprehensive
              training programs tailored to your goals. Whether you&apos;re
              learning to code, mastering the art of design, or diving into
              digital marketing strategies, we guide you every step of the way.
            </p>
            {/* <p>
                            Our expert-led courses are designed to empower you
                            with the skills and confidence needed to excel in
                            today’s competitive digital landscape. With hands-on
                            projects, personalized mentorship, and real-world
                            applications, you'll gain practical knowledge that
                            sets you apart from the crowd.
                        </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
