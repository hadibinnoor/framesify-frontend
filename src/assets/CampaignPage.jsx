/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import ImageTool from "./Components/ImageTool";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "./Components/LoadingComponent";

const CampaignPage = () => {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  const [textValue, setTextValue] = useState("");
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [loading, setLoading] = useState(false);

  const { user_id } = useParams();
  // const currentUrl = window.location.href;

  // console.log(data.text_field);
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

    if (data.text_field) {
      formData.append("textData", textValue);
    }

    const blobObject = dataURItoBlob(imgAfterCrop);
    // console.log(blobObject);
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
    downloadLink.download = `${data.client_title}.png`;

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

  if (!data) return <LoadingComponent />;
  return (
    <div className="">
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="w-full h-[1100px]  sm:h-[1200px] bg-gray-500 p-5 flex item-center justify-center">
          {!resultImage ? (
            <div className="absolute bg-white mt-10 p-10 flex-column justify-center h-fit rounded md:w-1/2 lg:w-1/3 border-2">
              <img src={data.frame_image} alt="Template" />
              <div className="mt-5 space-y-5">
                <h1 className="text-3xl font-bold font-sans">
                  {data.client_title}
                </h1>
                <p>
                  Create personalized posters to show your support for the
                  event.
                </p>
                <p>Upload your photo and then download or share the poster</p>
              </div>
              <form className="grid" onSubmit={handleFormSubmit}>
                {data.text_field && (
                  <input
                    type="text"
                    value={textValue}
                    onChange={handleTextChange}
                    placeholder={data.text_field}
                    className="rounded block border-2 w-full mt-10 bg-transparent justify-self-center py-1.5 pl-1 text-gray-900 
                  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center placeholder-center"
                    required
                  />
                )}
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
                  className="bg-blue-700 mt-10 text-white font-medium rounded-full
                  // text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-20"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className=" bg-white p-10 flex-column justify-center rounded md:w-1/2 lg:w-1/3 md:h-auto space-y-10">
              <img src={resultImage} alt="Result Image" />
              <div className=" mobile_flex">
                <button
                  onClick={() => downloadImage(resultImage)}
                  className="w-4/6 sm:w-1/2 text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:dark:focus:ring-gray-500 md:dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  Download
                </button>
                <button
                  onClick={refreshPage}
                  className="w-4/6 sm:w-1/2 text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center md:dark:focus:ring-gray-500 md:dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  New
                </button>

                {/* <a
                  className=" "
                  data-action="share/whatsapp/share"
                  href={`whatsapp://send?text=${data.client_title}  Link:${currentUrl}`}
                >
                  <div
                    // onClick={handleOnSubmit}
                    className="sm:w-1/2 text-white bg-[#24292F] font-medium rounded-lg text-sm px-[50px] py-2.5 text-center inline-flex items-center md:dark:focus:ring-gray-500 md:dark:hover:bg-[#050708]/30 me-2 mb-2"
                  >
                    Share
                  </div>
                </a> */}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CampaignPage;
