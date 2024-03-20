import Header from "./Header"
import Player from "./Player"
import styled from "styled-components"
import MediaBrowser from "./MediaBrowser"

const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;  
  width: 800px;
  padding: 0 50px 0 50px;`

export default function ContentContainer() {
  return (
    <Main>
      <Header />
      <Player />
      <MediaBrowser />
    </Main>
  )
}


