import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants/faqData";

const CourseFAQ = () => {
  return (
    <div className="mb-10">
      <h1 className="my-10 text-center text-2xl text-blue-400 font-semibold">
        সাধারণ প্রশ্নাবলী
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {faqData?.map((faq) => (
          <AccordionItem key={faq?.id} value={faq?.id} className="border-none">
            <AccordionTrigger className="text-left text-[17px]">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq?.answer}
              <div className="mt-4 font-extralight">
                {faq?.answerBulletPoints &&
                  faq?.answerBulletPoints?.map((point, idx) => (
                    <ul key={idx} className="pl-4 text-sm">
                      <li className="list-disc">
                        <span className="font-medium">
                          {point?.bulletHeading && `${point?.bulletHeading} :`}
                        </span>
                        {point?.bulletBody}
                      </li>
                    </ul>
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseFAQ;
