import lifeAtFlytechit from "@/assets/images/about-us/lifeatflytechit.webp";
import ourMissionImage from "@/assets/images/about-us/ourmission.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="w-full py-[100px] bg-gradient-to-br from-transparent from-0% via-100% to-100% via-blue-800 to-transparent">
        <div className="max-width text-center">
          <h1 className="text-[30px]">Welcome to</h1>
          <h1 className="text-[60px] font-bold leading-[60px]">Flytech IT</h1>
          <p className="w-full max-w-[700px] text-lg mx-auto mt-5">
            We are Country&apos;s one of the most prominent virtual platforms
            for providing academic, career & skill development and cultural
            flourishment through events, campaigns, courses, master classes, and
            real-time communication.
          </p>
        </div>
      </div>
      <div className="max-width">
        <div className="flex gap-10 items-center mt-10">
          <div className="w-[60%]">
            <h1 className="text-[30px] font-semibold mb-5">Our Mission</h1>
            <p className="text-lg">
              Our mission is to help 1 million people secure jobs by 2030. We
              are dedicated to empowering individuals with the knowledge and
              expertise needed to thrive in the dynamic job market. Through our
              Career Path programs, Courses for skill development and Master
              classes, we aim to not only enhance technical skills but also
              foster critical thinking, creativity, and adaptability. By doing
              so, we are committed to creating a pool of highly skilled and
              employable individuals who can confidently contribute to the
              ever-evolving demands of the professional landscape.
            </p>
          </div>
          <div className="w-[40%]">
            <Image
              src={ourMissionImage}
              alt="Our Mission"
              className="w-full object-cover object-top rounded-lg"
            />
          </div>
        </div>
        <div className="flex gap-10 items-center my-20">
          <div className="w-[40%]">
            <Image
              src={lifeAtFlytechit}
              alt="Our Mission"
              className="w-full object-cover object-top rounded-lg"
            />
          </div>
          <div className="w-[60%]">
            <h1 className="text-[30px] font-semibold mb-5">
              Life at Flytech IT
            </h1>
            <p className="text-lg">
              At Interactive Cares, life revolves around team collaboration, a
              friendly work culture, and a balanced work-and-chill environment.
              We&apos;re committed to creating a space where innovation thrives,
              ideas are welcomed, and well-being is paramount, ensuring every
              team member feels valued and inspired.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
