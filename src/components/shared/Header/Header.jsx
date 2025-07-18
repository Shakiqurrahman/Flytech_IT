"use client";

import { coursesNavLink } from "@/constants/coursesNavLinkData";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/public/flytech-White.png";

const Header = () => {
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [headerHeight, setHeaderHight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const handleMouseToggle = useCallback((state) => {
    setIsDropdownClicked(state);
  }, []);

  const handleClick = useCallback(() => {
    setIsDropdownClicked((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setIsDropdownClicked(false);
  }, [isToggle]);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (headerRef?.current) {
      setHeaderHight(headerRef?.current?.offsetHeight);
    }
  }, [headerRef]);

  const handleClose = () => {
    setIsToggle(false);
  };

  return (
    <header
      ref={headerRef}
      className="border-b border-gray-700/50 backdrop:blur relative z-10"
    >
      <div className="flex justify-between items-center max-width md:gap-0 gap-4">
        <Link href="/">
          <Image src={logo} alt="Flytech It" className="w-28 sm:w-32" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex font-medium text-base">
            <li>
              <Link
                href="/"
                className="px-3 py-2 rounded-md hover:bg-white/10 duration-300 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="px-3 py-2 rounded-md hover:bg-white/10 duration-300 block"
              >
                About
              </Link>
            </li>
            <li
              className=""
              onMouseEnter={() => handleMouseToggle(true)}
              onMouseLeave={() => handleMouseToggle(false)}
              onClick={handleClick}
            >
              <span className="flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-white/10 duration-300 rounded-md">
                Courses <IoIosArrowDown />
              </span>
              <ul
                className={`${
                  isDropdownClicked
                    ? "opacity-100 visible"
                    : "invisible opacity-0"
                } duration-300 grid gap-x-2 gap-y-4 grid-cols-3 w-[90%] max-w-[1000px] absolute z-10 bg-blac border border-gray-700/50 p-6 rounded-lg top-[70px] left-1/2 -translate-x-1/2  bg-[#030014]/20 backdrop-blur-[25px]`}
              >
                {coursesNavLink?.map((course, index) => (
                  <li key={index}>
                    <Link
                      href={course?.link}
                      className="font-semibold text-sm flex items-center gap-2 hover:bg-white/10 p-4 rounded-lg"
                    >
                      <Image
                        src={course?.logo}
                        alt={course?.name}
                        className="w-8"
                      />
                      {course?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md hover:bg-white/10 duration-300 block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <Link
            href={"https://facebook.com/flytechitbd"}
            target="_blank"
            className="size-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white hover:text-body backdrop-blur duration-300"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={""}
            target="_blank"
            className="size-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white hover:text-body backdrop-blur duration-300"
          >
            <FaYoutube />
          </Link>
          <Link
            href={""}
            target="_blank"
            className="size-8 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white hover:text-body backdrop-blur duration-300"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <div
          className={`${
            isToggle ? "toggleOn" : "toggleOff"
          } md:hidden w-6 h-6 overflow-hidden flex flex-col cursor-pointer relative select-none`}
          onClick={() => setIsToggle(!isToggle)}
        >
          <div className="absolute w-full h-[3px] bg-white"></div>
          <div className="absolute right-0 ml-auto h-[3px] bg-white my-auto"></div>
          <div className="absolute bottom-0 text-[8px] w-full flex justify-between leading-[1]">
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>U</span>
          </div>
        </div>
      </div>
      <nav
        className={`${
          isToggle ? "translate-x-0" : "-translate-x-full"
        } block md:hidden absolute top-full left-0 w-full pt-0 p-4 pl-8 bg-body/10 backdrop-blur-[25px] z-[9] duration-500`}
        style={{
          height: `calc(${windowHeight + 2}px - ${headerHeight}px)`,
        }}
      >
        <ul className="font-medium h-full text-base *:my-5 overflow-y-auto sidebar-scrollbar">
          <li onClick={handleClose}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleClose}>
            <Link href="/about-us">About</Link>
          </li>
          <li onClick={handleClick}>
            <span className="flex items-center gap-2 cursor-pointer">
              Courses{" "}
              <IoIosArrowDown
                className={`${
                  isDropdownClicked ? "-rotate-180" : "rotate-0"
                } duration-300`}
              />
            </span>
            <ul
              ref={dropdownRef}
              style={{
                height: isDropdownClicked
                  ? dropdownRef?.current.scrollHeight
                  : 0,
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
              {coursesNavLink?.map((course, index) => (
                <li
                  key={index}
                  onClick={handleClose}
                  className="first:pt-3 px-2"
                >
                  <Link
                    href={course?.link}
                    className="flex items-center gap-2 hover:bg-white/10 rounded-lg p-4"
                  >
                    <Image
                      src={course?.logo}
                      alt={course?.name}
                      className="w-8"
                    />

                    <span className="font-semibold text-sm">
                      {course?.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li onClick={handleClose}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
