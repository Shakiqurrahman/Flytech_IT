import { avatars } from "@/constants/avatarsData";
import AvatarCircles from "./ui/avatar-circles";
import NumberTicker from "./ui/number-ticker";

const Hero = () => {
  return (
    <section>
      <div className="relative w-full">
        <div className="max-w-[1600px] w-full rounded-full h-[400px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-blue-900 to-transparent absolute left-1/2 -translate-x-1/2 blur-[200px] animate-gradient"></div>
        <div className="max-width min-h-[calc(100vh_-_90px)]">
          <div className="relative  flex justify-center items-center min-h-[70vh]">
            <div className=" mb-10 w-full">
              <h1 className="text-7xl w-[500px] font-bold">
                Elevate Your Career!
              </h1>
              <p className="bg-blue-500 py-2 px-5 rounded-md mt-4 inline-block">
                Learn Skills. Achieve Success.
              </p>
              <div className="space-y-2 mt-10 mb-4">
                <AvatarCircles numPeople={1000} avatarUrls={avatars} />
                <p>
                  <span className="text-xl font-bold">
                    <NumberTicker value={1000} className="text-white" />+
                  </span>
                  Satisfied Students
                </p>
              </div>
            </div>
            <div className="w-full"></div>
          </div>
          <div className="text-center max-w-[1000px] mx-auto">
            <p className=" mb-2">
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
