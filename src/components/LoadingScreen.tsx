import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const slideToRight = keyframes`
  0% {
    background-position: 0% 150%;
  }
  100% {
    background-position: 100% 0%;
  }
`

const LoadingContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  align-items: end;
  justify-items: center;
  background-color: black;
  height: 100vh;
  > p {
    color: #fff;
  }
`

const LoadingBar = styled.div`
  width: 10rem;
  height: 0.5rem;
  align-self: start;
  border-radius: 0.5rem;
  animation: ${slideToRight} 500ms ease;
  background-color: white;
  display: flex;
  align-items: center;
`

const Bar = styled(motion.div)`
  background-color: #0F52BA;
  height: 100%;
  border-radius: 0.5rem;
`


export default function LoadingScreen() {
  const [progress, setProgress] = useState<number>(0)
  
  // Sets the progress by 10 steps with 50ms delay
  useEffect(() => {
    if(progress < 100) {
      setTimeout(() => setProgress(progress + 10), 500/10)
    }
  }, [progress])

  return (
    <LoadingContainer>
      <p>Loading</p>
      <LoadingBar>
        <Bar 
          animate={{ width: progress + "%" }}
        />
      </LoadingBar>
    </LoadingContainer>
  )
}