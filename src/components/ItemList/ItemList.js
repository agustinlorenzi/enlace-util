import React from 'react'

import Item from '../Item/Item';

function ItemList({prod}) {
    console.log("esto es en itemlist " + prod)

    return (
        <div>
           
           <Item prod={prod}/>
        </div>
    )
}

export default ItemList