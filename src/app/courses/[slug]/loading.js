import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="max-width md:flex gap-5 mt-10 min-h-screen">
            <div className="w-full md:w-[calc(100%_-_380px)] h-full mb-2">
                <Skeleton className="w-full h-[450px]" />
                <div className="space-y-8 mt-4 w-full">
                    <Skeleton className="h-10 w-full text-2xl sm:text-3xl mt-5" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-12 w-full" />
                </div>
            </div>
            <div className="w-full md:w-[380px]">
                <Skeleton className="h-[450px] w-full" />
                <Skeleton className="h-[110px] w-full mt-4" />
            </div>
        </div>
    );
};

export default loading;
