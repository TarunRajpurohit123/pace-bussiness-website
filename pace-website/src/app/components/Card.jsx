import Link from "next/link";

export default function Card({
  heading,
  text,
  anchor,
  icon,
  classNames,
  styles,
  wrapStyles,
  headingStyles,
  paragraphStyles,
}) {
  return (
    <>
      <div className={`contact_card ${classNames}`} style={styles}>
        <div className="icon_wrap" style={wrapStyles}>
          {icon}
        </div>
        <h1 style={headingStyles}>{heading}</h1>
        <p style={paragraphStyles}>{text}</p>
        {anchor ? <Link href={anchor[1]}>{anchor[0]}</Link> : <></>}
      </div>
    </>
  );
}
