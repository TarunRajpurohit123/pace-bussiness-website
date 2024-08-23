import Card from "@/app/components/Card";
import CircleIcon from "@/components/svgs/CircleIcon";
import CrownIcon from "@/components/svgs/CrownIcon";
import MessageStarIcon from "@/components/svgs/MessageStarIcon";

export default function AboutCards() {
  const cardData = [
    {
      heading: "As core values.",
      text: "These principles guide decisions and strategies, ensuring consistent and coherent growth. Every action aligns with them, contributing to our overall impact. They serve as a compass.",
      icon: <CircleIcon />,
    },
    {
      heading: "As Brand Identity.",
      text: "These pillars define PACE's brand identity, projecting our values to consumers, partners, and investors. They shape the narrative and messaging for each brand within our portfolio, ensuring a unified voice.",
      icon: <CrownIcon />,
    },
    {
      heading: "As strategic Drivers.",
      text: "These principles guide decisions and strategies, ensuring consistent and coherent growth. Every action aligns with them, contributing to our overall impact. They serve as a compass.",
      icon: <MessageStarIcon />,
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
                headingStyles={{
                  marginTop: "1.5rem",
                  fontSize: "3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                }}
                paragraphStyles={{
                  fontSize: "1.8rem",
                  fontWeight: "400",
                  marginTop: "2.5rem",
                  letterSpacing: "-0.05em",
                }}
                text={card?.text}
                anchor={card?.anchor}
                icon={card?.icon}
                classNames={ind != 0 ? "ml-[2.5rem] " : ""}
                styles={{
                  width: "41rem",
                  height: "auto",
                  padding: "2.5rem",
                }}
                wrapStyles={{
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "0.8rem",
                }}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
