import React from 'react'
import { Card } from 'react-bootstrap'
import { curencyFormatter } from '../utils/utils'

export default function BudgetCard( {name, amount, max} ) {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                <div>{name}</div>
                <div>{curencyFormatter.format(amount)} / {curencyFormatter.format(max)}</div>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}
