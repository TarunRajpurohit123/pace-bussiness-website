import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout w-full h-[100vh]  absolute top-[-50px] flex">
      <Sidebar />
      <div className="admin-content bg-gray-100 w-[119rem] p-[2rem] overflow-scroll">
        <main>{children}</main>
      </div>
    </div>
  );
}
