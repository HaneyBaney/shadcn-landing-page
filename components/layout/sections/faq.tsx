import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Which AI girlfriend app is actually worth paying for?",
    answer:
      "Depends what you care about. OurDream AI scores highest on our Value Index because you get chat, images, voice, and video all included — no coin nonsense. If you just want to chat and don't care about media, Candy AI at $3.99/mo is hard to beat. We test every platform the same way so the rankings aren't opinions.",
    value: "item-1",
  },
  {
    question: "Is my data private on these platforms?",
    answer:
      "Most platforms use encrypted connections and don't show up on your bank statement by name. That said, privacy policies vary a lot. Secret Desires is the most privacy-focused one we've tested. General rule: don't use your real name, don't share personal photos, and use a separate email.",
    value: "item-2",
  },
  {
    question: "Can I actually generate videos, or is that just marketing?",
    answer:
      "It's real, but quality varies. AiAllure can do up to 2 minutes, though anything past 30 seconds gets rough. OurDream gives you 10 clips per month included in your plan. Most others either don't have video or charge extra per clip. We break down exactly what's included vs. what costs extra on every review.",
    value: "item-3",
  },
  {
    question: "What's free and what's behind a paywall?",
    answer:
      "Almost every platform lets you send messages for free. The paywall hits when you want images, voice, or video. OurDream, GPTGirlfriend, and Candy AI all have free tiers. SpicyChat is fully free but community-driven, so quality is hit or miss. If you want the full experience, expect to pay $4–$15/mo depending on the platform.",
    value: "item-4",
  },
  {
    question: "What's the Value Index and why should I trust it?",
    answer:
      "It's a score from 0 to 100 that combines two things: what features are actually included in your subscription (before any credits or add-ons), and how much it costs compared to the cheapest option. We use a geometric mean — same math the UN uses for the Human Development Index — so a platform can't score high by being cheap but useless, or feature-rich but overpriced. All data comes from public pricing pages, updated monthly.",
    value: "item-5",
  },
  {
    question: "How often do you update the rankings?",
    answer:
      "Monthly. Platforms change their pricing and features all the time — Candy AI has changed its token system three times in the past year. We re-check every pricing page and re-run the numbers. The date is always shown at the top of the index.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider font-mono">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold font-mono">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left font-mono">
              {question}
            </AccordionTrigger>

            <AccordionContent className="font-mono">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQList.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};
