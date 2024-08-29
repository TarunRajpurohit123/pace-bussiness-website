import DownloadFile from "@/components/svgs/DownloadFile";
import DownloadIcon from "@/components/svgs/DownloadIcon";
import EyeIcon from "@/components/svgs/EyeIcon";

export default function ReportRow({ name, url, filename, type }) {
  return (
    <>
      <div className="reportRow">
        <p className="reportRow__name">{name}</p>
        <div className="reportRow__viewDownload">
          <Link to={url}>
            <EyeIcon />
            <p className="ml-[1rem]">View</p>
          </Link>
          <DownloadFile
            content={
              <div className="ml-[2.5rem]">
                <DownloadIcon />
                <p className="ml-[1rem]">Download</p>
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
