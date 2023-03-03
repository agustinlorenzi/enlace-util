import React from 'react'
import Item from '../Item/Item';
import "./ItemList.css";

function ItemList({prod}) {

    return (
        <div className='ordenCards'>           
           <Item prod={prod}/>
        </div>
    )
}

export default ItemList