import styled from "styled-components"

interface H1Props {
  $fontFamily?: string,
  $color?: string,
  $fontSize?: string,
}

const H1 = styled.h1<H1Props>`
font-family: ${props => props.$fontFamily || "Zen Dots"};
color: ${props => props.$color || "#FFFFFF"};
font-size: ${props => props.$fontSize || "48pt"};
text-transform: lowercase;
margin-top: 20px;
margin-bottom: 20px;
`

export default function Header() {
  return (
    <header>
      <H1>Hypersurface</H1>
    </header>
  )
}
