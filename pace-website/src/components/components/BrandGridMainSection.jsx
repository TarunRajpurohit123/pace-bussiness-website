export default function BrandGridMainSection() {
  return (
    <>
      <section className="BrandGridMainSection page-width flex">
        <div className="BrandGridMainSection--first BrandGridMainSection--directChild">
          <div className="BrandGridMainSection__lowHeight"></div>
          <div className="BrandGridMainSection__highHeight mt-[4rem]"></div>
        </div>
        <div className="BrandGridMainSection--second BrandGridMainSection--directChild"></div>
        <div className="BrandGridMainSection--third BrandGridMainSection--directChild">
          <div className="BrandGridMainSection__highHeight"></div>
          <div className="BrandGridMainSection__lowHeight mt-[4rem]"></div>
        </div>
      </section>
    </>
  );
}
