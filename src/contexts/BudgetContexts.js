import React, { useContext, useState } from 'react'

const BudgetContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetContext)
}

// {
//   id,
//   nombre,      Budget
//   max,

// }

//   id,
//   IDpresupuesto,   Expenses
//   descripcion,
//   cantidad

export const BudgetProvider = ({ children }) => {
  const [budgets, setButgets] = useState([])
  const [expenses, setExpenses] = useState([])

  function getBudgetExpenses(budgetId) {
    return expenses.filter(expenses => expenses.budgetId === budgetId)
  }

  function addExpense() {

  }
  function addBudget() {

  }
  function deleteExpense() {

  }
  function deleteBudget() {

  }

  return (
      <BudgetContext.Provider value={{
          budgets,
          expenses,
          getBudgetExpenses,
          addExpense,
          addBudget,
          deleteExpense,
          deleteBudget,
      }}>
          {children}
       </BudgetContext.Provider>)
}