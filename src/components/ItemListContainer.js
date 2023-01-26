import React from 'react'
import './ItemListContainer.css';

function ItemListContainer({greeting}) {
  return (
    <div>
        <p className='parrafo'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer