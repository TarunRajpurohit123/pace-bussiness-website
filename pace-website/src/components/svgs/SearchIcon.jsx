export default function SearchIcon({
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  svgFill = "none",
  color = "var(--pure)",
  strokeWidth = "1.5",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  classNames = "searchicon",
  id = "Sicon",
  styles = null,
}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={svgFill}
        className={classNames}
        id={id}
        style={styles}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
        <path
          d="M22 22L20 20"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </svg>
    </>
  );
}
