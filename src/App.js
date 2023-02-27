import React, { useState } from 'react';
import './App.css';
import Card from './components/UI/Card.js';
import ExpenseForm from './components/newExpense/ExpenseForm';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import ExpenseList from './components/Expenses/ExpenseList';

const App = () => {

  const [expenses, setExpenses] = useState([
    {
      id: Math.random(),
      date: new Date(2023, 11, 10),
      title: "food",
      amount: "200.34"
    },
    {
      id: Math.random(),
      date: new Date(2023, 11, 10),
      title: "book",
      amount: "200.34"
    },
    {
      id: Math.random(),
      date: new Date(2022, 11, 10),
      title: "movie",
      amount: "200.34"
    },
    {
      id: Math.random(),
      date: new Date(2021, 11, 10),
      title: "travel",
      amount: "200.34"
    },
  ]);
  // getting expense data from expenses Form
  const liftUpExpenseDataInApp_handler = (expenseDataInApp) => {
    setExpenses((prvExpense) => {
      return [expenseDataInApp, ...prvExpense];
    })
  }

  // this is filter value
  const [filter__value, setFilter__value] = useState("all");
  const liftUpFilterValue = (selectedValue) => {
    setFilter__value(selectedValue);
  }

  // this is filterd expenses array based on filter value
  const expenses_filterByYear = () => {
    return expenses.filter((i) => {
      if (filter__value === "all") {
        return i;
      }
      else {
        return i.date.getFullYear().toString() === filter__value
      }
    })
  }

  return (
    <Card className="all_code">
      <ExpenseForm liftUpExpenseDataInApp={liftUpExpenseDataInApp_handler}></ExpenseForm>
      <Card className="expense_items">
        <ExpenseFilter selected={filter__value} liftUpValueInApp={liftUpFilterValue} />
        <ExpenseList allExpense={expenses_filterByYear} />
      </Card>
    </Card>
  );
}

export default App;
