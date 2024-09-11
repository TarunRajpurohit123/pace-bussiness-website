export default function YearBox({ year }) {
  return (
    <>
      <section className="yearBox">
        <p className="yearBox__year">{year ? year : ""}</p>
        <p className="yearBox__company">PACE Ventures LTD.</p>
      </section>
    </>
  );
}
