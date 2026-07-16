import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/cupertino-ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="battery" className="max-w-sm">
      <AccordionItem value="battery">
        <AccordionTrigger>Battery Health</AccordionTrigger>
        <AccordionContent>
          Your battery&apos;s maximum capacity is 91%. Peak performance
          capability is normal.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="charging">
        <AccordionTrigger>Optimized Charging</AccordionTrigger>
        <AccordionContent>
          To reduce battery aging, iPhone learns from your daily charging
          routine and waits to finish charging past 80%.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="usage">
        <AccordionTrigger>Usage by App</AccordionTrigger>
        <AccordionContent>
          See which apps used the most battery in the last 24 hours.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
