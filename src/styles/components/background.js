import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.color || 'white'};
`