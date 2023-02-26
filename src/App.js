import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem.js';
import Card from './components/UI/Card.js';
import ExpenseForm from './components/newExpense/ExpenseForm';
import ExpenseFilter from './components/Expenses/ExpenseFilter';

const App = () => {

  const [expenses, setExpenses] = useState([]);
  const liftUpExpenseDataInApp_handler = (expenseDataInApp) => {
    setExpenses((prvExpense) => {
      return [expenseDataInApp, ...prvExpense];
    })
  }

  // this is filter value
  const [filter__value, setFilter__value] = useState("all");
  const liftUpFilterValue = (filterValue) => {
    setFilter__value(filterValue);
  }

  // this is filterd expenses array based on filter value
  const expenses_filterByYear = (expenses, filter__value) => {
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
        {/* this is filter mechanism using map on filtered expenses array*/}
        {expenses_filterByYear(expenses, filter__value).map((expenses) => {
          return <ExpenseItem
            key={expenses.id}
            date={expenses.date}
            item={expenses.title}
            amount={expenses.amount}
          />
        })}
      </Card>
    </Card>
  );
}
// {/* <ExpenseItem key={expenses.id} date={expenses.date} item={expenses.title} amount={expenses.amount}></ExpenseItem> */ } */}

export default App;
