import { Dispatch, SetStateAction } from "react";
import Product from "./product.interface";

export default interface CartContext {
  cart: Product[],
  setCart: Dispatch<SetStateAction<Product[]>>
}