
export default function Card({
  heading = null,
  text = null,
  anchor = null,
  icon = null,
  classNames = null,
  styles = null,
  wrapStyles = null,
  headingStyles = null,
  paragraphStyles = null,
}) {
  return (
    <>
      <div className={`contact_card ${classNames}`} style={styles}>
        <div className="icon_wrap" style={wrapStyles}>
          {icon}
        </div>
        <h1 style={headingStyles}>{heading}</h1>
        <p style={paragraphStyles}>{text}</p>
        {anchor ? <a target="_blank" href={anchor[1]}>{anchor[0]}</a> : <></>}
      </div>
    </>
  );
}
