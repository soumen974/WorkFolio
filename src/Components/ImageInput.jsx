
import React, { useState } from "react";
import     UploadSign from './Images/uploadSign.svg'
import './FormResume.css'

export default function ImageInput({ onImageSelect }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const [OffUploadIcon,setOffUploadIcon]=useState(true)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        onImageSelect(imageData); // Pass the selected image back to the parent component
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
    // setShowImage(false);
    setOffUploadIcon(true)

  };

  return (
    <div className="ImageInput">
      { OffUploadIcon &&

      <abbr title="Upload Here">
      <label htmlFor="image-upload">
        <img
          src={ UploadSign} 
          alt="No image Uploasded"
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


        
      
      {showImage && imageSrc && (
        <div className="UploadedImageReview">
          <h2></h2>
          <abbr title="Uploaded image">
          <img src={imageSrc} alt="Uploaded" />
          </abbr>
          <br/>
          <button onClick={removeImage}>Remove this image</button>
        </div>
      )}
    </div>
  );
}

