import React,{useState} from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [amount,setAmount] = useState(props.amount)

  const clickHandler = ()=> {
    setAmount(100)
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={amount}
        location={props.location}
      />
  <button onClick={clickHandler}>Change expense</button>
    </Card>
  );
}

export default ExpenseItem;
