import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets, UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContexts'

export default function AddExpenseModal({ show, handleClose, defaultBudgetId}) {
  const descriptionRef = useRef()
  const amountRef = useRef()
  const budgetIdRef = useRef()
  const { addExpense, budgets } = useBudgets()

  function handleSubmit(e) {
    e.preventDefault()
    addExpense({
      description: descriptionRef.current.value,
      amount: parseFloat(amountRef.current.value),
      budgetId: budgetIdRef.current.value
    })
    handleClose()
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Gasto</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form.Group controlId='description' className='mb-3'>
            <Form.Label>Descripción</Form.Label>
            <Form.Control ref={ descriptionRef } type='text' required />
          </Form.Group>

          <Form.Group controlId='amount' className='mb-3'>
            <Form.Label>Monto</Form.Label>
            <Form.Control ref={ amountRef } type='number' required min={0} step={0.01} />
          </Form.Group>

          <Form.Group controlId='budgetId' className='mb-2' >
            <Form.Label>Presupuesto</Form.Label>
            <Form.Select
              defaultValue={ defaultBudgetId }
              ref={ budgetIdRef }
            >
              <option id={ UNCATEGORIZED_BUDGET_ID } value={0}>{ UNCATEGORIZED_BUDGET_ID}</option>
              { budgets.map( budget => (
                <option key={ budget.id } value={ budget.id } >{ budget.name }</option>
              ) ) }
            </Form.Select>
          </Form.Group>

          <div className='d-flex justify-content-end'>
            <Button variant='primary' type='submit' >Agregar</Button>
          </div>
          
        </Modal.Body>

      </Form>
    </Modal>
  )
}
