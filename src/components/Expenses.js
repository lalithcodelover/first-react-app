import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
