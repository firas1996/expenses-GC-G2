import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChanger = (event) => {
    setTitle(event.target.value);
  };
  const priceChanger = (event) => {
    setPrice(event.target.value);
  };
  const dateChanger = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(title);
    setTitle("");
    setPrice("");
    setDate("");
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
            <input
              type="number"
              placeholder="Price"
              min="0"
              onChange={priceChanger}
              value={price}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={dateChanger}
              value={date}
            />
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
