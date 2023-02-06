import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";

function Item({ prod }) {

  return (
    <div className="card">
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }} variant="top" src={prod.foto} />
        <Card.Body>
          <Card.Text>Codigo: {prod.id}.</Card.Text>
          <Card.Title>{prod.nombre}.</Card.Title>
          <Card.Text>Descripción: {prod.descripcion}</Card.Text>
          <Card.Text>$ {prod.precio}</Card.Text>
          <Card.Text>Stock: {prod.stock}</Card.Text>
          <Button variant="primary">Ver Más</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item      
