import MediaUploader from "@/components/MediaUploader";
import RTE from "@/components/RTE";

export default function ReportEdit() {
  return (
    <section className="blogs__wrapper">
      <div className="topper flex justify-between items-center">
        <div style={{ fontSize: "3rem" }}>Report Update</div>
        <button
          className="flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
          style={{ fontSize: "1.5rem" }}
        >
          Update
        </button>
      </div>
      <div className="mt-[1rem]">
        <form>
          <div className="flex mt-[1rem]">
            <div>
              <label htmlFor="isyear" style={{ fontSize: "1.5rem" }}>
                IsYear
              </label>
              <input
                type="checkbox"
                className="outline-1 border ml-[0.5rem]"
                name="isyear"
                id="isyear"
                style={{ fontSize: "1.3rem" }}
              />
            </div>
            <div className="ml-[1rem]">
              <label htmlFor="isyear" style={{ fontSize: "1.5rem" }}>
                IsSubcategory
              </label>
              <input
                type="checkbox"
                className="outline-1 border ml-[0.5rem]"
                name="isyear"
                id="isyear"
                style={{ fontSize: "1.3rem" }}
              />
            </div>
          </div>
          <div className=" mt-[1rem] bg-white p-[1rem] border">
            <div className="flex justify-between">
              <div className="w-[49%]">
                <label htmlFor="reportyear" style={{ fontSize: "1.5rem" }}>
                  Year
                </label>
                <input
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="reportyear"
                  id="reportyear"
                  placeholder="Report Year"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
              <div className="w-[49%]">
                <label
                  htmlFor="reportyearcontent"
                  style={{ fontSize: "1.5rem" }}
                >
                  Report Year Content
                </label>
                <input
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="reportyearcontent"
                  id="reportyearcontent"
                  placeholder="Report Year Content"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="mt-[1rem] flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
                style={{ fontSize: "1.5rem" }}
              >
                Add New Year
              </button>
            </div>
          </div>
          <div className=" mt-[1rem] bg-white p-[1rem] border">
            <div className="flex justify-between">
              <div className="w-[33%]">
                <label htmlFor="reportsubcate" style={{ fontSize: "1.5rem" }}>
                  Sub Categories
                </label>
                <input
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="reportsubcate"
                  id="reportsubcate"
                  placeholder="Sub Category"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
              <div className="w-[33%]">
                <label
                  htmlFor="reportsubcatepriority"
                  style={{ fontSize: "1.5rem" }}
                >
                  Priority
                </label>
                <input
                  type="number"
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="reportsubcatepriority"
                  id="reportsubcatepriority"
                  placeholder="Report Subcategory Priority"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
              <div className="w-[33%]">
                <label
                  htmlFor="reportsubcateyear"
                  style={{ fontSize: "1.5rem" }}
                >
                  Connect Year
                </label>
                <input
                  type="number"
                  className="w-full mt-[0.5rem] p-[1rem] outline-1 border"
                  name="reportsubcateyear"
                  id="reportsubcateyear"
                  placeholder="Connect Year"
                  style={{ fontSize: "1.3rem" }}
                />
              </div>
            </div>
            <div className="flex border mt-[1rem]">
              <button type="button" className="underline p-[1rem]">
                Select Files From File Manager
              </button>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="mt-[1rem] flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
                style={{ fontSize: "1.5rem" }}
              >
                Add New Subcategory
              </button>
            </div>
          </div>
          <div className="flex mt-[5rem]">
            <button
              className="mt-[1rem] flex justify-center items-center bg-black text-white px-[1rem] py-[0.2rem] min-w-[10rem] h-[3rem]"
              style={{ fontSize: "1.5rem" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
