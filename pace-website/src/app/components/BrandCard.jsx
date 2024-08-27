import Image from "next/image";

export default function BrandCard() {
  return (
    <>
      <section className="hbrand-card">
        <h1 className="hbrand-card--heading">Zwankee</h1>
        <p className="hbrand-card--paragraph">
          Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do usmod
          temporincididunt ut lare et dolore magna.
        </p>
        <Image src="/zwnakeeBrand.png" width="300" height="300" className="hbrandImage"/>
      </section>
    </>
  );
}
