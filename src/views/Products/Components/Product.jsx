import React from "react"

//CSS
import "./Product.css"

//COMPONENTS
import AddCartBtn from "./AddCartBtn"
import Discount from "./Discount"
import Heart from './Heart'


function Product ({discount, name, oldPrice, price}) {
  return (
    <div className="product">
        < Heart/>
        <Discount discount={discount}/> 
        <img className="product-img" src="https://picsum.photos/480" alt="product" />
        <h2 className="product-name"> {name} </h2>
        <div className="product-details">
          <p className="product-oldPrice"> ${oldPrice} </p>
          <p className="product-price"> ${price} </p>
          <AddCartBtn />
        </div>
    </div>
  )
}

export default Product