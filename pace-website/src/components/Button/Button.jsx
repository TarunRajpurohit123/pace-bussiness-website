export default function Button({
  classNames = null,
  id = null,
  text = null,
  styles = null,
  key = null,
  type = "button",
  ariaLabel = null,
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
