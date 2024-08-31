export default function MessageIcon(
  width = "24",
  height = "25",
  viewBox = "0 0 24 25",
  svgFill = "none",
  color = "var(--primary-text)",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  strokeWidth = "1.5",
  strokeMiterlimit = "10",
  styles = null,
  classNames = "messageIcon",
  id = "messicon"
) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={svgFill}
        xmlns="http://www.w3.org/2000/svg"
        id={id}
        className={classNames}
        style={styles}
      >
        <path
          d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeMiterlimit={strokeMiterlimit}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <path
          d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeMiterlimit={strokeMiterlimit}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </svg>
    </>
  );
}
