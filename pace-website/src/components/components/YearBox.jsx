export default function YearBox({
  year = null,
  setCurrentYear = null,
  style = {},
}) {
  return (
    <>
      <section
        className="yearBox"
        onClick={() => {
          setCurrentYear(year);
        }}
        style={style}
      >
        <p className="yearBox__year" style={style}>
          {year ? year : ""}
        </p>
        <p className="yearBox__company" style={style}>
          PACE Ventures LTD.
        </p>
      </section>
    </>
  );
}
