import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleShowImageClick = () => {
    // Show the selected image
  };

  return (
    <div>
      {/* SVG icon or any other clickable element for uploading */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
      <button onClick={handleShowImageClick}>Show Me the Image</button>
      {selectedImage && (
        <div>
          <p>Image Review:</p>
          <img src={selectedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
