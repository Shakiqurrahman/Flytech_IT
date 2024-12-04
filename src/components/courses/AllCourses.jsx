import { AllCoursesData } from "@/constants/coursesData";
import CourseCard from "./CourseCard";

const AllCourses = () => {
    return (
        <section className="max-width">
            <h2 className="text-center font-semibold text-2xl sm:text-4xl mb-1">
                All <span className="text-blue-500">Courses</span>
            </h2>
            <p className="text-center text-gray-300 text-sm sm:text-base">
                Find the Perfect Course for You
            </p>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {AllCoursesData.map((course) => (
                    <CourseCard key={course?.id} course={course} />
                ))}
            </div>
        </section>
    );
};

export default AllCourses;
