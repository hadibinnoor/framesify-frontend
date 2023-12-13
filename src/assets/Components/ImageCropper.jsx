/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Cropper from "react-easy-crop";

function ImageCropper({ image, onCropDone, onCropCancel, aspect_ratio }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowSize.width <= 768;

  const styleForMobile = {
    // containerStyle: {
    //   width: "75%",
    //   height: "10rem",
    //   padding: "1rem",
    //   backgroundColor: "#fff",
    // },
    containerStyle: {
      position: "absolute",
      top: "100px",
      width: "calc(100% - 2px)",
      height: window.innerWidth,
      overflow: "hidden",
      border: "1px solid black",
      backgroundColor: "#fff",
    },
    // mediaStyle: { height: "100%", display: "block" },
    cropAreaStyle: {
      position: "absolute",
      border: "1px solid black",
      width: "100%",
      height: "100%",
    },
  };

  const styleForDesktop = {
    containerStyle: {
      position: "absolute",
      top: "15%",
      left: "30%",
      width: "40%",
      height: "50vh",
      overflow: "hidden",
      border: "1px solid black",
      backgroundColor: "#fff",
    },
    cropAreaStyle: {
      border: "1px solid black",
      width: "100%", // Take the full width of the container
      height: "100%", // Take the full height of the container
    },
  };

  const style = isMobile ? styleForMobile : styleForDesktop;

  const onCropComplete = (_croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm">
      <div className="md:space-y-80">
        <Cropper
          image={image}
          aspect={aspect_ratio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={style}
        />
        <div className="mt-48 relative flex justify-center items-center space-x-10">
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            onClick={onCropCancel}
          >
            Cancel
          </button>

          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            onClick={() => {
              onCropDone(croppedArea);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropper;
