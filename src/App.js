import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem.js';
import Card from './components/UI/Card.js';

const App = () => {
  const expenses = [{
    id: 1,
    date: new Date(2023, 11, 12),
    item: "food",
    cost: 235.67,
    locationOfExpenditure: "KFC"
  },
  {
    id: 2,
    date: new Date(2023, 11, 12),
    item: "movie",
    cost: 260.67,
    locationOfExpenditure: "cinema hall"
  },
  {
    id: 3,
    date: new Date(2023, 11, 12),
    item: "clothes",
    cost: 235.67,
    locationOfExpenditure: "shopping mall"
  },
  {
    id: 4,
    date: new Date(2023, 11, 12),
    item: "travel",
    cost: 2355.67,
    locationOfExpenditure: "Hill Station"
  },
  {
    id: 5,
    date: new Date(2023, 11, 12),
    item: "healthh",
    cost: 1354.67,
    locationOfExpenditure: "Hospital"
  }]
  return (
    <Card className="expense_items">
      {expenses.map((expenses) => {
        return <ExpenseItem date={expenses.date} item={expenses.item} amount={expenses.cost} locationOfExpenditure={expenses.locationOfExpenditure}></ExpenseItem>
      })}
    </Card>
  );
}

export default App;
