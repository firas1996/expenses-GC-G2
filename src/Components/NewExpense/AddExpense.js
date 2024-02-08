import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const titleChanger = (event) => {
    setTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title);
    setTitle("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title {title} </label>
            <input placeholder="Title" onChange={titleChanger} value={title} />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input type="number" placeholder="Price" min="0" />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" max="2026-12-31" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
