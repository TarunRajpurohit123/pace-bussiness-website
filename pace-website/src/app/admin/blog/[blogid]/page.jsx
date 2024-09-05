export default function BlogCreate() {
  return (
    <section className="blogs__wrapper">
      <div className="topper flex justify-between items-center">
        <div style={{ fontSize: "3rem" }}>Blog Create</div>
        <button
          className="flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
          style={{ fontSize: "1.5rem" }}
        >
          Save
        </button>
      </div>
      <div className="mt-[1rem]">
        <form>
          <div className="flex flex-col">
            <label htmlFor="blogtitle" style={{ fontSize: "1.5rem" }}>
              Blog Title
            </label>
            <input
              className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
              name="blogtitle"
              id="blogtitle"
              placeholder="Blog Title"
              style={{ fontSize: "1.3rem" }}
            />
          </div>
          <div className="flex">
            <button
              className="mt-[1rem] flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
              style={{ fontSize: "1.5rem" }}
            >
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
