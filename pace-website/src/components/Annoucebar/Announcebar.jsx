import { StockInfo, TSwitcher } from "..";

export default function Announcebar() {
  return (
    <>
      <div className="announcemnet-wrapper page-width ">
        <div className="w-[100%] flex justify-between">
          <StockInfo />
          <TSwitcher />
        </div>
      </div>
    </>
  );
}
