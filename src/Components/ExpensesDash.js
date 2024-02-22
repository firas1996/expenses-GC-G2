import "./ExpensesDash.css";
import ExpenseCard from "./ExpenseCard";

const ExpensesDash = ({ expensesData }) => {
  console.log(expensesData);

  return (
    <div className="dash">
      {expensesData.map((element) => {
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
