import React from 'react'
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from '../utils/utils'

export default function BudgetCard( {name, amount, max, gray} ) {
  const classNames = []
  if( amount > max ) {
    classNames.push('bg-danger', 'bg-opacity-10')
  } else if (gray) {
    classNames.push('bg-light')
  }

  return (
    <Card className={classNames.join(' ')}>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>{name}</div>
                <div className='d-flex align-items-baseline'>
                  {currencyFormatter.format(amount)} / <span className='text-muted fs-6 ms-1'>{currencyFormatter.format(max)}</span>
                  </div>
            </Card.Title>
            <ProgressBar
              className='rounded-pill'
              variant={getBarVariant(amount, max)}
              min={0}
              max={max}
              now={amount}
            />
            <Stack direction='horizontal' gap='2' className='mt-4 justify-content-between'>
              <Button variant='outline-primary' >Agregar Gasto</Button>
              <Button variant='outline-secondary' >Ver Gasto</Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

function getBarVariant(amount, max) {
  const ratio = amount/max
  if( ratio < 0.5 ) return 'primary'
  if( ratio < 0.75 ) return 'warning'
  return 'danger'
}