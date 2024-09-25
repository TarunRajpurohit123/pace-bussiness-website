import Card from "@/components/components/Card";
import CircleIcon from "@/components/svgs/CircleIcon";
import CrownIcon from "@/components/svgs/CrownIcon";
import MessageStarIcon from "@/components/svgs/MessageStarIcon";
import uniqid from "uniqid";

export default function BrandCards() {
  const cardData = [
    {
      heading: "As core values.",
      text: "Three pillars represent the fundamental beliefs and standards that PACE upholds in every aspect of its operations. They inform the company culture and ethical approach to business.",
      icon: <CircleIcon />,
    },
    {
      heading: "As Brand Identity.",
      text: "They serve as guiding principles for decision-making and strategic planning. Every brand, product launch, and partnership is aligned with these pillars to ensure consistency and coherence in the company’s growth and impact.",
      icon: <CrownIcon />,
    },
    {
      heading: "As strategic Drivers.",
      text: "These pillars are integral to PACE’s brand identity, helping to communicate what the company stands for to consumers, partners, and investors. They shape the narrative and messaging around each brand within the portfolio.",
      icon: <MessageStarIcon />,
    },
  ];
  return (
    <>
      <section className="aboutcards_section page-width">
        <h1>How We Work?</h1>
        <section className="flex flex-wrap justify-center mt-[5rem]">
          {cardData?.map((card, ind) => {
            return (
              <Card
                key={uniqid("about", "card")}
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
                styles={
                  ind <= 2
                    ? {
                        width: "41rem",
                        height: "auto",
                        padding: "2.5rem",
                      }
                    : {
                        width: "41rem",
                        height: "auto",
                        padding: "2.5rem",
                        marginTop: "5rem",
                      }
                }
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
