import CartContextType from "@/interfaces/cartContext.interface"
import Product from "@/interfaces/product.interface"
import { createContext, useState } from "react"


const CartContextValue: CartContextType = {
  cart: [],
  setCart: () => {}
}

const CartContext = createContext<CartContextType>(CartContextValue)

function CartProvider({children}: any) {
  const [cart, setCart] = useState<Product[]>([])
  
  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext,  CartProvider}