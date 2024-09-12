export default function CircleArrowNextIcon({
  color = "var(--iconColor)",
  isBorder = true,
  style = null,
  width = "32",
  height = "32",
}) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        style={style}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isBorder && (
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="13.333"
              stroke={color}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        )}
        <path
          d="M14.3201 20.7067L19.0134 16L14.3201 11.2933"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
