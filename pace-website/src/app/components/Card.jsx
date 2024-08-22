import Link from "next/link";

export default function Card({ heading, text, anchor, icon }) {
  return (
    <>
      <div className="contact_card">
        <div className="icon_wrap">{icon}</div>
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link href={anchor[1]}>{anchor[0]}</Link>
      </div>
    </>
  );
}
