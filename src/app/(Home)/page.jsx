import Accordions from "@/components/Accordions";
import AllCourses from "@/components/courses/AllCourses";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

export default function Home() {
    return (
        <>
            <div className="mb-10">
                <Hero />
            </div>
            <div className="my-20">
                <AllCourses />
            </div>
            <div className="my-20">
                <Reviews />
            </div>
            <div className="my-20">
                <Accordions />
            </div>
        </>
    );
}
