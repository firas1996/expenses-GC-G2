import { useState } from "react";
import ExpenseCard from "./Components/ExpenseCard";
import ExpensesDash from "./Components/ExpensesDash";
import AddExpense from "./Components/NewExpense/AddExpense";

function App() {
  const expensesData = [
    {
      id: 1,
      title: "PC",
      price: 2500,
      date: new Date(2024, 2, 14),
    },
    {
      id: 2,
      title: "TV",
      price: 1499,
      date: new Date(2023, 7, 24),
    },
    {
      id: 3,
      title: "Education",
      price: 6000,
      date: new Date(2023, 9, 15),
    },
    {
      id: 4,
      title: "Voyage",
      price: 3200,
      date: new Date(2025, 4, 1),
    },
  ];
  const [expenses, setExpenses] = useState(expensesData);
  const getData = (data) => {
    setExpenses([data, ...expenses]);
  };
  return (
    <div>
      <AddExpense getData={getData} />
      <ExpensesDash expensesData={expenses} />
    </div>
  );
}

export default App;
