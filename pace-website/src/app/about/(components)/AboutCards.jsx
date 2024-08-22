import Card from "@/app/components/Card";
import SmsIcon from "@/components/svgs/SmsIcon";

export default function AboutCards() {
  const cardData = [
    {
      heading: "As core values.",
      text: "These principles guide decisions and strategies, ensuring consistent and coherent growth. Every action aligns with them, contributing to our overall impact. They serve as a compass.",
      icon: <SmsIcon />,
    },
    {
      heading: "As Brand Identity.",
      text: "These pillars define PACE's brand identity, projecting our values to consumers, partners, and investors. They shape the narrative and messaging for each brand within our portfolio, ensuring a unified voice.",
      icon: <SmsIcon />,
    },
    {
      heading: "As strategic Drivers.",
      text: "These principles guide decisions and strategies, ensuring consistent and coherent growth. Every action aligns with them, contributing to our overall impact. They serve as a compass.",
      icon: <SmsIcon />,
    },
  ];
  return (
    <>
      <section className="aboutcards_section page-width">
        <h1>
          Teamwork <span>fuels innovation</span> and growth.
        </h1>
        <section className="flex justify-center mt-[5rem]">
          {cardData?.map((card, ind) => {
            return (
              <Card
                heading={card?.heading}
                text={card?.text}
                anchor={card?.anchor}
                icon={card?.icon}
                classNames={ind != 0 ? "ml-[2.5rem] " : ""}
                styles={{ width: "41rem", height: "30.7rem" }}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
