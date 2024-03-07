import "./Chart.css";
import ProgressBar from "./ProgressBar";

const Chart = ({ data, total, max }) => {
  return (
    <div className="chart">
      {data.map((item) => {
        return (
          <ProgressBar
            key={item.month}
            month={item.month}
            value={item.value}
            total={total}
            max={max}
          />
        );
      })}
    </div>
  );
};

export default Chart;
