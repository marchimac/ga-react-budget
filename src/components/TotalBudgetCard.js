import React from 'react'
import { useBudgets } from '../contexts/BudgetContexts'
import BudgetCard from './BudgetCard'

export default function TotalBudgetCard(props) {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
    const max = budgets.reduce((total, budget) => total + budget.max, 0)


    if ( max === 0) return null

    return (
    <BudgetCard
        gray
        amount={amount}
        name='TOTAL'
        max={max}
        hideButtons
    />
  )
}
