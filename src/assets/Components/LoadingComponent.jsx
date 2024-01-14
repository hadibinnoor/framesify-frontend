/* eslint-disable react/prop-types */
import "./LoadingComponent.scss";
const LoadingComponent2 = (props) => {
  return (
    <div className="wrapper">
      <div className="box-wrap">
        <div className="box one"></div>
        <div className="box two"></div>
        <div className="box three"></div>
        <div className="box four"></div>
        <div className="box five"></div>
        <div className="box six"></div>
      </div>
      <h1 className="font-semibold">{props.text}</h1>
    </div>
  );
};

export default LoadingComponent2;
