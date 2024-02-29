import "./ExpenseCard.css";

const ExpenseCard = ({ title, price, date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-card">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-card__info">
        <label>{title}</label>
        <div className="expense-card__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
