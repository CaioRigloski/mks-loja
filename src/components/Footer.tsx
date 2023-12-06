import styled from "styled-components"

const FooterStyle = styled.footer`
  display: grid;
  background-color: #EEE;
  color: #000000;
  justify-content: center;
  width: 100%;
`

export default function Footer(props: any) {
    return (
      <FooterStyle>
          MKS sistemas © Todos os direitos reservados
      </FooterStyle>
    )
}