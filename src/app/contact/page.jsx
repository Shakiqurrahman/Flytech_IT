import triangleShape2 from "@/assets/images/shapes/triangle-shape.png";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <>
      <div className="relative border-b border-gray-700/50">
        <div className="absolute right-10 top-10 hidden md:flex gap-8 blur-sm select-none">
          <FaFacebookF className="text-5xl text-white/10 animate-pulse" />
          <FaYoutube className="text-5xl text-white/10 animate-pulse mt-5" />
          <FaLinkedinIn className="text-5xl text-white/10 animate-pulse mt-10" />
        </div>
        <div className="w-full rounded-full h-[200px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-blue-800 to-transparent absolute left-1/2 top-0 blur-[200px]"></div>
        <div className="max-width">
          <div className="pt-[80px] text-center md:text-start">
            <h1 className="font-semibold text-4xl">Contact Us</h1>
            <p className="text-gray-300">
              We’re Here to Help – Reach Out Anytime.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-3 mt-5 mb-[100px] md:mt-[100px] md:mb-5">
              <Link
                href={"https://facebook.com/flytechitbd"}
                target="_blank"
                className="size-8 rounded-lg flex items-center justify-center bg-white text-body backdrop-blur duration-300 hover:bg-white/85"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={""}
                target="_blank"
                className="size-8 rounded-lg flex items-center justify-center bg-white text-body backdrop-blur duration-300 hover:bg-white/85"
              >
                <FaYoutube />
              </Link>
              <Link
                href={""}
                target="_blank"
                className="size-8 rounded-lg flex items-center justify-center bg-white text-body backdrop-blur duration-300 hover:bg-white/85"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-width relative">
        <Image
          src={triangleShape2}
          alt="hero shape"
          className="absolute left-4 top-10 animate-spin-slow hidden md:block"
        />
        <div className="py-[100px] flex gap-5 items-start justify-between">
          <div className="w-[30%] lg:pr-10 hidden md:block group">
            <h1 className="text-[26px] font-medium mb-5">
              You’re One Step Closer to Achieving Your Goal
            </h1>
            <div className="flex items-center gap-2 text-blue-500">
              <p className="leading-[1]">Just send a Message</p>
              <HiArrowLongRight className="text-3xl mt-1 group-hover:translate-x-3 duration-300" />
            </div>
          </div>
          <div className="w-full max-w-[600px] md:max-w-full mx-auto md:ml-auto md:mr-0 md:w-[70%] lg:w-[60%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
