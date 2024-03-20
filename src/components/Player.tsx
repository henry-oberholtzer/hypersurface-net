import styled from "styled-components"
import TransportControls from "./TransportControls"

const PlayerUpperDiv = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
justify-content: space-between;`

const PlayerSection = styled.section`
width: 700px;
height: min-content;
margin-bottom: 20px;`

// const StyledLabel - styled.label`
// `

const ScrubBar = styled.div`
width: 700px;
height: 10px;
background-color: #000000;
border-radius: 2px;`

const TrackTitle = styled.label`
width: 260px;
text-overflow: clip;`


export default function Player() {
  return (
    <PlayerSection>
      <PlayerUpperDiv>
        <TransportControls />
          <TrackTitle>Dope Bongos & Deep Dub Chords</TrackTitle>
          <input name="volume" type="range" style={{width: 50}} />
          <p>1:00:00 / 1:00:00</p>
      </PlayerUpperDiv>
        <ScrubBar />
    </PlayerSection>
  )
}

