export default function YearBox({ year, setCurrentYear }) {
  return (
    <>
      <section
        className="yearBox"
        onClick={() => {
          setCurrentYear(year);
        }}
      >
        <p className="yearBox__year">{year ? year : ""}</p>
        <p className="yearBox__company">PACE Ventures LTD.</p>
      </section>
    </>
  );
}
