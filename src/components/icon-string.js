import React from "react"
import styled from "styled-components"
import "typeface-roboto"

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => (props.size / 14) + "px"};
`

const Space = styled.div`
  width: ${props => (props.size / 4) + "px"};
  height: ${props => props.size + "px"};
`

const Circle = styled.div`
  width: ${props => props.size + "px"};
  height: ${props => props.size + "px"};
  border-radius: ${props => (props.size / 2) + "px"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: ${props => (props.size * 0.6) + "px"};
  font-weight: 400;
  color: white;
  background: ${props => props.color || "black"};

`

export default function IconString( { string, colors, size }) {
  return (
    <Container size={size}>
      {string.split("").map((character, index) => {
        let key = string.substring(index)
        if (character === " ") {
          return <Space key={key} size={size} />
        } else {
          return (
            <Circle key={key} color={colors[index]} size={size}>
              {character}
            </Circle>
          )
        }
      })}
    </Container>
  )
}