export default function HeadIcon({
  color = "var(--red)",
  color2 = "var(--pure)",
}) {
  return (
    <>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.97997 18.49V15.57C5.97997 14.6 6.73996 13.73 7.81996 13.73C8.78996 13.73 9.65996 14.49 9.65996 15.57V18.38C9.65996 20.33 8.03995 21.95 6.08995 21.95C4.13995 21.95 2.51994 20.32 2.51994 18.38V12.22C2.40994 6.59997 6.84996 2.04999 12.47 2.04999C18.09 2.04999 22.5199 6.59999 22.5199 12.11V18.27C22.5199 20.22 20.9 21.84 18.95 21.84C17 21.84 15.38 20.22 15.38 18.27V15.46C15.38 14.49 16.14 13.62 17.22 13.62C18.19 13.62 19.06 14.38 19.06 15.46V18.49"
          stroke={color2}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.03 9.11999H15.22C15 9.11999 14.79 9.25 14.69 9.44L13.94 10.94C13.83 11.16 13.52 11.16 13.41 10.94L11.57 7.27002C11.46 7.06002 11.16 7.05001 11.05 7.26001L10.21 8.80999C10.11 8.99999 9.90997 9.11999 9.68997 9.11999H8.95996"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
