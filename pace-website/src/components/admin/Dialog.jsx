"use client";

export default function Dialog({ title = "", content = "", isDialog = false }) {
  return (
    <>
      <section
        className="admin__dialog flex justify-center items-center"
        style={isDialog ? { display: "flex" } : { display: "none" }}
      >
        <div className="adm__dialog__inner bg-[white] w-[50%] p-[1rem]">
          <div className="flex justify-center text-black text-[2rem]">
            {title}
          </div>
          <div className="mt-[1rem]">{content}</div>
        </div>
      </section>
    </>
  );
}
