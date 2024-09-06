import { EyeIcon, LinkIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function FileManager() {
  return (
    <section className="blogs__wrapper">
      <div className="topper flex justify-between items-center">
        <div style={{ fontSize: "3rem" }}>File Manager</div>
        <button
          href="/admin/blog/123"
          className="flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
          style={{ fontSize: "1.5rem" }}
        >
          Upload
        </button>
      </div>

      <div className="mt-[4rem]">
        {/* media main row */}
        <div className="mediarow flex justify-between items-center border p-[0.3rem]">
          <div className="mediaMeta flex items-center">
            {"image" === "image" && (
              <Image
                className="border"
                src="/ostilos__hovesr.png"
                width={50}
                height={50}
              />
            )}
            <div className="ml-[1rem] flex flex-col">
              <span className=" font-bold text-2xl">Ostilos_Hover</span>
              <span className="text-xl text-gray-500">
                10:55 PM September 2024
              </span>
            </div>
          </div>

          <div className="mediaactions">
            <button>
              <LinkIcon style={{ color: "black", width: "1.5rem" }} />
            </button>
            <button className="ml-[1rem]">
              <EyeIcon style={{ color: "black", width: "1.5rem" }} />
            </button>
            <button className="ml-[1rem]">
              <TrashIcon style={{ color: "black", width: "1.5rem" }} />
            </button>
          </div>
        </div>
        {/* media main row end*/}
      </div>
    </section>
  );
}
