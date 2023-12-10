'use client'

import { CartProvider } from '@/components/CartContext'
import Home from '@/components/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Home/>
      </CartProvider>
    </QueryClientProvider>
  )
}
