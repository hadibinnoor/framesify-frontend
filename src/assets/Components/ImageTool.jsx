/* eslint-disable react/prop-types */
import { useState } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";

const ImageTool = (props) => {
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imageName, setImageName] = useState("");

  // Invoked when new image file is selected
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");

      props.setImgAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <div>
      <div className="">
        {currentPage === "choose-img" ? (
          <FileInput
            setImage={setImage}
            onImageSelected={onImageSelected}
            imageName={setImageName}
          />
        ) : currentPage === "crop-img" ? (
          <ImageCropper
            image={image}
            onCropDone={onCropDone}
            onCropCancel={onCropCancel}
            aspect_ratio={props.aspect_ratio}
          />
        ) : (
          // <div className="flex-column items-center">
          //   <div>
          //     <img src={props.imgAfterCrop} className="w-48 h-48" />
          //   </div>
          //   <div className="flex space-x-10">
          //     <button
          //       onClick={() => {
          //         setCurrentPage("crop-img");
          //       }}
          //       className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          //     >
          //       Crop
          //     </button>
          //     <button
          //       onClick={() => {
          //         setCurrentPage("choose-img");
          //         setImage("");
          //       }}
          //       className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          //     >
          //       New Image
          //     </button>
          //   </div>
          // </div>
          <div
            className="rounded block border-2 w-full bg-transparent mt-5 p-1.5 justify-self-center text-gray-900 
          placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center placeholder-center"
          >
            {imageName}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageTool;
