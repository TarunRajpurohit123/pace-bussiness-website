import SmsIcon from "@/components/svgs/SmsIcon";
import Card from "../../components/components/Card";
import ContactForm from "../../components/components/ContactForm";
import HeadIcon from "@/components/svgs/HeadIcon";
import GpsIcon from "@/components/svgs/GpsIcon";
import CallIcon from "@/components/svgs/CallIcon";
import uniqid from "uniqid";
import Hero2 from "@/components/components/Hero2";
import PageOcc from "@/components/PageOcc";

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
      anchor: [
        "View on google maps",
        "https://www.google.com/maps/search/SUMEL+BUSINESS+PARK-6,+C-423,+11,+Shahibag,+Ahmedabad,+Gujarat+380004/@23.029322,72.5902398,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D",
      ],
      icon: <GpsIcon />,
    },
    {
      heading: "Call us",
      text: "Mon-Sat: 9:30 AM - 6:30 PM",
      anchor: ["+91 95120 14210", "tel:+919512014210"],
      icon: <CallIcon />,
    },
  ];
  return (
    <>
      <PageOcc />
      <Hero2
        title="Connect with us"
        // content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
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
