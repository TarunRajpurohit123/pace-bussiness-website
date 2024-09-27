export default function Button({
  classNames = null,
  id = null,
  text = null,
  styles = null,
  key = null,
  type = "button",
  onClick = () => {},
  ...props
}) {
  return (
    <>
      <button
        type={type}
        key={key}
        style={styles}
        className={classNames}
        id={id}
        {...props}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
