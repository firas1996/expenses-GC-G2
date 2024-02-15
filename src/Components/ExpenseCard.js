import "./ExpenseCard.css";

const ExpenseCard = () => {
  return (
    <div className="expense-card">
      <div>date</div>
      <div className="expense-card__info">
        <label>title</label>
        <div className="expense-card__price">price</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
