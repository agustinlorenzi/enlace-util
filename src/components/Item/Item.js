import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({prod}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.foto} />
      <Card.Body>
        <Card.Title>Codigo {prod.id}</Card.Title>
        <Card.Title>{prod.categoria}</Card.Title>
        <Card.Title>Descrip. {prod.descripcion}</Card.Title>
        <Card.Title>$ {prod.precio}</Card.Title>
        <Card.Title>Card Title</Card.Title>

        <Button variant="primary">Agregar</Button>
      </Card.Body>
    </Card>            

    </div>
  )
}

export default Item      
