import { ReactNode } from "react";
import Product from "./product.interface";

export default interface ShoppingCart {
  onClick?: any,
  children: ReactNode,
}