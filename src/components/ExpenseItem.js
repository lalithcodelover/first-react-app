import './ExpenseItem.css'

function ExpenseItem() {
  const expenseDate = new Date(2022,11,23);
  const expenseTitle = "Car insurance";
  const expenseLocation = "Showroom";
  const expenseAmount = 294.95;
  
  return (
    <div className='expense-item'>
     <div>{expenseDate.toISOString()}</div>
     <div className='expense-item__description'>
      <h2>{expenseTitle}</h2>
      <h2>{expenseLocation}</h2>
      <div className='expense-item__price'>${expenseAmount}</div>
     </div>
    </div>
  );
}

export default ExpenseItem;
