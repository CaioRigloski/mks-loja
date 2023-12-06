import { Dispatch, SetStateAction } from "react";
import Product from "./product.interface";

export default interface CartContextType {
  cart: Product[],
  setCart: Dispatch<SetStateAction<Product[]>>
}