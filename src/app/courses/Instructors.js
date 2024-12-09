import Image from "next/image";

const Instructors = ({ items }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-medium text-blue-400 my-10">
        কোর্স ইনস্ট্রাক্টর
      </h1>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        {items?.map((item, i) => (
          <div key={i} className="bg-dark-gradient-alt p-5 rounded">
            <div className="flex items-center gap-2">
              <Image
                src={item?.image}
                alt="Course Instructor"
                className="size-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-lg font-semibold">{item?.name}</h1>
                <p className="px-3 py-1 inline-block rounded bg-blue-400 text-xs text-black">
                  {item?.title}
                </p>
              </div>
            </div>
            <p className="font-medium mt-2">{item?.shortBio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
