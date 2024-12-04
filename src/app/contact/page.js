import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <>
      <div className="relative border-b border-gray-700/50">
        <div className="max-w-[1600px] w-full rounded-full h-[200px] bg-gradient-to-b from-transparent from-0% via-95% to-100% via-blue-900 to-transparent absolute left-1/2 blur-[200px]"></div>
        <div className="max-width">
          <div className="pt-[100px] text-center md:text-start">
            <h1 className="font-semibold text-4xl">Contact Us</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-5 mb-[100px] md:mt-[100px] md:mb-5">
              <Link
                href={"https://facebook.com/flytechitbd"}
                target="_blank"
                className="size-8 rounded-lg flex items-center justify-center bg-white text-body backdrop-blur duration-300"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={""}
                target="_blank"
                className="size-8 rounded-lg flex items-center justify-center bg-white text-body backdrop-blur duration-300"
              >
                <FaYoutube />
              </Link>
              <Link
                href={""}
                target="_blank"
                className="size-8 rounded-lg flex items-center justify-center bg-white text-body backdrop-blur duration-300"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-width">
        <div className="py-[100px] flex gap-5 items-start justify-between">
          <div className="w-[30%] lg:pr-10 hidden md:block">
            <h1 className="text-[26px] font-medium mb-5">
              You are one step closer to build your perfect product
            </h1>
            <div className="flex items-center gap-5 text-blue-500">
              <p className="leading-[1]">Just send a Message</p>
              <HiArrowLongRight className="text-3xl mt-1" />
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
