import React from 'react'
import "./ItemList.css";

import Item from '../Item/Item';

function ItemList({prod}) {
    console.log("esto es en itemlist " + prod)

    return (
        <div className='ordenCards'>
           
           <Item prod={prod}/>
        </div>
    )
}

export default ItemList