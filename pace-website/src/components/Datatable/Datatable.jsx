"use client";

import { EyeIcon, PencilIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Datatable({
  columns = null,
  data = null,
  type = "blog",
}) {
  return (
    <>
      <table className="admin__dtable bg-white w-full mt-[4rem]">
        <thead className="admin_dt__head bg-gray-600">
          <tr>
            {columns?.map((head) => {
              return (
                <th
                  className="dt__head py-[0.2rem] text-white"
                  style={{ fontSize: "1.5rem" }}
                >
                  {head}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="admin_dt__head">
          {type === "blog" &&
            data?.map((row) => {
              return (
                <tr key={row?.id}>
                  <td className="text-center py-[0.5rem] flex justify-center">
                    <Image src={row?.image} width={50} height={50} />
                  </td>
                  <td className="text-center" style={{ fontWeight: "bold" }}>
                    {row?.title}
                  </td>
                  <td className="text-center" style={{ fontWeight: "bold" }}>
                    {row?.category}
                  </td>
                  <td className="text-center" style={{ fontWeight: "bold" }}>
                    {row?.isPublished ? "Published" : "Drafted"}
                  </td>
                  <td>
                    {/* <button>
                      <EyeIcon style={{ width: "1.5rem", color: "black" }} />
                    </button>
                    <button>
                      <PencilIcon style={{ width: "1.5rem", color: "black" }} />
                    </button>
                    <button>
                      <Delet style={{ width: "1.5rem", color: "black" }} />
                    </button> */}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
