"use client";

import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
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
    feature: "image",
    name: "How to make",
    category: "Fashion",
    status: "published",
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
    feature: "image2",
    name: "How to make",
    category: "Fashion",
    status: "drafted",
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
      <DataTable columns={columns}  data={data} />
    </>
  );
}
