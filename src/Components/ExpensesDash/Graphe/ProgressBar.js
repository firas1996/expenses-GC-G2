import "./ProgressBar.css";

const ProgressBar = ({ month, value }) => {
  return (
    <div className="bar">
      <div className="bar__inner">
        <div className="bar__fill"></div>
      </div>
      <label className="bar__label">{month}</label>
    </div>
  );
};

export default ProgressBar;
