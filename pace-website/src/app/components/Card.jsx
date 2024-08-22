import Link from "next/link";

export default function Card({
  heading,
  text,
  anchor,
  icon,
  classNames,
  styles,
}) {
  return (
    <>
      <div className={`contact_card ${classNames}`} style={styles}>
        <div className="icon_wrap">{icon}</div>
        <h1>{heading}</h1>
        <p>{text}</p>
        {anchor ? <Link href={anchor[1]}>{anchor[0]}</Link> : <></>}
      </div>
    </>
  );
}
