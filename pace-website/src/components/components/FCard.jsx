export default function FCard({
  month = null,
  year = null,
  name = null,
  time = null,
  style = null,
  className
}) {
  return (
    <>
      <div className={`financialCalenderCard ${className}`} style={style}>
        <p className="monthname">{month}</p>
        <p className="year">{year}</p>
        <div className="fc__main">
          <p className="fc__main__name">{name}</p>
          <p className="fc__main__time">{time}</p>
        </div>
      </div>
    </>
  );
}
