import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState();
  const [enteredAmount, setAmount] = useState();
  const [enteredDate, setDate] = useState();

  const addTitle = (e) => {
    setTitle(e.target.value);
  };
  const addAmount = (e) => {
    setAmount(e.target.value);
  };
  const addDate = (e) => {
    setDate(e.target.value);
  };

  const addExpenseOnScreen = (event) => {
    event.preventDefault();
    const expenseData = {
        enteredTitle,
        enteredAmount,
        enteredDate,
      };
    console.log(expenseData);
  };

  return (
    <form onSubmit={addExpenseOnScreen}>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={addTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={addAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={addDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
