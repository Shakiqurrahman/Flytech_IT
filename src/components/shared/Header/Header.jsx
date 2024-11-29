"use client";

import basicLogo from "@/assets/images/courses-logo/basic-computer-course.png";
import cyberLogo from "@/assets/images/courses-logo/cyber-security.png";
import devOpsLogo from "@/assets/images/courses-logo/devops.png";
import dJangoLogo from "@/assets/images/courses-logo/django.png";
import flutterLogo from "@/assets/images/courses-logo/flutter.png";
import graphicsLogo from "@/assets/images/courses-logo/graphic-design.png";
import laravelLogo from "@/assets/images/courses-logo/Laravel.png";
import mernLogo from "@/assets/images/courses-logo/mern-stack.png";
import pyhtonLogo from "@/assets/images/courses-logo/python.png";
import seoLogo from "@/assets/images/courses-logo/SEO.png";
import marketingLogo from "@/assets/images/courses-logo/social-media-marketing-service.png";
import uiuxLogo from "@/assets/images/courses-logo/ui-ux-design.png";
import wordpressLogo from "@/assets/images/courses-logo/wordpress.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "/public/flytech-White.png";

const Header = () => {
    const courses = [
        {
            name: "Web Design & Development with PHP, LARAVEL",
            link: "",
            logo: laravelLogo,
        },
        {
            name: "MERN Stack, Next Js",
            link: "",
            logo: mernLogo,
        },
        {
            name: "Cyber Security & Ethical Hacking",
            link: "",
            logo: cyberLogo,
        },
        {
            name: "Programming With Python",
            link: "",
            logo: pyhtonLogo,
        },
        {
            name: "Python & Django, DevOps Web & Software Development",
            link: "",
            logo: dJangoLogo,
        },
        {
            name: "Python Software developer With DevOps",
            link: "",
            logo: devOpsLogo,
        },
        {
            name: "Flutter Mobile Apps Development",
            link: "",
            logo: flutterLogo,
        },
        {
            name: "Graphics Design",
            link: "",
            logo: graphicsLogo,
        },
        {
            name: "Basic Computer & Office Job, Data Entry",
            link: "",
            logo: basicLogo,
        },
        {
            name: "Social Media Marketing",
            link: "",
            logo: marketingLogo,
        },
        {
            name: "Website SEO Basic To Advanced",
            link: "",
            logo: seoLogo,
        },
        {
            name: "Wordpress",
            link: "",
            logo: wordpressLogo,
        },
        {
            name: "UX/UI Design",
            link: "",
            logo: uiuxLogo,
        },
    ];

    const [isDropdownClicked, setIsDropdownClicked] = useState(false);
    return (
        <header className="py-4 border-b border-gray-700/50 backdrop:blur relative">
            <div className="flex justify-between items-center max-width">
                <div>
                    <Image src={logo} alt="Flytech It" className="w-40" />
                </div>
                <nav>
                    <ul className="flex gap-6 font-medium text-base">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li
                            className=" relative"
                            onClick={() =>
                                setIsDropdownClicked(!isDropdownClicked)
                            }
                        >
                            <span className="flex items-center gap-2 cursor-pointer ">
                                Courses <IoIosArrowDown/>
                            </span>
                            <ul
                                className={`${
                                    isDropdownClicked
                                        ? "opacity-100 visible"
                                        : "invisible opacity-0"
                                } duration-300 grid gap-5 grid-cols-3 w-[800px] absolute z-10 bg-black border border-gray-700 p-4 rounded-sm top-[40px] left-1/2 -translate-x-1/2 backdrop:blur-sm bg-gradient-to-r from-[#030014] to-[#0A001F]`}
                            >
                                {courses?.map((course, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            src={course?.logo}
                                            alt={course?.name}
                                            className="w-10"
                                        />
                                        <Link
                                            href={course?.link}
                                            className="font-semibold text-sm"
                                        >
                                            {course?.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    <Link
                        href={"https://facebook.com/flytechitbd"}
                        target="_blank"
                        className="size-8 rounded-full border-2 flex items-center justify-center"
                    >
                        <FaFacebookF />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
