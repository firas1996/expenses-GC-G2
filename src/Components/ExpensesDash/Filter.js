import "./Filter.css";

const Filter = ({ data, selected, setSelected }) => {
  const handelChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className="filter">
      <label>Filter by year</label>
      <select value={selected} onChange={handelChange}>
        {data.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
