"use client";

import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

export default function MediaUploader() {
  function getImageFileObject(imageFile) {
    console.log({ imageFile });
  }

  function runAfterImageDelete(file) {
    console.log({ file });
  }

  return (
    <ImageUploader
      style={{ border: "2px solid black" }}
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
  );
}
