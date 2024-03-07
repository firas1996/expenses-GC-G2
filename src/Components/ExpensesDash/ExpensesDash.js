import { useState } from "react";
import ExpenseCard from "./ExpenseCard";
import "./ExpensesDash.css";
import Filter from "./Filter";
import ChartData from "./Graphe/ChartData";

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
      <ChartData />
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
