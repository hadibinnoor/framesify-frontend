import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageForm = () => {
  const [textValue, setTextValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgAfterCrop, setImgAfterCrop] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 30,
    aspect: 4 / 3, // Set your desired aspect ratio
  });

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function () {
        setSelectedImage(reader.result);
      };
    }
  };

  const onImageCrop = (cropData) => {
    const canvas = document.createElement("canvas");
    const scaleX = selectedImage.width / cropData.width;
    const scaleY = selectedImage.height / cropData.height;
    canvas.width = cropData.width;
    canvas.height = cropData.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      selectedImage,
      cropData.x * scaleX,
      cropData.y * scaleY,
      cropData.width * scaleX,
      cropData.height * scaleY,
      0,
      0,
      cropData.width,
      cropData.height
    );

    const croppedDataURL = canvas.toDataURL("image/jpeg");
    setImgAfterCrop(croppedDataURL);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("textData", textValue);
    formData.append("imageData", imgAfterCrop);

    // Send formData to backend using fetch or your preferred method
    fetch("http://your-backend-endpoint.com", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to send data to the backend");
        }
      })
      .then((data) => {
        console.log("Data sent successfully:", data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={textValue}
        onChange={handleTextChange}
        placeholder="Enter text..."
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="imageInput"
      />
      {selectedImage && (
        <ReactCrop
          src={selectedImage}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={onImageCrop}
        />
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ImageForm;
