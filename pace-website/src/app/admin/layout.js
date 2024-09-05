import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout w-full h-[100vh]  absolute top-[-50px] flex">
      <aside className="admin__sidebar bg-black w-[20rem] h-[100vh]">
        sidebar
      </aside>
      <div className="admin-content bg-white w-[119rem]">
        <main>{children}</main>
      </div>
    </div>
  );
}
