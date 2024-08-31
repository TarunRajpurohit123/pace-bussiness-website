export default function Hero({
  className = "",
  title = "Contact Us",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore.",
}) {
  return (
    <>
      <section className={className}>
        <section className="pages_hero  page-width h-[45rem] overflow-hidden">
          <div
            className={` flex justify-center items-center`}
            style={{ height: "45rem" }}
          >
            {/* left */}
            <div className="pages_hero--left">
              <h1 className={`text-center`}>{title}</h1>
              <p className={`text-center w-[53.5rem] mt-[1.5rem]`}>{content}</p>
            </div>
            {/* right */}
          </div>
        </section>
      </section>
    </>
  );
}
