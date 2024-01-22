/* eslint-disable react/prop-types */
import "./LoadingComponent.scss";
const LoadingComponent2 = (props) => {
  return (
    <div className="h-screen">
      <div className="wrapper">
        <div className="box-wrap">
          <div className="box one"></div>
          <div className="box two"></div>
          <div className="box three"></div>
          <div className="box four"></div>
          <div className="box five"></div>
          <div className="box six"></div>
        </div>
      </div>
      <h1 className="font-semibold flex justify-center item-center absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {props.text}
      </h1>
    </div>
  );
};

export default LoadingComponent2;
