"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Multitabs = ({ desc, willLearn, community, forWhom }) => {
  const buttons = [
    {
      name: "ক্যারিয়ার পাথ সম্পর্কে জানুন",
      value: "career",
    },
    {
      name: "যা যা শিখবেন",
      value: "learn",
    },
    {
      name: "কমিউনিটি",
      value: "community",
    },
    {
      name: "যাদের জন্য",
      value: "forWhom",
    },
  ];
  const [selectedBtn, setSelectedBtn] = useState("career");

  const RenderSelectedTab = () => {
    switch (selectedBtn) {
      case "career":
        return (
          <div className="text-lg" dangerouslySetInnerHTML={{ __html: desc }} />
        );
      case "learn":
        return (
          <ul>
            {willLearn?.map((item, i) => (
              <li key={i} className="flex items-start gap-4 my-3">
                <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
                <p className="text-lg -mt-1">👉 {item}</p>
              </li>
            ))}
          </ul>
        );
      case "community":
        return (
          <div className="flex flex-wrap sm:flex-nowrap gap-4">
            {community?.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 px-10 py-5 rounded-lg bg-[#141c2c] shadow text-center"
              >
                <h1 className="text-lg font-semibold mb-3">{item?.title}</h1>
                <Link
                  href={item?.link}
                  className="block border-2 border-blue-400 text-blue-400 font-medium rounded py-3 px-4"
                >
                  {item?.linkTitle}
                </Link>
              </div>
            ))}
          </div>
        );
      case "forWhom":
        return (
          <ul>
            {forWhom?.map((item, i) => (
              <li key={i} className="flex items-start gap-4 my-3">
                <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
                <p className="text-lg -mt-1">{item}</p>
              </li>
            ))}
          </ul>
        );
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center border-b my-5 overflow-x-auto overflow-y-hidden">
        {buttons?.map((btn, i) => (
          <button
            key={i}
            className={`${
              selectedBtn === btn?.value && "text-blue-400 before:bg-blue-400"
            } px-4 py-3 grow shrink-0 relative font-semibold before:absolute before:block before:w-full before:-bottom-0.5 before:h-[3px] before:left-0`}
            onClick={() => setSelectedBtn(btn?.value)}
          >
            {btn?.name}
          </button>
        ))}
      </div>
      <RenderSelectedTab />
    </div>
  );
};

export default Multitabs;
