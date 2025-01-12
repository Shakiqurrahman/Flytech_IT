import AchivementImage from "@/assets/images/about-us/achivements/achievementsimagetwo.webp";
import lifeAtFlytechit from "@/assets/images/about-us/lifeatflytechit.webp";
import ourMissionImage from "@/assets/images/about-us/ourmission.webp";
import CEO from "@/assets/images/about-us/team-member/CEO.webp";
import COO from "@/assets/images/about-us/team-member/COO.webp";
import CTO from "@/assets/images/about-us/team-member/CTO.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="w-full py-[100px] bg-gradient-to-br from-transparent from-0% via-100% to-100% via-blue-800 to-transparent">
        <div className="max-width text-center">
          <h1 className="text-xl sm:text-[30px]">Welcome to</h1>
          <h1 className="text-[40px] sm:text-[60px] font-bold leading-[40px] sm:leading-[60px]">
            Flytech IT
          </h1>
          <p className="w-full max-w-[700px] sm:text-lg mx-auto mt-3 sm:mt-5">
            We are Country&apos;s one of the most prominent virtual platforms
            for providing academic, career & skill development and cultural
            flourishment through events, campaigns, courses, master classes, and
            real-time communication.
          </p>
        </div>
      </div>
      <div className="max-width">
        {/* Our Mission section */}
        <div className="flex flex-wrap-reverse sm:flex-nowrap gap-5 sm:gap-10 items-center mt-10">
          <div className="w-full text-center sm:text-left sm:w-[60%]">
            <h1 className="text-2xl sm:text-[30px] font-semibold mb-2 sm:mb-5">
              Our Mission
            </h1>
            <p className="sm:text-lg">
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
          <div className="w-full sm:w-[40%]">
            <Image
              src={ourMissionImage}
              alt="Our Mission"
              className="w-full object-cover object-top rounded-lg"
            />
          </div>
        </div>
        {/* Life at Flytech IT section */}
        <div className="flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10 items-center my-20">
          <div className="w-full sm:w-[40%]">
            <Image
              src={lifeAtFlytechit}
              alt="Our Mission"
              className="w-full object-cover object-top rounded-lg"
            />
          </div>
          <div className="text-center sm:text-left w-full sm:w-[60%]">
            <h1 className="text-2xl sm:text-[30px] font-semibold mb-2 sm:mb-5">
              Life at Flytech IT
            </h1>
            <p className="sm:text-lg">
              At Interactive Cares, life revolves around team collaboration, a
              friendly work culture, and a balanced work-and-chill environment.
              We&apos;re committed to creating a space where innovation thrives,
              ideas are welcomed, and well-being is paramount, ensuring every
              team member feels valued and inspired.
            </p>
          </div>
        </div>
        {/* OUR FOUNDING TEAM section */}
        <div>
          <h1 className="text-center text-2xl sm:text-[30px] mb-10">
            OUR FOUNDING TEAM
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="text-center">
              <Image
                src={CEO}
                alt="Team Member"
                className="shrink-0 size-[200px] lg:size-[300px] block mx-auto object-cover object-top rounded-full border-4 border-orange-500"
              />
              <h1 className="text-xl font-medium mt-5">Rare Al Samir</h1>
              <h2 className="text-orange-500 text-lg font-semibold">
                Founder & CEO
              </h2>
              <p className="mt-2">
                Ex-Bangladesh Army, 3 years of Offline Education Business
                Experience, 5 years of Teaching Experience Finance Graduate
              </p>
            </div>
            <div className="text-center">
              <Image
                src={COO}
                alt="Team Member"
                className="shrink-0 size-[200px] lg:size-[300px] block mx-auto object-cover object-top rounded-full border-4 border-orange-500"
              />
              <h1 className="text-xl font-medium mt-5">
                Jamila Bupasha Khushbu
              </h1>
              <h2 className="text-orange-500 text-lg font-semibold">
                Co-Founder & COO
              </h2>
              <p className="mt-2">
                Economics Post Graduate, Ex-BYLC Graduate, 6 years of Experience
                in Education Sector, Mentored 5000+ students at s@ifurs & two
                other educational institution, Lead an NGO for 4 years as an
                Operation Lead
              </p>
            </div>
            <div className="text-center">
              <Image
                src={CTO}
                alt="Team Member"
                className="shrink-0 size-[200px] lg:size-[300px] block mx-auto object-cover object-top rounded-full border-4 border-orange-500"
              />
              <h1 className="text-xl font-medium mt-5">
                Tanveer Hossain Munim
              </h1>
              <h2 className="text-orange-500 text-lg font-semibold">CTO</h2>
              <p className="mt-2">
                Software Engineer, 5 years of Teaching Experience to 50,000+
                Students
              </p>
            </div>
          </div>
        </div>
        {/* Our Achievements section */}
        <div className="mt-20 mb-10">
          <h1 className="text-center text-2xl sm:text-[30px] mb-10">
            Some of our Achievements
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-10">
            <Image
              src={AchivementImage}
              alt="Achivement Image"
              className="w-full sm:w-1/2 md:w-[60%] object-cover max-h-[400px] sm:max-h-[300px] rounded-lg"
            />
            <div className="w-full sm:w-1/2 md:w-[40%]">
              <h1 className="text-lg sm:text-2xl font-medium mb-3">
                Accelerating Asia Cohort-9
              </h1>
              <p>
                Interactive Cares clinched a $100K investment from Accelerating
                Asia, with up to $250K follow-on funding for its $1.5M Seed
                Round. With 100,000+ paid users and 20% MoM growth, it&apos;s
                secured seed investments from global markets including Hong Kong
                and Silicon Valley. As the only Bangladeshi firm in Accelerating
                Asia Cohort-9, it previously raised $350K in pre-seed funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
