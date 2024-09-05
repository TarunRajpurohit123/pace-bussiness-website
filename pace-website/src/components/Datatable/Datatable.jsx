"use client";

import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Feature Image",
    selector: (row) => row.feature,
  },
  {
    name: "Blog Name",
    selector: (row) => row.name,
  },
  {
    name: "Category",
    selector: (row) => row.category,
  },
  {
    name: "Status",
    selector: (row) => row.status,
  },
  {
    name: "Actions",
    selector: (row) => row.actions,
  },
];
const data = [
  {
    id: 1,
    feature: (
      <Image
        src="/ostilosBrand.png"
        width={50}
        height={50}
        style={{ width: "5rem", height: "5rem" }}
      />
    ),
    name: "How to make",
    category: "Fashion",
    status: (
      <div className="flex items-center">
        <input type="checkbox" checked />
        <span className="ml-[1rem]">Published</span>
      </div>
    ),
    actions: (
      <div className="flex items-center">
        <button>
          <EyeIcon style={{ color: "black", width: "2rem" }} />
        </button>
        <button className="ml-[0.5rem]">
          <PencilIcon style={{ color: "red", width: "2rem" }} />
        </button>
        <button className="ml-[0.5rem]">
          <TrashIcon style={{ color: "green", width: "2rem" }} />
        </button>
      </div>
    ),
  },
  {
    id: 2,
    feature: (
      <Image
        src="/ostilosBrand.png"
        width={50}
        height={50}
        style={{ width: "5rem", height: "5rem" }}
      />
    ),
    name: "How to make",
    category: "Fashion",
    status: (
      <div className="flex items-center">
        <input type="checkbox" />
        <span className="ml-[1rem]">Drafted</span>
      </div>
    ),
    actions: (
      <div className="flex items-center">
        <button>
          <EyeIcon style={{ color: "black", width: "2rem" }} />
        </button>
        <button className="ml-[0.5rem]">
          <PencilIcon style={{ color: "red", width: "2rem" }} />
        </button>
        <button className="ml-[0.5rem]">
          <TrashIcon style={{ color: "green", width: "2rem" }} />
        </button>
      </div>
    ),
  },
];

export default function Datatable() {
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
