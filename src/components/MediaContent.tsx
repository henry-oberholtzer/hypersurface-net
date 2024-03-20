import styled from "styled-components"
import MediaItem from "./MediaItem"

const MediaSection = styled.section`
box-sizing: border-box;
width: 700px;
height: 100%;
padding: 20px;
border: 1px solid white;
border-radius: 6px;`

export default function MediaContent() {
  return (
    <MediaSection>
      <MediaItem />
      <MediaItem />
  </MediaSection>
  )
}
