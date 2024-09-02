export default function CircleArrowPrevIcon({
  color = "var(--iconColor)",
  isBorder = true,
}) {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
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
              strokeLinecap="square"
              strokeLinejoin="square"
              fill="none"
            />
          </svg>
        )}

        <path
          d="M17.6799 20.7067L12.9866 16L17.6799 11.2933"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
