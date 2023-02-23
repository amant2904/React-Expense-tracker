import './App.css';
import ExpenseItem from './components/ExpenseItem.js';

function App() {
  const expenses = [{
    key: 1,
    date: new Date(23, 12, 2023),
    item: "food",
    cost: 235.67,
    locationOfExpenditure: "KFC"
  },
  {
    key: 2,
    date: new Date(23, 12, 2024),
    item: "movie",
    cost: 260.67,
    locationOfExpenditure: "cinema hall"
  },
  {
    key: 3,
    date: new Date(23, 9, 2021),
    item: "clothes",
    cost: 235.67,
    locationOfExpenditure: "shopping mall"
  },
  {
    key: 4,
    date: new Date(23, 12, 2023),
    item: "travel",
    cost: 2355.67,
    locationOfExpenditure: "Hill Station"
  },
  {
    key: 5,
    date: new Date(23, 12, 2023),
    item: "health",
    cost: 1354.67,
    locationOfExpenditure: "Hospital"
  }]
  return (
    <>
      {/* <ExpenseItem date={expenses[0].date} item={expenses[0].item} cost={expenses[0].cost} locationOfExpenditure={expenses[0].locationOfExpenditure} />
      <ExpenseItem date={expenses[1].date} item={expenses[1].item} cost={expenses[1].cost} locationOfExpenditure={expenses[1].locationOfExpenditure} />
      <ExpenseItem date={expenses[2].date} item={expenses[2].item} cost={expenses[2].cost} locationOfExpenditure={expenses[2].locationOfExpenditure} />
      <ExpenseItem date={expenses[3].date} item={expenses[3].item} cost={expenses[3].cost} locationOfExpenditure={expenses[3].locationOfExpenditure} />
      <ExpenseItem date={expenses[4].date} item={expenses[4].item} cost={expenses[4].cost} locationOfExpenditure={expenses[4].locationOfExpenditure} /> */}
      {expenses.map((expenses) => {
        return <ExpenseItem Key={expenses.key} date={expenses.date} item={expenses.item} cost={expenses.cost} locationOfExpenditure={expenses.locationOfExpenditure} />
      })}
    </>
  );
}

export default App;
