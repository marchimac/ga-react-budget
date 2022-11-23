import React from 'react'                                                                       /* Importamos React desde Node Modules */
import { Button, Card, ProgressBar, Stack } from 'react-bootstrap'                              /* Importamos clases desde Node Modules */
import { currencyFormatter } from '../utils/utils'                                              /* Importamos el nuevo objeto desde la carpeta utils */

export default function BudgetCard( {name, amount, max, gray, onAddExpenseClick} ) {            /* Creamos una función para crear las tarjetas de los presupuestos */
  const classNames = []                                                                         /* Creamos una constante como array para almacenar las clases que vamos a insertar para modificar el aspecto */
  if( amount > max ) {                                                                          /* Si la cantidad gastada es mayor que la cantidad disponible ponemos el fondo de la tarjeta en rojo */
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
              <Button variant='outline-primary' onClick={onAddExpenseClick} >Agregar gasto</Button>
              <Button variant='outline-secondary' >Ver gastos</Button>
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