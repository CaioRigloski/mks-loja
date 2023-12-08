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

    @media (max-width: 1025px) {
      height: 9.95rem;
      max-height: 9.95rem;
      max-width: 10rem;
    }
  }
  > .name-and-price {
    height: 2.75rem;
    max-width: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.75rem;
    gap: 0.25rem;
  }
  > .name-and-price > .name {
    max-width: 5rem;
    max-height: 2.40rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    
    @media (max-width: 1025px) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  > .name-and-price > .price {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 1.625rem;
    background-color: #373737;
    color: #FFF;
    font-size: 0.9375rem;
    font-weight: 700;
    line-height: 0.9375rem;
    border-radius: 0.32rem;
    padding-left: 1.45rem;
    padding-right: 1.45rem;
  }
  > .description {
    width: 12rem;
    height: 1.56rem;
    max-height: 1.56rem;
    font-size: 0.625rem;
    font-weight: 300;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    padding-bottom: 0.75rem;
    > p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: inherit;
      height: inherit;
      max-height: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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
    align-self: self-end;
  }
  .buy-text {
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.125rem;
  }

  @media (max-width: 1025px) {
    min-width: 15.7rem;
    max-width: 15.7rem;
    min-height: 20.5rem;
    max-height: 20.5rem;
  }
`

export default function ProductItem(props: Product) {
  return (
    <ProductBox>
        <div className="image">
          <img src={props.photo}></img>
        </div>
        <div className="name-and-price">
          <p className="name">{props.name}</p>
          <div className="price">
            <p>R${props.price}</p>
          </div>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
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