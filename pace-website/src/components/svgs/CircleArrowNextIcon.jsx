export default function CircleArrowNextIcon({
  color = "var(--iconColor)",
  isBorder = true,
  style = null,
}) {
  return (
    <>
      <svg
        width="32"
        height="32"
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
            <rect
              x="2.66675"
              y="2.66663"
              width="26.666"
              height="26.666"
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
