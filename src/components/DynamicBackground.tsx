import styled from 'styled-components'

const Div = styled.div`
  position: fixed;
  background-color: #546572ff;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: -1;`

export default function DynamicBackground() {
  return (
    <Div></Div>
  )
}
