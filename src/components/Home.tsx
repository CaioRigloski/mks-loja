import { Suspense, useContext, useState,Dispatch, SetStateAction } from "react"
import { useQuery } from '@tanstack/react-query'
import styled from "styled-components"
import Footer from '@/components/Footer'
import ProductItem from '@/components/ProductItem'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import getProducts from '@/api/getProducts'
import Cart from "./Cart"
import CartProduct from "./CartProduct"
import Product from "@/interfaces/product.interface"
import { CartContext, CartProvider } from "./CartContext"
import CartContextType from "@/interfaces/cartContext.interface"
import ProductDisplay from "./ProductDisplay"


const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-auto-rows: max-content;
  grid-template-rows: auto 1fr auto;
  align-content: space-between;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  color: #FFF;
  font-style: normal;
  box-sizing: content-box;
  padding: 0;
  margin: 0;
  background-color: #F9F9F9;
`

const Main = styled.main`
  display: flex;
  min-width: 100vw;
  justify-content: center;
  align-items: center;

  @media (max-width: 1025px) {
    flex: 1;
    overflow-y: scroll;
    align-items: flex-start;
  }
`

export default function Home(props: any) {  
  const [showCart, setShowCart] = useState<boolean>(false)

  function showCartContainer() {
    setShowCart(true)
  }

  function closeCartContainer() {
    setShowCart(false)
  }

  return (
      <Container>
        <Header onClick={showCartContainer}/>
          {showCart ?
            <Cart onClick={closeCartContainer}>
              <CartProduct/>
            </Cart> : false}
          <Main>
            <ProductDisplay/>
          </Main>
          <Footer/>
      </Container>
  )
}