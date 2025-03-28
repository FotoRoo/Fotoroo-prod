import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  


const Faq = () => {
  const faqs = [
    {
      "question": "What types of photo booths do you offer?",
      "answer": "We offer a variety of photo booths, including Mirror Booths, DSLR Booths, 360 Booths, and our new Magazine Booth, each tailored to suit different event styles and preferences."
    },
    {
      "question": "What is the Magazine Booth?",
      "answer": "The Magazine Booth allows guests to create stunning magazine-style photo layouts, complete with customizable covers and templates. It’s perfect for adding a chic touch to your event!"
    },
    {
      "question": "Can the photobooth be set up outdoors?",
      "answer": "Yes, but we require a flat, stable surface and adequate weather protection to ensure everything runs smoothly."
    },
    {
      "question": "Can I personalize the photo prints for my event?",
      "answer": "Absolutely! We can create custom overlays and magazine covers to match your event theme at no additional cost, with options like 2x6\" photo strips or 4x6\" prints."
    },
    {
      "question": "Do you provide custom backdrops?",
      "answer": "Yes, we offer a range of 7x7 ft and 8x8 ft backdrops, and we can create personalized backdrops upon request."
    },
    {
      "question": "How much space is required for the photobooth?",
      "answer": "Depending on the type of booth, we need approximately 2.5x3 meters for setup and enough space for guests to comfortably use the booth."
    },
    {
      "question": "Do you provide an attendant during the event?",
      "answer": "Yes, all our packages include a professional attendant to assist your guests and ensure everything runs smoothly."
    },
    {
      "question": "Is there a limit on the number of photos taken during the rental period?",
      "answer": "No, there’s no limit! Guests can take as many photos as they like during the rental period."
    }
  ];
  return (
    <section className="md:w-11/12 mx-auto">
        {/* <h1 className="font-pinyon text-4xl text-center my-5 md:mb-10 md:text-6xl">FAQs</h1> */}
        <h1 className="md:text-[55px] lg:text-[70px] xl:text-[85px] uppercase font-dhaks text-5xl text-center my-5 md:mb-10">FAQs</h1>
    <Accordion type="single" collapsible className="font-rische">
    {faqs.map((faq, index) => (
      <AccordionItem key={index} value={`item-${index + 1}`} >
        <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
        <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
  </section>
  );
};

export default Faq;