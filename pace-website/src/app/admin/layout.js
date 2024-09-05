import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout absolute top-[-50px]">
      <aside className="admin__sidebar bg-black w-[20rem] h-[100vh]">
        sidebar
      </aside>
      <div className="admin-content">
        <main>{children}</main>
      </div>
    </div>
  );
}
