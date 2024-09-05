import Datatable from "@/components/Datatable/Datatable";

export default function Blog() {
  return (
    <section className="blogs__wrapper">
      <div className="topper flex justify-between items-center">
        <div style={{ fontSize: "3rem" }}>Blogs</div>
        <button
          className="flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] w-[10rem] h-[3rem]"
          style={{ fontSize: "1.5rem" }}
        >
          Create
        </button>
      </div>
      <div className="mt-[1rem]">
        <Datatable />
      </div>
    </section>
  );
}
