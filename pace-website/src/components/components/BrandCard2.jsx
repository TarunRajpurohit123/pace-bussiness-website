export default function BrandCard2({ extraCls, width, height, imgUrl,href }) {
  return (
    <>
      <a href={href} target="_blank" className={`brand__card__2 brand__main__row--card ${extraCls}`}>
        <img src={imgUrl} width={width} height={height} />
      </a>
    </>
  );
}
