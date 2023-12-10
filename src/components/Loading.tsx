import styled, { keyframes } from "styled-components"

const slideTransition = keyframes`
  0% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 100% 0%;
  }
`

const Item = styled.div`
  animation: ${slideTransition} 1s ease alternate infinite;
  min-width: 14rem;
  max-width: 14rem;
  min-height: 18rem;
  max-height: 18rem;
  color: #2C2C2C;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  background: linear-gradient(90deg, gray, white, #373737);
  background-size: 200% 200%;
  @media (max-width: 1025px) {
    min-width: 15.7rem;
    max-width: 15.7rem;
    min-height: 20.5rem;
    max-height: 20.5rem;
  }
`

export default function Loading(props: any) {
    return (
      <Item/>
    )
}