export default function FinancialReport() {
  return (
    <section className="financial-report__wrapper">
      <div className="topper flex justify-between items-center">
        <div style={{ fontSize: "3rem" }}>Financial Report Main Category</div>
        <button
          className="flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
          style={{ fontSize: "1.5rem" }}
        >
          Create Category
        </button>
      </div>
    </section>
  );
}
