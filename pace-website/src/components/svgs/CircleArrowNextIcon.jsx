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
          <path
            d="M16.0001 29.3333C23.3639 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63616 23.3639 2.66663 16.0001 2.66663C8.63628 2.66663 2.66675 8.63616 2.66675 16C2.66675 23.3638 8.63628 29.3333 16.0001 29.3333Z"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
