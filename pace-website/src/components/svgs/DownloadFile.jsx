"use client";
export default function DownloadFile({ url, fname, content }) {
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
      <button onClick={() => downloadFile(url, fname)}>{children}</button>
    </>
  );
}
