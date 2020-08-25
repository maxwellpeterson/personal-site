import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.08em;
`

const Space = styled.div`
  width: 0.25em;
  height: 1em;
`

const Circle = styled.div`
  width: 1em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5em;
  background: ${props => props.color || "black"};
`
const Letter = styled.span`
  font-family: "Roboto";
  font-size: 0.6em;
  font-weight: 400;
  color: white;
`

// Icon size is controlled by font size of parent element

export default function IconString( { string, colors }) {
  return (
    <Container>
      {string.split("").map((character, index) => {
        let key = string.substring(index)
        if (character === " ") {
          return <Space key={key} />
        } else {
          return (
            <Circle key={key} color={colors[index]}>
              <Letter>
                {character}
              </Letter>
            </Circle>
          )
        }
      })}
    </Container>
  )
}