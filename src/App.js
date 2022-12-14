import Card from './components/UI/Card'
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), location:"Departmental Store"},
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) , location:"Amazon" },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), location:"Showroom"},
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), location:"Rework Furnitures"},
];
function App() {


  
  const [expenses,setExpenses] =useState(DUMMY_EXPENSES)

const addExpenseHandler = expense => {
  console.log("In App.js");
  console.log(expense)
  setExpenses((prevExpenses)=>{
    return [
      expense,...prevExpenses
    ]
  })
}

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />     
    </Card>
  );
}

export default App;
