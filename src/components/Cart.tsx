import { useState, useEffect } from "react"
import Product from "@/interfaces/product.interface"
import styled from "styled-components"
import ShoppingCart from "@/interfaces/shoppingCart.interface"

const Container = styled.div`
  width: 30.4rem;
  height: 100vh;
  position: absolute;
  background-color: #0F52BA;
  right: 0;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  > .cart-header {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 0.9375rem;
  }
  > .cart-text {
    width: 11.25rem;
    height: 3.5rem;
    font-size: 1.6875rem;
    font-weight: 700;
    line-height: normal;
  }
  > .cart-products > .item > 
  .close {
    cursor: pointer;
  }
`

export default function Cart(props: ShoppingCart) {
  return (
    <Container>
      <div className="cart-header">
        <p className="cart-text">Carrinho de Compras</p>
        <svg className="close" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" onClick={props.onClick}>
          <circle cx="19" cy="19" r="19" fill="black"></circle>
          <text x="8" y="28" fill="#fff">X</text>
        </svg>
      </div>
      <div className="cart-products">
        {props.children}
      </div>
    </Container>
  )
}