import { motion } from "framer-motion"
import styled from "styled-components"

const Item = styled(motion.div)`
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

export default function Loading() {
    return (
      <Item
        initial={{ backgroundPosition: "0% 100%"}}
        animate={{ backgroundPosition:  "100% 0%"}}
        transition={{ duration: 1 }}
      />
    )
}