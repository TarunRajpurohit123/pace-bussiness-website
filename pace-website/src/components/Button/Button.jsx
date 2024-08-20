export default function Button({
  classNames,
  id,
  text,
  styles,
  key,
  type = "button",
  ariaLabel,
  ...props
}) {
  return (
    <>
      <button
        aria-label={ariaLabel}
        type={type}
        key={key}
        style={styles}
        className={classNames}
        id={id}
        {...props}
      >
        {text}
      </button>
    </>
  );
}
