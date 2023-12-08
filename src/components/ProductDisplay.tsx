import { useContext, Suspense } from "react"
import { useQuery } from "@tanstack/react-query"
import CartContextType from "@/interfaces/cartContext.interface"
import { CartContext } from "./CartContext"
import Product from "@/interfaces/product.interface"
import Loading from "./Loading"
import ProductItem from "./ProductItem"
import getProducts from "@/api/getProducts"
import styled from "styled-components"

const Display = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 60rem;
  height: 38rem;
  gap: 1.4rem;
  justify-content: center;
  align-items: start;

  @media (max-width: 1025px) {
    width: unset;
    height: fit-content;
    grid-template-rows: none;
    grid-template-columns: 1fr;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export default function ProductDisplay() {
  const { data, error, isLoading} = useQuery({queryKey: ['products'], queryFn: () => getProducts({page: 1})})
  const {cart, setCart}: CartContextType = useContext<CartContextType>(CartContext)

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

  return (
    <Display>
      {data?.products.map((product: any) => {
        return (
          <Suspense key={product.id} fallback={<Loading/>}>
            <ProductItem id={product.id} photo={product.photo} name={product.name} description={product.description} price={product.price} onClick={(e: any) => addToCart(e, product)}/>
          </Suspense>
          )
        })
      }
    </Display>
  )
}