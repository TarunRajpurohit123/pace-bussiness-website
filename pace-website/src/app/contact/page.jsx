import SmsIcon from "@/components/svgs/SmsIcon";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import HeadIcon from "@/components/svgs/HeadIcon";
import GpsIcon from "@/components/svgs/GpsIcon";
import CallIcon from "@/components/svgs/CallIcon";

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
      <Hero />
      <ContactForm />
      <section className="contact_cards_section page-width mt-[10rem] mb-[7.5rem] flex justify-between">
        {cardData?.map((card) => {
          return (
            <Card
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
