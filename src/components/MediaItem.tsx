import styled from "styled-components"

const Img = styled.img`
  width: 180px;
  height: 40px;
  border-radius: 2px;
  object-fit: cover;`

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #FFFFFF;`

const FlexDiv = styled.div`
display: flex;  
width: 100%;`

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 40px;
  `

const MediaTitle = styled.h2`
  margin: 0;
  margin-left: 40px;
  font-size: 16pt;
  font-weight: 500;`

const MediaSection = styled.section`
  margin-bottom: 20px;
`

export default function MediaItem() {
  return (
    <MediaSection>
      <FlexDiv>
        <Img src="./album_art800.jpg"/>
        <TitleDiv>
          <MediaTitle>Vicious Circle Recordings Mix</MediaTitle>
          <HorizontalLine />
        </TitleDiv>
      </FlexDiv>
    <HorizontalLine />
  </MediaSection>
  )
}
