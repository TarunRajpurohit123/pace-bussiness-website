export default function Hero2({
  title = "Our Group",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
}) {
  return (
    <>
      <section className="hero__two">
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    </>
  );
}
