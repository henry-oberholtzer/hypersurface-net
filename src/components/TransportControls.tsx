import styled from "styled-components"

interface TransportButton {
  $size?: "small" | "large"
  $direction?: "left" | "right"
}

const StyledButton = styled.button<TransportButton>`
box-sizing: border-box;
width: ${props => props.$size == "small" ? "50px" : "110px"};
margin-right: ${props => props.$size == "small" && props.$direction == "left" ? "5px" : "0"};
margin-left: ${props => props.$size == "small" && props.$direction == "right" ? "5px" : "0"};
height:30px;
border: 1px solid #FFFFFF;
border-radius: 6px;
background-color: transparent;
background-image: radial-gradient(#FFFFFFCC, transparent);
background-position: ${props => 
  props.$size == "small" && props.$direction == "left" ? "left 105px":
  props.$size == "small" && props.$direction == "right" ? "right 105px" :  
"center"};
background-size: 210px 210px;
&:hover {
  cursor: pointer;
}`


export default function TransportControls() {
  return (
    <div style={{width: 220, height: 30}}>
      <StyledButton $size="small" $direction="left"/>
      <StyledButton />
      <StyledButton $size="small" $direction="right"/>
    </div>
  )
}
