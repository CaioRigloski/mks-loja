import styled from "styled-components"

const LogoBox = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  && > div {
    height: fit-content;
    display: flex;
    align-items: baseline;
  }
`

const Mks = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  padding-left: 2.5rem;
  margin: 0;
`

const Sistemas = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  padding-left: 1.25rem;
`

export default function Logo(props: any) {
    return (
        <LogoBox>
            <div>
            <Mks>MKS</Mks>
            <Sistemas>Sistemas</Sistemas>
            </div>
        </LogoBox>
    )
}