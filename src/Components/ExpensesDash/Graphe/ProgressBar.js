import "./ProgressBar.css";

const ProgressBar = ({ month, value, total, max }) => {
  const x = (value / max) * 100 + "%";
  return (
    <div className="bar">
      <div className="bar__inner">
        <div className="bar__fill" style={{ height: x }}></div>
      </div>
      <label className="bar__label">{month}</label>
    </div>
  );
};

export default ProgressBar;
