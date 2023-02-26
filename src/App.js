import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem.js';
import Card from './components/UI/Card.js';
import ExpenseForm from './components/newExpense/ExpenseForm';

const App = () => {

  const [expenses, setExpenses] = useState([]);
  const liftUpExpenseDataInApp_handler = (expenseDataInApp) => {
    setExpenses([...expenses, expenseDataInApp])
  }

  return (
    <Card className="all_code">
      <ExpenseForm liftUpExpenseDataInApp={liftUpExpenseDataInApp_handler}></ExpenseForm>
      <Card className="expense_items">
        {expenses.map((expenses) => {
          return <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount}></ExpenseItem>
        })}
      </Card>
    </Card>
  );
}

export default App;
