export default function BlankLinkIcon({ className, color = "var(--pure)" }) {
  return (
    <>
      <svg
        className={className}
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_575_1354)">
          <g filter="url(#filter0_b_575_1354)">
            <rect
              width="44"
              height="44"
              rx="22"
              fill={"#F9F9F9"}
              fillOpacity="0.1"
            />
            <rect
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke={color}
            />
          </g>
          <path
            d="M16.0188 28.0105L27.9194 16.1099"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4556 15.9896L28.0399 15.9896L28.0399 24.5739"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_575_1354"
            x="-6"
            y="-6"
            width="56"
            height="56"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_575_1354"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_575_1354"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_575_1354">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
