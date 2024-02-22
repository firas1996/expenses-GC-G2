import "./ExpenseCard.css";

const ExpenseCard = ({ title, price, date }) => {
  return (
    <div className="expense-card">
      <div>
        <div>month</div>
        <div>year</div>
        <div>day</div>
      </div>
      <div className="expense-card__info">
        <label>{title}</label>
        <div className="expense-card__price">$ {price}</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
