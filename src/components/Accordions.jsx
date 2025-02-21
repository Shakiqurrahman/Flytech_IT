import { faqData } from "@/constants/faqData";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

const Accordions = () => {
    return (
        <div className="max-w-[800px] p-4 mx-auto">
            <h1 className="text-center text-2xl sm:text-4xl font-semibold mb-1">
                Frequently{" "}
                <span className="text-blue-500">Asked Questions</span>
            </h1>
            <p className="text-center  mb-10 tracking-widest text-gray-300 text-sm sm:text-base">
                Quick Answers to Common Questions
            </p>
            <Accordion type="single" collapsible className="w-full">
                {faqData?.map((faq) => (
                    <AccordionItem
                        key={faq?.id}
                        value={faq?.id}
                        className="border-none"
                    >
                        <AccordionTrigger className="text-left text-[17px]">
                            {faq?.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {faq?.answer}
                            <div className="mt-4 font-extralight">
                                {faq?.answerBulletPoints &&
                                    faq?.answerBulletPoints?.map(
                                        (point, idx) => (
                                            <ul
                                                key={idx}
                                                className="pl-4 text-sm"
                                            >
                                                <li className="list-disc">
                                                    <span className="font-medium">
                                                        {point?.bulletHeading &&
                                                            `${point?.bulletHeading} :`}
                                                    </span>
                                                    {point?.bulletBody}
                                                </li>
                                            </ul>
                                        )
                                    )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Accordions;
