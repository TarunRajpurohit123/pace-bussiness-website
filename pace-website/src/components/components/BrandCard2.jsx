export default function BrandCard2({ extraCls, width, height, imgUrl }) {
  return (
    <>
      <section className={`brand__card__2 brand__main__row--card ${extraCls}`}>
        <img src={imgUrl} width={width} height={height} />
      </section>
    </>
  );
}
