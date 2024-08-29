import DownloadFile from "@/components/svgs/DownloadFile";
import DownloadIcon from "@/components/svgs/DownloadIcon";
import EyeIcon from "@/components/svgs/EyeIcon";
import Link from "next/link";

export default function ReportRow({ name, url, filename, type }) {
  return (
    <>
      <div className="reportRow">
        <p className="reportRow__name">{name}</p>
        <div className="reportRow__viewDownload">
          <Link href={url} className="flex items-center">
            <EyeIcon />
            <p className="ml-[1rem] view_report">View</p>
          </Link>
          <DownloadFile
            content={
              <div className="ml-[2.5rem] flex items-center">
                <DownloadIcon />
                <p className="ml-[1rem] download_report">Download</p>
              </div>
            }
            fname={filename}
            url={url}
          ></DownloadFile>
        </div>
      </div>
    </>
  );
}
