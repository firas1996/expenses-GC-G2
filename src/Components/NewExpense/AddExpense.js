import { useState } from "react";
import "./AddExpense.css";
import NewExpensesForm from "./NewExpensesForm";

const AddExpense = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="new-expense">
      {isOpen ? (
        <NewExpensesForm handelOpen={handelOpen} />
      ) : (
        <button onClick={handelOpen}>Add New Expense</button>
      )}
    </div>
  );
};

export default AddExpense;
