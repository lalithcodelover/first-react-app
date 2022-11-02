
const ExpenseForm = ()=>{

    const addTitle = (e) =>{
         console.log(e.target.value)
    }
    const addAmount = (e) =>{
        console.log(e.target.value)
   }
   const addDate = (e) =>{
    console.log(e.target.value)
}
    return (
    <div>
        <br />
        <label >Expense Title</label>
        <input type="text" onChange={addTitle} />
        <label >Expense Amount</label>
        <input type="number" onChange={addAmount}/>
        <label >Expense Date</label>
        <input type="date"  onChange={addDate}/>
        <button>Add Expense</button>
    </div>
    )
}

export default ExpenseForm