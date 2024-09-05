import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <aside className="admin__sidebar bg-black w-[30rem] h-[100vh]">
        sidebar
      </aside>
      <div className="admin-content">
        <main>{children}</main>
      </div>
    </div>
  );
}
