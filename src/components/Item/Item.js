import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css";
import { Link } from 'react-router-dom';

function Item({ prod }) {

  return (
    <div>
      <Link to={`/detalle/${prod.id}`}><Card className="card">
        <Card.Img style={{ height: '18rem' }} variant="top" src={prod.foto} />
        <Card.Body style={{ height: '19rem', margin:"1rem",paddingTop:"2rem" }} className='cardBody'>
          <Card.Text>Codigo: {prod.id}.</Card.Text>
          <Card.Title className='nombreArticulo'>{prod.nombre}</Card.Title>
          <Card.Text>$ {prod.precio}</Card.Text>
          <Card.Text>Stock: {prod.stock}</Card.Text>
          <Button variant="primary">Ver Más</Button>
        </Card.Body>
      </Card></Link>
    </div>
  )
}

export default Item      
