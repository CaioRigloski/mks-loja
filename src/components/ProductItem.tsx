import styled from "styled-components"
import { useQuery } from '@tanstack/react-query'
import Product from "@/interfaces/product.interface"
import { useState } from "react"
import ShoppingCart from "./Cart"


const ProductCOntainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  flex-wrap: wrap;
  width: 60rem;
  height: 38rem;
  gap: 1.4rem;
  justify-content: center;
  align-items: flex-end;
}
`

const ProductBox = styled.div`
  display: grid;
  grid-auto-rows: auto;
  min-width: 14rem;
  max-width: 14rem;
  min-height: 18rem;
  max-height: 18rem;
  background-color: #FFF;
  color: #2C2C2C;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  > .image {
    height: 8.65rem;
    max-height: 8.65rem;
    justify-self: center;
    padding: 1.1rem;
    > img {
      object-fit: contain;
      height: inherit;
      max-width: inherit;
      min-height: 100%;
    }
  }
  > span {
    max-width: inherit;
    display: inline-flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-right: 0.75rem;
    gap: 0.25rem;
  }
  > span > .name {
    max-width: 7.75rem;
    height: 1.20rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
  > span > .price {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 1.7rem;
    background-color: #373737;
    color: #FFF;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 0.9375rem;
    border-radius: 0.32rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  > .description {
    width: 12rem;
    max-height: 1.6rem;
    font-size: 0.625rem;
    font-weight: 300;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-bottom: 0.75rem;
  }
  > .buy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 2rem;
    background-color: #0F52BA;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    cursor: pointer;
  }
  .buy-text {
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
  }
`

export default function ProductItem(props: Product) {
  return (
    <ProductBox>
        <div className="image">
          <img src={props.photo}></img>
        </div>
        <span>
          <p className="name">{props.name}</p>
          <div className="price">
            <p>R${props.price}</p>
          </div>
        </span>
          <p className="description">{props.description}</p>
        <div className="buy" onClick={props.onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path opacity="0.737212" fillRule="evenodd" clipRule="evenodd" d="M3 1L1 3.7V13.15C1 13.8956 1.59695 14.5 2.33333 14.5H11.6667C12.403 14.5 13 13.8956 13 13.15V3.7L11 1H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.737212" d="M1 4.375H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path opacity="0.737212" d="M10 7C10 8.24264 8.82475 9.25 7.375 9.25C5.92525 9.25 4.75 8.24264 4.75 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="buy-text">COMPRAR</p>
        </div>
    </ProductBox>
    )
}