import AchivementImage from "@/assets/images/about-us/achivements/achivement.jpg";
import lifeAtFlytechit from "@/assets/images/about-us/lifeatflytechit.jpeg";
import ourMissionImage from "@/assets/images/about-us/ourmission.jpg";
import { teamsData } from "@/constants/teamsData";
import Image from "next/image";

const AboutUs = () => {
  const teamMembers = [...teamsData];
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
              Our mission is to empower individuals and organizations through
              high-quality, industry-relevant software training. We are
              committed to bridging the gap between theoretical knowledge and
              practical application by offering hands-on learning experiences
              that foster real-world skills. Our goal is to cultivate a new
              generation of tech professionals who are not only proficient in
              current technologies but also adaptable to the ever-evolving
              digital landscape. Whether you’re a student, job-seeker, working
              professional, or corporate team, we strive to provide personalized
              learning paths, expert mentorship, and innovative teaching
              methodologies tailored to diverse learning needs. By staying
              aligned with industry trends and partnering with experts, we
              ensure our learners gain the most in-demand skills—from
              programming and web development to data science, AI, and cloud
              technologies. We believe education should be accessible,
              practical, and transformative. Through our training programs, we
              aim to unlock potential, boost confidence, and support career
              advancement—ultimately contributing to a more skilled,
              future-ready workforce.
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
              At Flytech IT, we foster a vibrant, inclusive, and
              innovation-driven environment where learning never stops. Our team
              thrives on collaboration, creativity, and continuous growth. From
              hands-on training sessions to real-time project exposure, we
              ensure every individual feels empowered and valued. We celebrate
              achievements, encourage fresh ideas, and promote a healthy
              work-life balance. Whether you&apos;re a trainer, learner, or team
              member, Flytech IT is a place to grow, connect, and make a real
              impact in the tech world. Here, every day is a step forward in
              building brighter careers and stronger communities.
            </p>
          </div>
        </div>
        {/* OUR TEAM section */}
        <div>
          <h1 className="text-center text-2xl sm:text-[30px] mb-10">
            OUR TEAM
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center">
                <Image
                  src={member.image}
                  alt="Team Member"
                  className="shrink-0 size-[200px] lg:size-[300px] block mx-auto object-cover object-top rounded-full border-4 border-orange-500"
                />
                <h1 className="text-xl font-medium mt-5">{member.name}</h1>
                <h2 className="text-orange-500 text-lg font-semibold">
                  {member.title}
                </h2>
                <p className="mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Our Achievements section */}
        <div className="mt-20 mb-10">
          <h1 className="text-center text-2xl sm:text-[30px] mb-10">
            Some of our Achievements
          </h1>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 sm:gap-10">
            <Image
              src={AchivementImage}
              alt="Achivement Image"
              className="w-full md:w-1/2 lg:w-[60%] object-cover max-h-[400px] rounded-lg"
            />
            <div className="w-full md:w-1/2 lg:w-[40%]">
              <h1 className="text-lg sm:text-2xl font-medium mb-3">
                Flytech IT – CSE Industrial Training Achievement
              </h1>
              <p>
                At Flytech IT, our CSE Industrial Training program has
                successfully empowered hundreds of Computer Science students
                with hands-on industry experience. Over the course of our
                training sessions, participants have worked on real-world
                projects in web development, app development, cybersecurity,
                networking, and graphic design. Our structured modules, expert
                mentorship, and practical labs ensure students gain both
                technical skills and industry insights. We take pride in
                bridging the gap between academic knowledge and professional
                application. Many of our trainees have gone on to secure top
                positions in reputed IT firms and startups or started successful
                freelance careers. Our commitment to quality training,
                up-to-date curriculum, and personal guidance has made Flytech IT
                a trusted name in industrial training for CSE students across
                the country.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
