import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShopifyFAQAccordion = () => {
  return (
    <Accordion type="single" collapsible className="py-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <AccordionItem value={index.toString()} key={index}>
          <AccordionTrigger>Lorem ipsum dolor?</AccordionTrigger>
          <AccordionContent className="p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            eveniet impedit adipisci ducimus autem pariatur, esse deserunt
            veniam praesentium porro at. Architecto perferendis libero quisquam,
            iusto consectetur quo quos. Obcaecati?
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default ShopifyFAQAccordion;
