export default function TwitterIcon(
  width = "16",
  height = "16",
  viewBox = "0 0 16 16",
  svgFill = "none",
  color = "var(--pure)",
  styles,
  classNames,
  id
) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={svgFill}
        style={styles}
        id={id}
        className={classNames}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_146_566)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.6303 15.3334L6.9307 10.0601L2.29924 15.3334H0.339844L6.06139 8.82075L0.339844 0.666687H5.37047L8.85732 5.6367L13.2262 0.666687H15.1856L9.72954 6.87767L15.6609 15.3334H10.6303ZM12.8123 13.8467H11.4932L3.14541 2.15335H4.46474L7.80808 6.83546L8.38623 7.64793L12.8123 13.8467Z"
            fill="#E7E7E7"
          />
        </g>
        <defs>
          <clipPath id="clip0_146_566">
            <rect width="16" height="16" fill={color} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}