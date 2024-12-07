"use client";

import Link from "next/link";
import { useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Multitabs = () => {
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
          <div className="text-lg">
            <p className="mb-3">
              ডেটা সায়েন্স এবং মেশিন লার্নিং এ দেশের সবচেয়ে কমপ্লিট কোর্স
              আউটলাইনে হয়ে উঠুন জব রেডি ডেটা সায়েন্টিস্ট এবং মেশিন লার্নিং
              ইঞ্জিনিয়ার।
            </p>
            <p className="mb-3">
              একদম বিগিনার থেকে শুরু করে ধাপে ধাপে মেশিন লার্নিং, ডিপ লার্নিং
              এবং MLOps এর মতো এডভান্সড ব্যাপারগুলো থাকবে আপনার স্কিল সেটে
              শুধুমাত্র একটি কোর্সেই। সাথে থাকবে ইন্ডাস্ট্রি বেস্ট মেন্টর
              প্যানেল, ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রোজেক্টস, প্রতিদিন সাপোর্ট
              ক্লাস এবং এসাইনমেন্ট ইভালুয়েশন - মোটকথা একটা কম্প্যাক্ট লার্নিং
              এনভায়রনমেন্ট প্রস্তুত আপনার ১০০% লার্নিং এক্সপেরিয়েন্স নিশ্চিত
              করতে।
            </p>
            <h1 className="font-semibold">লার্নিং জার্নিটা কেমন হবে?</h1>
            <p className="mb-3">
              প্রথমেই আমরা শুরু করবো পাইথন ব্যাসিক থেকে, অর্থাৎ কারো যদি
              একেবারেই কোডিং নলেজ না থাকে তিনিও যেন শুরু করতে পারেন।
            </p>
            <p className="mb-3">
              পর্যায়ক্রমে Database Fundamentals, SQL, Statistics, Data
              Analytics, Data Visualization, Machine Learning, Deep Learning &
              MLOps এর বিষয়গুলো কভার করা হবে।
            </p>
            <p className="mb-3">
              আউটলাইনটা এমনভাবে সাজানো হয়েছে যেন আপনি এই কোর্সটা কমপ্লিট করে
              লোকাল জবের পাশাপাশি রিমোট জবের জন্যও প্রস্তুত থাকতে পারেন।
            </p>
            <p className="mb-3">
              👉 ডাটা সায়েন্টিস্ট হতে চাইলে এর বেশি আর কি লাগে বলুন?
            </p>
            <h1 className="font-semibold">
              এই কোর্সে কি যেকোনো ব্যাকগ্রাউন্ড থেকেই জয়েন করা যাবে?
            </h1>
            <p className="mb-3">
              জ্বী, আমাদের জার্নিটা একদম পাইথন ব্যাসিক থেকেই শুরু হচ্ছে এবং
              পর্যায়ক্রমে সবগুলো টপিকের ব্যাসিক কভার করেই সামনে আগানো হচ্ছে, তাই
              এই কোর্সে আপনি যেকোনো ব্যাকগ্রাউন্ড থেকেই জয়েন করতে পারবেন। শুধু
              আমাদের সাথে কোর্সের শেষ পর্যন্ত থাকলেই হবে।
            </p>
            <h1 className="font-semibold">
              কোর্সে কতটুকু এডভান্সড লার্নিং এর সুযোগ থাকবে?
            </h1>
            <p className="mb-3">
              কোর্স আউটলাইনটা খেয়াল করলেই দেখা যাবে মেশিন লার্নিং এর এডভান্সড
              টপিকগুলো প্রজেক্টসহ কভার করা হচ্ছে। এছাড়াও কোর্সে ডিপ লার্নিং নিয়ে
              ৮টি ক্লাস এবং MLOps নিয়ে রয়েছে ৪টি ক্লাস। তাই বলাই যায় এডভান্সড
              লার্নারদের জন্যও এই একটি কোর্স এডভান্সড টপিকগুলোতে রেডি হতে হেল্প
              করবে।
            </p>
            <p className="mb-3">
              তাই আপনি যদি মেশিন লার্নিং আর ডেটা সায়েন্সের এই ফিল্ডে ক্যারিয়ার
              বিল্ড আপ করতে চান, তাহলে আজই এনরোল করেন আমাদের এই ক্যারিয়ার পাথে,
              মাত্র ৬০০০ টাকা।
            </p>
            <p>যেকোনো প্রয়োজনে যোগাযোগ করুন 01896125224 নাম্বারে।</p>
          </div>
        );
      case "learn":
        return (
          <ul>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">👉 পাইথন ফান্ডামেন্টাল</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">👉 ডেটাবেস বেসিক ও SQL</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">👉 পাইথন দিয়ে স্ট্যাটিস্টিক্স</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">
                👉 NumPy অ্যান্ড Pandas দিয়ে ডেটা অ্যানালাইসিস
              </p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">
                👉 Matplotlib, Seaborn আর Plotly দিয়ে ডেটা ভিজুয়ালাইজেশন
              </p>
            </li>
          </ul>
        );
      case "community":
        return (
          <div className="flex gap-4">
            <div className="w-1/2 px-10 py-5 rounded-lg bg-[#141c2c] shadow text-center">
              <h1 className="text-lg font-semibold mb-3">
                Desperately Seeking Programmers
              </h1>
              <Link
                href={""}
                className="block border-2 border-blue-400 text-blue-400 font-medium rounded py-3 px-4"
              >
                Join The Group
              </Link>
            </div>
            <div className="w-1/2 px-10 py-5 rounded-lg bg-[#141c2c] shadow text-center">
              <h1 className="text-lg font-semibold mb-3">
                Interactive Cares Official Group
              </h1>
              <Link
                href={""}
                className="block border-2 border-blue-400 text-blue-400 font-medium rounded py-3 px-4"
              >
                Join The Group
              </Link>
            </div>
          </div>
        );
      case "forWhom":
        return (
          <ul>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">মেশিন লার্নিং নিয়ে ইন্টারেস্টেড</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">রিসেন্ট গ্র্যাজুয়েটস</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">স্টুডেন্টস</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">সফটওয়্যার ডেভেলপারস</p>
            </li>
            <li className="flex items-start gap-4 my-3">
              <IoCheckmarkCircleOutline className="text-blue-400 text-xl" />
              <p className="text-lg -mt-1">ডেটা অ্যানালিস্ট</p>
            </li>
          </ul>
        );
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center border-b my-5">
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
