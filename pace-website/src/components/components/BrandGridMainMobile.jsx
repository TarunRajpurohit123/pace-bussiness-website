import Image from "next/image";

export default function BrandGridMainMobile() {
  return (
    <>
      <section className="BrandGridMainSection--mobile">
        <Image
          src="/main/brand/dummy.jpg"
          width={1000}
          height={667}
          alt="image"
        />
      </section>
    </>
  );
}
