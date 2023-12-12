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

const Bar = styled.div<{width: number}>`
  background-color: #0F52BA;
  height: 100%;
  width: ${props => props.width}%;
  border-radius: 0.5rem;
`


export default function LoadingScreen() {
  const [progress, setProgress] = useState<number>(0)
  
  useEffect(() => {
    if(progress < 100) {
      setTimeout(() => setProgress(progress + 10), 500/10)
    }
  }, [progress])

  return (
    <LoadingContainer>
      <p>Loading</p>
      <LoadingBar>
        <Bar width={progress}/>
      </LoadingBar>
    </LoadingContainer>
  )
}