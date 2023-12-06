import Product from "@/interfaces/product.interface"
import { Dispatch, SetStateAction, useContext, useEffect } from "react"
import styled from "styled-components"
import { CartContext, CartProvider } from "./CartContext"

const Item = styled.div`
  display: inline-flex;
  width: 23.6875rem;
  height: 5.9375rem;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #FFF;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  color: #2C2C2C;
  > .product-image > img {
    max-width: 100%;
  }
  > .item-count {
    display: inline-flex;
    > div {
      width: 20px;
      height: 20px;
      background-color: black;
      color: white;
    }
  }
`

export default function ShoppingCartProduct() {
  const {cart, setCart} = useContext(CartContext)

  function removeFromCart(e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: Product) {
    const cartCopy = [...cart]
    cartCopy.map((item: Product, i: number) => {
      if(item.id === data.id) {
        let count = item.count || 0
        if(count > 1) {
          item.count = count - 1
        } else {
          cartCopy.splice(i, 1)
        }
      }
    })
    setCart(cartCopy)
  }

  function addToCart(e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: Product) {
    const cartCopy = [...cart]
    cartCopy.map((item: Product, i: number) => {
      if(item.id === data.id) {
        let count = item.count || 0
        item.count = count + 1
      }
    })
    setCart(cartCopy)
  }

  return (
    cart.map((item: Product) => {
      return (
        <Item key={item.id}>
          <div className="product-image">
            <img src={item.photo}/>
          </div>
          <p>{item.name}</p>
          <div className="item-count">
            <div onClick={(e) => removeFromCart(e, item)}>-</div>
            <div>{item.count}</div>
            <div onClick={(e) => addToCart(e, item)}>+</div>
          </div>
          <div>
            <p>R${item.price}</p>
          </div>
        </Item>
      )
    })
  )
}