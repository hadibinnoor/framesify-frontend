/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import ImageTool from "./Components/ImageTool";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "./Components/LoadingComponent";
import ErrorPage from "./ErrorPage";

const CampaignPage = () => {
  const [showModel, setShowModel] = useState(false);
  const [data, setData] = useState(null);
  const [textValues, setTextValues] = useState([]);
  const [imgAfterCrop, setImgAfterCrop] = useState("");
  const [resultImage, setResultImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidUser, setIsValidUser] = useState(true);

  const { user_id } = useParams();

  const handleInputChange = (event, index) => {
    const newValues = [...textValues];
    newValues[index] = event.target.value;
    setTextValues(newValues);
  };

  function toggleShow() {
    setShowModel((prevState) => !prevState);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://api.framesify.com/campaign/${user_id}`
        );
        if (result.data.frame_image === "Error") {
          setIsValidUser(false);
        } else {
          setData(result.data);
          setTextValues(
            result.data.text_field
              ? new Array(result.data.text_field.length).fill("")
              : []
          );
          setIsValidUser(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setIsValidUser(false);
      }
    };
    fetchData();
  }, [user_id]);

  const DynamicTextFields =
    data && data.text_field
      ? data.text_field.map((item, index) => (
          <input
            key={index}
            type="text"
            value={textValues[index]}
            onChange={(event) => handleInputChange(event, index)}
            placeholder={item}
            className="rounded block border-2 w-full mt-5 bg-transparent justify-self-center py-1.5 pl-1 text-gray-900 
            placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-center placeholder-center"
            required
          />
        ))
      : null;

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
      formData.append("textData", textValues);
    }

    const blobObject = dataURItoBlob(imgAfterCrop);
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
      const resultant = dataURItoBlob(data);
      const blobURL = URL.createObjectURL(resultant);
      setResultImage(blobURL);
      setLoading(false);
    } catch (error) {
      console.error("Error sending cropped image:", error);
      setIsValidUser(false);
    }
  };

  const downloadImage = (imageUrl) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = `${data.client_title}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  if (!isValidUser) return <ErrorPage />;
  if (!data) return <LoadingComponent />;
  return (
    <div className="">
      {loading ? (
        <LoadingComponent text='"Your partner for pre and post event promotions"' />
      ) : (
        <div className="w-full h-[1100px]  sm:h-[1200px] bg-gray-500 flex item-center justify-center">
          {!resultImage ? (
            <div className="absolute bg-white mt-10 p-10 flex-col justify-center h-fit rounded md:w-1/2 lg:w-1/3 border-2">
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
                {DynamicTextFields}
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
                  className="bg-blue-700 mt-10 text-white font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-20"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className=" bg-white p-10 mt-10 flex-col justify-center rounded md:w-1/2 lg:w-1/3 h-fit space-y-10 border-2">
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
