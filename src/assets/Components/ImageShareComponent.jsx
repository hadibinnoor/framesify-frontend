/* eslint-disable react/prop-types */
import { WhatsAppShareButton } from "react-share";

const ImageShareComponent = ({ imageUrl }) => {
  const shareUrl = imageUrl; // Replace imageUrl with your base64 encoded URL

  return (
    <div>
      <WhatsAppShareButton url={shareUrl}>
        Share on WhatsApp
      </WhatsAppShareButton>
    </div>
  );
};

export default ImageShareComponent;
