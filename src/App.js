
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14), location:"Departmental Store"},
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) , location:"Amazon" },
    { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28), location:"Showroom"},
    { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), location:"Rework Furnitures"},
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
