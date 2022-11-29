import React from 'react'
import { Modal } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetContexts'

export default function ViewExpensesModal({show, handleClose, budgetId}) {
    const { budgets } = useBudgets()
    const budgetNames = budgets.filter(budget => budget.id === budgetId)
    const expensesName = budgetNames.map(budget => budget.name)

    console.log(budgetNames);
  return ( 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {expensesName}
        </Modal.Header>
        <Modal.Body>
          Un texto cualquiera
        </Modal.Body>
    </Modal>
  )
}
