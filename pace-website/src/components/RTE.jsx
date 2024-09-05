"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Snow theme
import "react-quill/dist/quill.bubble.css"; // Import Bubble theme

export default function Editor({ placeholder = "" }) {
  const [editorHtml, setEditorHtml] = useState("");
  const [theme, setTheme] = useState("snow");

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handleThemeChange = (event) => {
    let newTheme = event.target.value;
    if (newTheme === "core") newTheme = null;
    setTheme(newTheme);
  };

  return (
    <div className="mt-[0.5rem] h-[18rem] bg-white">
      <ReactQuill
        style={{ background: "white", height: "100%" }}
        theme={theme}
        onChange={handleChange}
        value={editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={".app"}
        placeholder={placeholder}
      />
    </div>
  );
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

/*
 * PropType validation
 */
Editor.propTypes = {
  placeholder: PropTypes.string,
};
