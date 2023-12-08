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
  && > div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      width: 60rem;
      height: 38rem;
      gap: 1.4rem;
      justify-content: center;
      align-items: start;
  }
`

export default function Home(props: any) {
  const { data, error, isLoading} = useQuery({queryKey: ['products'], queryFn: () => getProducts({page: 1})})

  const {cart, setCart}: CartContextType = useContext<CartContextType>(CartContext)
  
  const [showCart, setShowCart] = useState<boolean>(false)

  function verifyCount(data: Product): boolean | undefined {
    let itemExist = false
    cart.map((item: Product, i: number): void => {
      if(item.id === data.id) {
        const cartCopy = cart.slice()
        const toSet: any = cart.splice(i)
        toSet[0].count = toSet[0].count + 1

        setCart(cartCopy)
        itemExist = true
      } else {
        itemExist = false
      }
    })
    return itemExist
  }

  function addToCart(e: React.MouseEvent<HTMLDivElement, MouseEvent>, data: Product): void {
    if(!verifyCount(data)) {
      setCart((prevProps: any) => ([...prevProps, {
        id: data?.id,
        name: data?.name,
        description: data?.description,
        photo: data?.photo,
        price: data?.price,
        count: 1,
      }]))
    }
  }

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
            <div>
              {data?.products.map((product: any) => {
                return (
                  <Suspense key={product.id} fallback={<Loading/>}>
                    <ProductItem id={product.id} photo={product.photo} name={product.name} description={product.description} price={product.price} onClick={(e: any) => addToCart(e, product)}/>
                </Suspense>
              )
            })}
            </div>
          </Main>
          <Footer/>
      </Container>
  )
}