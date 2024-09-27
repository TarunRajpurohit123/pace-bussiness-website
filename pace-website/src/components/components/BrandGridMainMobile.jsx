import Image from "next/image";

export default function BrandGridMainMobile() {
  return (
    <>
      <section className="BrandGridMainSection--mobile">
        <Image
          src="/brand-mobile-grid.png"
          width={375}
          height={500}
          alt="image"
        />
      </section>
    </>
  );
}
