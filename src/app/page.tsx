'use client'

import { CartProvider } from '@/contexts/CartContext'
import Home from '@/components/Home'
import LoadingScreen from '@/components/LoadingScreen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const queryClient = new QueryClient()


export default function App() {
  const [loading, setLoading] = useState<boolean>(true)

  // Delay for demo loading screen
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
