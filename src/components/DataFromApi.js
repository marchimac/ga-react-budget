import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

export default function DataFromApi() {

    const [ users, setUsers ] = useState([])

    useEffect( () => {
        axios.get('https://mockend.com/mockend/demo/posts')
            .then( res => {
                setUsers(res.data)
            } )
            .catch(err => {
                console.log(err)
            })
    }, [])

  return (
    <>
        <h2>Datos desde la API</h2>
            {users.map( user => (
                <Card key={user.id}>
                    <Card.Img variant='top' src={user.cover}></Card.Img>
                    <Card.Title>{user.title}</Card.Title>
                    <Card.Body>{user.body}</Card.Body>
                </Card>
            ) )}
    </>
  )
}
