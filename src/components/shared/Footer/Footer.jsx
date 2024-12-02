import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import Copyright from "./Copyright";
import logo from "/public/flytech-White.png";

const Footer = () => {
  return (
    <footer className="bg-dark-gradient pt-20">
      <div className="max-width">
        <div className="flex justify-between md:flex-nowrap flex-wrap gap-y-8">
          <div className="w-full sm:w-[70%] md:w-[30%]">
            <Image
              src={logo}
              alt="Flytech IT"
              className="block mr-auto max-w-[200px]"
            />
            <address className="flex items-start gap-3 not-italic mt-10">
              <FaLocationDot className="text-xl" />
              <span className="block -mt-1">
                6B Bluewater Shopping City(5Th Floor) ,Zindabazar, Sylhet.
              </span>
            </address>
            <address className="flex items-start gap-2 not-italic my-3">
              <RiWhatsappFill className="text-lg" />
              <Link
                href={"https://wa.me/+8801326314022"}
                target="_blank"
                className="block -mt-1"
              >
                01326314022
              </Link>
            </address>
            <address className="flex items-start gap-2 not-italic">
              <IoIosMail className="text-lg" />
              <Link
                href={"mailto:info.flytechit@gmail.com"}
                className="block -mt-1"
              >
                info.flytechit@gmail.com
              </Link>
            </address>
          </div>
          <div className="w-1/2 sm:w-[30%] md:w-[15%] shrink-0">
            <h1 className="text-xl font-semibold mb-5">COMPANY</h1>
            <ul className="*:mb-3">
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Our Teacher
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-[30%] md:w-[15%] shrink-0">
            <h1 className="text-xl font-semibold mb-5">LINKS</h1>
            <ul className="*:mb-3">
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Notice
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Scholarship
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-[30%] md:w-[15%] shrink-0">
            <h1 className="text-xl font-semibold mb-5">SUPPORT</h1>
            <ul className="*:mb-3">
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Forums
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Language
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Release Status
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 sm:w-[30%] md:w-[15%] shrink-0">
            <h1 className="text-xl font-semibold mb-5">RECOMMEND</h1>
            <ul className="*:mb-3">
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Python
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Hacking
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  PHP
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="text-white/50 hover:text-white duration-300"
                >
                  Javascript
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
