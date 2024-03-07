import "./Chart.css";
import ProgressBar from "./ProgressBar";

const Chart = ({ data }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return <ProgressBar month={item.month} value={item.value} />;
      })}
    </div>
  );
};

export default Chart;
