import { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import "./ExpensesDash.css";
import Filter from "./Filter";
import Chart from "./Graphe/Chart";

const ExpensesDash = ({ expensesData }) => {
  console.log(expensesData);
  const years = [
    "All",
    ...new Set(expensesData.map((item) => item.date.getFullYear()).sort()),
  ];
  console.log(years);
  const [selected, setSelected] = useState(years[0]);
  console.log(selected);
  const filtredExpenses = expensesData.filter((element) => {
    return selected == "All" ? true : element.date.getFullYear() == selected;
  });
  return (
    <div className="dash">
      <Filter data={years} setSelected={setSelected} selected={selected} />
      <Chart />
      {filtredExpenses.map((element) => {
        return (
          <ExpenseCard
            key={element.id}
            title={element.title}
            price={element.price}
            date={element.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesDash;
