import { ShareIcon } from "..";

export default function StockInfo() {
  return (
    <div className="strockinfo-wrapper flex items-center">
      <div className="primary-text sp_label">Share price</div>
      <div className="pure-text sp_rupee">&#8377;25</div>
      <div className="sp_statics flex items-center">
        <ShareIcon />
        <span className="success-text sp_statics_text">0.40%</span>
        <span className="sp_statics_text primary-text"> - 13 Aug 1:56 PM</span>
      </div>
    </div>
  );
}
