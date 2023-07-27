// pages/uploadImage.js
import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

function UploadImage() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can use the selectedImage (image buffer) to perform your upload logic
    // For example, you can send it to the server using an API endpoint or upload it to a cloud storage service.
    console.log('Image buffer:', selectedImage);
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <Input type="file" onChange={handleImageChange} inputProps={{ accept: 'image/*' }} />
        <Button type="submit" variant="contained" style={{ backgroundColor: 'gray', color: 'white' }}>
          Upload
        </Button>
      </form>
    </div>
  );
}

export default UploadImage;
