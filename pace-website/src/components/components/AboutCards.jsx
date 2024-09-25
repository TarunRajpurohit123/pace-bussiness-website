import Card from "@/components/components/Card";
import CircleIcon from "@/components/svgs/CircleIcon";
import CrownIcon from "@/components/svgs/CrownIcon";
import MessageStarIcon from "@/components/svgs/MessageStarIcon";
import uniqid from "uniqid";
import AgileIcon from "../svgs/AgileIcon";
import QualityIcon from "../svgs/QualityIcon";
import VisionIcon from "../svgs/VisionIcon";

export default function AboutCards() {
  const cardData = [
    {
      heading: "Collaborative Growth",
      text: "PACE values partnerships for mutual growth,  expanding market influence and product  offerings through collaboration. This ensures sustainable, beneficial growth.",
      icon: <CircleIcon />,
    },
    {
      heading: "Empowered Vision",
      text: "PACE empowers B2B businesses to thrive by providing tools, resources, and support. As a collaborative partner, PACE helps businesses realize their potential through innovative solutions and strategic guidance.",
      icon: <VisionIcon />,
    },
    {
      heading: "Pioneering Excellence",
      text: "PACE aims to lead the industry through innovation and excellence, pioneering groundbreaking ideas and delivering exceptional results.",
      icon: <CrownIcon />,
    },
    {
      heading: "Agile Adaptability",
      text: "PACE values flexibility and adaptability to navigate the ever-changing market, ensuring sustained success through quick responsiveness and strategic adjustments.",
      icon: <AgileIcon />,
    },
    {
      heading: "Quality Commitment",
      text: "PACE is committed to maintaining the highest standards in all aspects of its business, ensuring excellence and building trust through quality products and exceptional service.",
      icon: <QualityIcon />,
    },
  ];
  return (
    <>
      <section className="aboutcards_section page-width">
        <h1>Teamwork fuels innovation and growth.</h1>
        <section className="flex flex-wrap justify-center mt-[5rem] aboutcards_section--main">
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
