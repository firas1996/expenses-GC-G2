import { useState } from "react";
import "./AddExpense.css";

const AddExpense = () => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChanger = (event) => {
    // setTitle(event.target.value);
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
    console.log(userInput);
  };
  const priceChanger = (event) => {
    // setPrice(event.target.value);
    setUserInput({ ...userInput, price: event.target.value });
  };
  const dateChanger = (event) => {
    // setDate(event.target.value);
    setUserInput({ ...userInput, date: event.target.value });
  };
  const inputChanger = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
    // console.log(event);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    // setTitle("");
    // setPrice("");
    // setDate("");
    setUserInput({
      title: "",
      price: "",
      date: "",
    });
  };
  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              placeholder="Title"
              onChange={inputChanger}
              value={userInput.title}
              name="title"
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              placeholder="Price"
              min="0"
              onChange={inputChanger}
              value={userInput.price}
              name="price"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={inputChanger}
              value={userInput.date}
              name="date"
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
