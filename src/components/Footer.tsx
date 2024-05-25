import styled from "styled-components"

const FooterStyle = styled.footer`
  display: grid;
  background-color: #EEE;
  color: #000000;
  justify-content: center;
  width: 100%;
  height: 2.25rem;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 400;
`

export default function Footer() {
    return (
      <FooterStyle>
          MKS sistemas © Todos os direitos reservados
      </FooterStyle>
    )
}