import SmsIcon from "@/components/svgs/SmsIcon";
import Card from "../../components/components/Card";
import ContactForm from "../../components/components/ContactForm";
import HeadIcon from "@/components/svgs/HeadIcon";
import GpsIcon from "@/components/svgs/GpsIcon";
import CallIcon from "@/components/svgs/CallIcon";
import uniqid from "uniqid";
import Hero2 from "@/components/components/Hero2";

export default function Contact() {
  const cardData = [
    {
      heading: "Chat to sales",
      text: "Speak to our friendly team",
      anchor: ["Sales@pacevltd.com", "#"],
      icon: <SmsIcon />,
    },
    {
      heading: "Chat to Support",
      text: "Speak to our Supportive team",
      anchor: ["Sales@pacevltd.com", "#"],
      icon: <HeadIcon />,
    },
    {
      heading: "Visit Us",
      text: "Visit our office HQ",
      anchor: ["View on google maps", "#"],
      icon: <GpsIcon />,
    },
    {
      heading: "Call us",
      text: "Mon - Sat from 9:30 AM to 6:30 PM",
      anchor: ["+91 55555 55555", "#"],
      icon: <CallIcon />,
    },
  ];
  return (
    <>
      <Hero2
        title="Contact Us"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
      />
      <ContactForm />
      <section className="contact_cards_section page-width c-mobile-width mt-[10rem] mb-[7.5rem] flex justify-between">
        {cardData?.map((card) => {
          return (
            <Card
              key={uniqid("contact", "card")}
              heading={card?.heading}
              text={card?.text}
              anchor={card?.anchor}
              icon={card?.icon}
            />
          );
        })}
      </section>
    </>
  );
}
