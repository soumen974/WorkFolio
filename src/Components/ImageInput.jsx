
import React, { useState } from "react";
import     UploadSign from './Images/uploadSign.svg'
import './FormResume.css'

export default function ImageInput() {
  const [imageSrc, setImageSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const [OffUploadIcon,setOffUploadIcon]=useState(true)

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
    setOffUploadIcon(false)

  };

  const toggleImage = () => {
    setShowImage(!showImage);
    setOffUploadIcon(!OffUploadIcon)

  };

  const removeImage = () => {
    setImageSrc(null);
    setShowImage(false);
    setOffUploadIcon(true)

  };

  return (
    <div className="ImageInput">
      { OffUploadIcon &&

      <abbr title="Upload Here">
      <label htmlFor="image-upload">
        <img
          src={ UploadSign} 
          alt="No image Uploaded"
          // style={{ width: "48px", height: "48px", cursor: "pointer" }}
        />
      </label>

      <input
        id="image-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      </abbr>  
      
    
    
    
    }

      
      <button onClick={toggleImage}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>
      {showImage && imageSrc && (
        <div className="UploadedImageReview">
          <h2></h2>
          <abbr title="Uploaded image">
          <img src={imageSrc} alt="Uploaded" />
          </abbr>
          <button onClick={removeImage}><abbr title="Remove">X</abbr></button>
        </div>
      )}
    </div>
  );
}

