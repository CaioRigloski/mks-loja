import { useContext } from "react"
import Product from "@/interfaces/product.interface"
import styled from "styled-components"
import ShoppingCart from "@/interfaces/cart.interface"
import { CartContext } from "../contexts/CartContext"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30.4rem;
  height: 100vh;
  position: absolute;
  background-color: #0F52BA;
  right: 0;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  > .cart-header {
    display: grid;
    width: 100%;
    grid-auto-columns: 1fr 1fr;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    justify-items: end;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 0.9375rem;
  }
  > .cart-header > .cart-text {
    width: 11.25rem;
    font-size: 1.6875rem;
    font-weight: 700;
    line-height: normal;

    @media (max-width: 1025px) {
      padding-left: 2rem;
    }
  }
  .close-cart {
    cursor: pointer;
    padding-right: 1.4rem;
  }
  > .cart-products {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 1025px) {
      padding-top: 0.5rem;
    }
  }
  > .cart-total {
    display: grid;
    grid-auto-columns: 1fr 1fr;
    grid-auto-flow: column;
    justify-items: center;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 0.9375rem;
    flex: 1;
    align-items: end;
  }
  > .buy {
    height: 6.0625rem;
    background-color: #000;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 0.9375rem;
    color: #FFF;
    cursor: pointer;
    @media (max-width: 1025px) {
      display: grid;
      align-content: center;
      height: 4.10rem;
    }
  }

  @media (max-width: 1025px) {
    width: 20.625rem;
    .close-cart {
      width: 2.87013rem;
      height: 2.87013rem;
      > text {
        fill: #0F52BA;
        font-size: 2.2rem;
        transform: translateY(2px) translateX(-3px);
      }
    }
  }
`

export default function Cart(props: ShoppingCart) {
  const {cart, setCart} = useContext(CartContext)

  // return total value of selected products
  function cartTotal(): number {
    let total = 0
    cart.map((item: Product, i: number) => {
      let itemTotal = 0
      let itemCount = item.count || 0

      itemTotal = item.price * itemCount
      total = total + itemTotal
    })
    return total
  }


  return (
    <Container>
      <div className="cart-header">
        <div className="cart-text">
          <p>Carrinho<br/>de compras</p>
        </div>
        <svg className="close-cart" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" onClick={props.onClick}>
          <circle cx="19" cy="19" r="19" fill="black"></circle>
          <text x="10" y="29" fill="#fff">X</text>
        </svg>
      </div>
      <div className="cart-products">
        {props.children}
      </div>
      <div className="cart-total">
        <p>Total:</p>
        <p>R${cartTotal()}</p>
      </div>
      <button className="buy">
        <p>Finalizar Compra</p>
      </button>
    </Container>
  )
}