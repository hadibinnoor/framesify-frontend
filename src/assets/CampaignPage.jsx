import { useState, useEffect } from "react";
import ImageTool from "./Components/ImageTool";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "./Components/LoadingComponent";
// import ImageShareComponent from "./Components/ImageShareComponent";

const CampaignPage = () => {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [loading, setLoading] = useState(false);

  const { user_id } = useParams();

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  function toggleShow() {
    setShowModel((prevState) => !prevState);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object
    const formData = new FormData();
    // Function to convert dataURI to Blob
    const dataURItoBlob = (dataURI) => {
      // if (!dataURI) {
      //   return null;
      // }

      // Split the data URI to get the data part
      const byteString = atob(dataURI.split(",")[1]);
      // Get the MIME type of the data
      const mimeType = dataURI.split(",")[0].split(":")[1].split(";")[0];

      // Create an ArrayBuffer and Uint8Array for the byte string
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);

      // Set the byte values into the ArrayBuffer
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }

      // Create a Blob from ArrayBuffer
      return new Blob([ab], { type: mimeType });
    };

    formData.append("textData", textValue);
    const blobObject = dataURItoBlob(imgAfterCrop);
    console.log(blobObject);
    formData.append("croppedImage", blobObject);

    // Send formData to backend using fetch or your preferred method
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.framesify.com/campaign/${user_id}/download`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send cropped image to the backend");
      }

      const data = await response.json();
      // console.log(data);
      const resultant = dataURItoBlob(data);
      const blobURL = URL.createObjectURL(resultant);
      setResultImage(blobURL);
      setLoading(false);
    } catch (error) {
      console.error("Error sending cropped image:", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.framesify.com/campaign/${user_id}`
      );
      setData(result.data);
    };
    fetchData();
  }, [user_id]);

  const downloadImage = (imageUrl) => {
    // Create a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;

    // Set the download attribute and filename
    downloadLink.download = "downloaded_image.png"; // Change the file name and extension as needed

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event to start the download
    downloadLink.click();

    // Clean up: remove the anchor element
    document.body.removeChild(downloadLink);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleOnSubmit = async () => {
    const image = data;
    const blob = await fetch(image).then((r) => r.blob());
    const file = new File([blob], "share.png", { type: blob.type });

    if (navigator.share) {
      await navigator
        .share({
          title: "title",
          text: "your text",
          url: "url to share",
          files: [file],
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error in sharing", error));
    } else {
      console.log("system does not support sharing files.");
    }
  };

  useEffect(() => {
    if (navigator.share === undefined) {
      if (window.location.protocol === "http:") {
        window.location.replace(
          window.location.href.replace(/^http:/, "https:")
        );
      }
    }
  }, []);

  if (!data) return <LoadingComponent />;
  return (
    <div className="">
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="w-full h-screen md:h-[975px] bg-gray-500 p-5 flex item-center justify-center">
          {!resultImage ? (
            <div className="absolute bg-white mt-10 p-10 flex-column justify-center h-fit rounded md:w-1/2 lg:w-1/3">
              <img src={data.frame_image} alt="Template" />
              <h1 className="text-3xl">{data.client_title}</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita, laudantium.
              </p>
              <form className="" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  value={textValue}
                  onChange={handleTextChange}
                  placeholder="Text"
                  className="rounded block border-2 w-full mt-10 bg-transparent justify-self-center py-1.5 pl-1 text-gray-900 
                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center placeholder-center"
                  required
                />
                <ImageTool
                  visible={showModel}
                  onClose={toggleShow}
                  id={user_id}
                  imgAfterCrop={imgAfterCrop}
                  setImgAfterCrop={setImgAfterCrop}
                  aspect_ratio={data.aspect_ratio}
                />
                <button
                  type="submit"
                  className="ml-24 mt-10
                  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 
                  focus:ring-blue-300 font-medium rounded-full
                  text-sm px-5 py-2.5 text-center me-2 mb-2 
                  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:ml-[10.7rem]"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className=" bg-white p-10 flex-column justify-center rounded md:w-1/2 lg:w-1/3 md:h-auto space-y-10">
              <img src={resultImage} alt="Result Image" />
              <div className=" download-div">
                <button
                  // className="w-5/6 p-auto text-white bg-[#3b5998] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                  onClick={() => downloadImage(resultImage)}
                  className="w-4/6 sm:w-1/2 text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:dark:focus:ring-gray-500 md:dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Download
                </button>
                <button
                  onClick={refreshPage}
                  className="w-4/6 sm:w-1/2 text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:dark:focus:ring-gray-500 md:dark:hover:bg-[#050708]/30 me-2 mb-2"

                  // className="w-5/6 p-auto text-white bg-[#3b5998] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                >
                  New
                </button>
                <button
                  onClick={handleOnSubmit}
                  // className="w-5/6 p-auto text-white bg-[#3b5998] font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
                  className="w-4/6 sm:w-1/2 text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:dark:focus:ring-gray-500 md:dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Share Image
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CampaignPage;
