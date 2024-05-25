import styled from "styled-components"

const LogoBox = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  && > div {
    height: fit-content;
    display: flex;
    align-items: center;
  }
`

const Mks = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  padding-left: 2.5rem;
  margin: 0;

  @media (max-width: 1025px) {
    font-size: 2rem;
  }
`

const Sistemas = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  padding-left: 0.7rem;
  position: relative;
  top: 0.2rem;
  margin: 0;

  @media (max-width: 1025px) {
    font-size: 1rem;
  }
`

export default function Logo() {
    return (
        <LogoBox>
            <div>
            <Mks>MKS</Mks>
            <Sistemas>Sistemas</Sistemas>
            </div>
        </LogoBox>
    )
}