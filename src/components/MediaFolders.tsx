import styled from "styled-components"

const MediaNav = styled.nav`
display: flex;
justify-content: space-between;
box-sizing: border-box;
width: 700px;
height: 60px;
overflow: clip;
`

const MediaUl = styled.a`
box-sizing: border-box;
display: flex;
justify-content: center;
text-align: center;
padding: 0;
margin: 0;
border: 1px solid #FFFFFF;
border-radius: 6px;
font-family: "Zen Dots";
text-transform: lowercase;
font-size: 24pt;
width: 220px;
height: 40px;
margin-bottom: 20px;
transition: height 200ms;
&:hover {
  cursor: pointer;
  height: 70px;
  border-radius: 6px 6px 0 0;
  border-bottom: 2px solid transparent;
}`

export default function MediaFolders() {
  return(
    <MediaNav>
            <MediaUl>DJ Mixes</MediaUl>
            <MediaUl>Tracks</MediaUl>
            <MediaUl>Contact</MediaUl>
    </MediaNav>
  )
}
