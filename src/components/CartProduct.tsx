import Product from "@/interfaces/product.interface"
import { useContext } from "react"
import styled from "styled-components"
import { CartContext } from "./CartContext"


const Item = styled.div`
  display: inline-flex;
  width: 23.6875rem;
  height: 5.9375rem;
  min-height: 5.9375rem;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #FFF;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  color: #2C2C2C;
  > .item-image {
    width: 3.125rem;
    grid-area: a;

    @media (max-width: 1025px) {
      width: 5rem;
      height: 6rem;
      padding-top: 1.4rem;
    }
  }
  > .item-image > img {
    max-width: 100%;
  }
  > .item-name {
    width: 7.06rem;
    max-width: 7.06rem;
    grid-area: b;
    
    @media (max-width: 1025px) {
      width: 13.18rem;
      max-width: 13.18rem;
      height: 1.34031rem;
      margin: 0.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

    }
  }
  > .item-count {
    grid-area: c;
  }
  > .item-count > p {
    max-width: inherit;
    font-size: 0.3125rem;
    font-weight: 400;
    margin: 0;

    @media (max-width: 1025px) {
      display: none;
    }
  }
  > .item-count > div {
    display: inline-flex;
    text-align: center;
    align-items: center;
    border-radius: 0.25rem;
    border: 0.3px solid #BFBFBF;
    width: 3.125rem;
    height: 1.2rem;
    background-color: #fff;
    > div {
      flex: 1;
      font-size: 0.5rem;

      @media (max-width: 1025px) {
        font-size: 1.25rem;
      }
    }
    > div:not(:nth-of-type(2)) {
      cursor: pointer;
    }
    > svg {
      align-self: center;
    }

    @media (max-width: 1025px) {
      width: 6.0855rem;
      height: 2.15619rem;
    }
  }
  > .item-price {
    color: #000;
    font-weight: 700;
    font-style: normal;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    width: 3.875rem;
    grid-area: d;
    > p {
      margin: 0;
    }
    @media (max-width: 1025px) {
      display: grid;
      align-items: center;
      justify-items: center;
      width: 5.25rem;
      height: 2.17544rem;
      font-size: 0.9375rem;
      border-radius: 0.3125rem;
      background: #373737;
      color: #fff;
    }
  }
  > .item-remove {
    position: relative;
    top: -45px;
    left: 15px;
    cursor: pointer;
  }

  @media (max-width: 1025px) {
    display: grid;
    grid-template-areas:
    "a a"
    "b b"
    "c d"
    ;
    justify-items: center;
    width: 15.625rem;
    height: 13.75rem;
    min-height: 13.75rem;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    .item-remove {
      width: 1.3125rem;
      height: 2.5755rem;
      top: -180px;
      left: 160px;
    }
    circle {
      display: none;
    }
    text {
      fill: #000;
      font-size: 1.8rem;
      transform: translateX(-5px) translateY(7px);
    }
  }
`

export default function ShoppingCartProduct() {
  const {cart, setCart} = useContext(CartContext)

  function removeOneFromCart(e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: Product) {
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

  function removeFromCart(e: React.MouseEvent<SVGSVGElement, MouseEvent>, data: Product) {
    const cartCopy = [...cart]
    cartCopy.map((item: Product, i: number) => {
      if(item.id === data.id) {
        cartCopy.splice(i, 1)
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
          <div className="item-image">
            <img src={item.photo} alt="Item photo"/>
          </div>
          <p className="item-name">{item.name}</p>
          <div className="item-count">
            <p>Qtd:</p>
            <div>
              <div onClick={(e) => removeOneFromCart(e, item)}>-</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
                <path d="M1 0V11.5" stroke="#BFBFBF" strokeWidth="0.2"/>
              </svg>
              <div>{item.count}</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="2" height="12" viewBox="0 0 2 12" fill="none">
                <path d="M1 0V11.5" stroke="#BFBFBF" strokeWidth="0.2"/>
              </svg>
              <div onClick={(e) => addToCart(e, item)}>+</div>
            </div>
          </div>
          <div className="item-price">
            <p>R${item.price}</p>
          </div>
          <svg  className="item-remove" onClick={(e) => removeFromCart(e, item)} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="9" fill="black"/>
            <text x="4" y="14" fill="#fff">X</text>
          </svg>
        </Item>
      )
    })
  )
}