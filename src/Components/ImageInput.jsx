
import React, { useState } from "react";
import     UploadSign from './Images/uploadSign.svg'
import './FormResume.css'

export default function ImageInput({onImageSelect}) {
  const [imageSrc, setImageSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const [OffUploadIcon,setOffUploadIcon]=useState(true)

  const handleImageChange = (e) => {
    setOffUploadIcon(false)
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        setShowImage(true);
        

      };
      reader.readAsDataURL(file);
    }
    onImageSelect(file);
    

  };

  // const toggleImage = () => {
  //   setShowImage(!showImage);
  //   setOffUploadIcon(!OffUploadIcon)

  // };

  const removeImage = () => {
    setImageSrc(null);
    // setShowImage(false);
    setOffUploadIcon(true);
    onImageSelect(false);

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


        
      {/* showImage && if need in future  */}

      { imageSrc && 
       
        (
          <div className="UploadedImageReview">
            <h2></h2>
            <abbr title="Uploaded image">
            <img src={imageSrc} alt="Uploaded" />
            </abbr>
            <br/>
            <button onClick={removeImage}>Remove this image</button>
          </div>
        )
      }
    </div>
  );
}

