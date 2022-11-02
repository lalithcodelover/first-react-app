import React from 'react'

const ExpenseDetails = (props) => {
  
  function clickHandler(){
document.getElementById('head').removeChild(document.getElementById('amount'))
  }

  return (
  
    <div id="head" className="expense-item__description">
      <h2>{props.title}</h2>
      <h2>{props.location}</h2>
      <div id="amount" className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Delete expense</button>
    </div>
    
  
    );
}

export default ExpenseDetails;
