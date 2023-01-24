import React from 'react'

// Components
import ProductContainer from './Components/ProductContainer'
import Product from './Components/Product'

import data from "../../products.json"

function Products() {
  return (
    <ProductContainer>
        {data.map( product =>
          <Product 
            key={product.name}
            name={product.name}
            oldPrice={product.price}
            price={product.price - product.price * product.discount / 100}
            discount={product.discount}
          />
        )}
    </ProductContainer>
  )
}

export default Products