import React, { useRef } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetContexts'

export default function AddBudgetModal({ show, handleClose}) {
  const nameRef = useRef()
  const maxRef = useRef()
  const { addBudget } = useBudgets()
  function handleSubmit(e) {
    e.preventDefault()
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value)
    })
    handleClose()
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Presupuesto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId='name' className='mb-3'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control ref={ nameRef } type='text' required />
          </Form.Group>

          <Form.Group controlId='max' className='mb-3'>
            <Form.Label>Presupuesto Máximo</Form.Label>
            <Form.Control ref={ maxRef } type='number' required min={0} step={0.01} />
          </Form.Group>
          <div className='d-flex justify-content-end'>
            <Button variant='primary' type='submit' >Agregar</Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  )
}
