import MediaUploader from "@/components/MediaUploader";
import RTE from "@/components/RTE";

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
          <div className="flex flex-col items-center">
            <MediaUploader key={13131} />
          </div>
          <div className="flex flex-col mt-[1rem]">
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
          <div className="flex justify-between mt-[1rem]">
            <div className="w-[31%]">
              <label htmlFor="blogcategory" style={{ fontSize: "1.5rem" }}>
                Blog Category
              </label>
              <input
                className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                name="blogcategory"
                id="blogcategory"
                placeholder="Blog Category"
                style={{ fontSize: "1.3rem" }}
              />
            </div>
            <div className="w-[31%]">
              <label htmlFor="blogtag" style={{ fontSize: "1.5rem" }}>
                Tags
              </label>
              <input
                className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                name="blogtag"
                id="blogtag"
                placeholder="Blog Tags"
                style={{ fontSize: "1.3rem" }}
              />
            </div>
            <div className="w-[31%]">
              <label htmlFor="blogauthor" style={{ fontSize: "1.5rem" }}>
                Author
              </label>
              <input
                className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                name="blogauthor"
                id="blogauthor"
                placeholder="eg. Tarun Singh"
                style={{ fontSize: "1.3rem" }}
              />
            </div>
          </div>
          <div className="mt-[1rem]">
            <label htmlFor="contentrte" style={{ fontSize: "1.5rem" }}>
              Content
            </label>
            <RTE />
          </div>
          <div className="flex mt-[5rem]">
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
