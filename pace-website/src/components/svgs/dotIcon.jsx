export default function DotIcon({
  color = "var(--gray_400)",
  width = "8",
  height = "9",
  view = `0 0 ${width} ${height}`,
  className = "doticon--svg",
  styles = { cursor: "pointer" },
  onClick = null,
}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={view}
        fill="none"
        className={className}
        style={styles}
        onClick={onClick}
      >
        <rect
          x="0"
          y="0"
          width="8"
          height="8"
          transform="rotate(-180 4 4.5)"
          fill={color}
        />
      </svg>
    </>
  );
}
