
import React, { useState } from "react";

function ImageInput() {
  const [imageSrc, setImageSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setShowImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  const removeImage = () => {
    setImageSrc(null);
    setShowImage(false);
  };

  return (
    <div>
      <label htmlFor="image-upload">
        <img
          src="/upload-icon.svg" // Replace with the path to your SVG icon
          alt="Upload Icon"
          style={{ width: "48px", height: "48px", cursor: "pointer" }}
        />
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <button onClick={toggleImage}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>
      {showImage && imageSrc && (
        <div>
          <h2>Uploaded Image</h2>
          <img src={imageSrc} alt="Uploaded" />
          <button onClick={removeImage}>Remove Image</button>
        </div>
      )}
    </div>
  );
}

export default ImageInput;
