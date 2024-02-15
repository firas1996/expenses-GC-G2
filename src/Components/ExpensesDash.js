import "./ExpensesDash.css";
import ExpenseCard from "./ExpenseCard";

const ExpensesDash = ({ expensesData }) => {
  console.log(expensesData);
  return (
    <div className="dash">
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
      <ExpenseCard />
    </div>
  );
};

export default ExpensesDash;
