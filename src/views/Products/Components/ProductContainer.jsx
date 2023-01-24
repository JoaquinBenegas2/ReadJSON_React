import React from 'react'

//CSS
import "./ProductContainer.css"

function ProductContainer(props) {
  return (
    <section className='products-section'>
        <h1 className='products-title'> Nuestros Productos: </h1>
        <div className='products-container'>
            {props.children}
        </div>
    </section>
  )
}

export default ProductContainer