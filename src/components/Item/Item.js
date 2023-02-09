import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";
import { Link } from 'react-router-dom';

function Item({ prod }) {

  return (
    <div >
      <Card className="card">
        <Card.Img style={{ height: '18rem' }} variant="top" src={prod.foto} />
        <Card.Body className='cardBody'>
          <Card.Text>Codigo: {prod.id}.</Card.Text>
          <Card.Title className='nombreArticulo'>{prod.nombre}.</Card.Title>          
          <Card.Text>$ {prod.precio}</Card.Text>
          <Card.Text>Stock: {prod.stock}</Card.Text>
          <Link to={`/detalle/${prod.id}`}><Button variant="primary">Ver Más</Button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

//style={{ width: '18rem'}}

//style={{ height: '18rem' }}

export default Item      
