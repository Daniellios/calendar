import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: ;
`

export const DayTitle = styled.h2`
  color: red;
  text-transform: capitalize;
`

export const DeleteBtn = styled.button`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  color: red;
  background: transparent;
`
