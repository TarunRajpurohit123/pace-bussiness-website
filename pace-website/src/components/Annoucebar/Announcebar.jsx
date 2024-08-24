import { StockInfo, TSwitcher } from "..";

export default function Announcebar() {
  return (
    <>
      <div className="announcemnet-wrapper page-width ">
        <div className="w-[100%] annoucement-inner flex justify-between">
          <StockInfo />
          <div className="annoucement_theme_switcher">
            <TSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}
