'use client'

import { CartProvider } from '@/components/CartContext'
import Home from '@/components/Home'
import LoadingScreen from '@/components/LoadingScreen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const queryClient = new QueryClient()


export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => setLoading(false), 500)
  }, [])
  if (loading) {
      return <LoadingScreen/>
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Home/>
      </CartProvider>
    </QueryClientProvider>
  )
}
