export default function Button({ classNames, id, text, clickFn, styles, key }) {
  return (
    <>
      <button
        key={key}
        style={styles}
        className={classNames}
        id={id}
        onClick={(e) => {
          clickFn(e);
        }}
      >
        {text}
      </button>
    </>
  );
}
