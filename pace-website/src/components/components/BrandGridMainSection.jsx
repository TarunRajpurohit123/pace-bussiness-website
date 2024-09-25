import Image from "next/image";

export default function BrandGridMainSection() {
  return (
    <>
      <section className="BrandGridMainSection page-width flex">
        <div className="BrandGridMainSection--first BrandGridMainSection--directChild">
          <div className="BrandGridMainSection__lowHeight">
            <Image
              className="brand--page--section--image"
              src="/main/brand/1.png"
              width="400"
              height="140"
              alt="kids lifestyle"
            />
          </div>
          <div className="BrandGridMainSection__highHeight mt-[4rem]">
            <Image
              className="brand--page--section--image"
              src="/main/brand/2.png"
              width="400"
              height="320"
              alt="kids lifestyle"
            />
          </div>
        </div>
        <div className="BrandGridMainSection--second BrandGridMainSection--directChild">
          <Image
            className="brand--page--section--image"
            src="/main/brand/3.png"
            width="400"
            height="500"
            alt="fashion lifestyle"
          />
        </div>
        <div className="BrandGridMainSection--third BrandGridMainSection--directChild">
          <div className="BrandGridMainSection__highHeight">
            <Image
              className="brand--page--section--image"
              src="/main/brand/4.png"
              width="400"
              height="320"
              alt="fashion lifestyle"
            />
          </div>
          <div className="BrandGridMainSection__lowHeight mt-[4rem]">
            <Image
              className="brand--page--section--image"
              src="/main/brand/5.png"
              width="400"
              height="140"
              alt="fashion lifestyle"
            />
          </div>
        </div>
      </section>
    </>
  );
}
