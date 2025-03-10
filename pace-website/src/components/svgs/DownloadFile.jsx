"use client";
export default function DownloadFile({
  url = null,
  fname = null,
  content = null,
  className=""
}) {
  const downloadFile = (url, fileName) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <>
      <button className={className} onClick={() => downloadFile(url, fname)}>{content}</button>
    </>
  );
}
