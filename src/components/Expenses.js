import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map((value) => {
        return (
          <ExpenseItem
            title={value.title}
            amount={value.amount}
            date={value.date}
            location={value.location}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default Expenses;