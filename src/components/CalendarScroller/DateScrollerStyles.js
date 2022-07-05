import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #f1f1f1;
`

export const ScrollGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    'Mo Tu We Th Fr Sa Su'
    'd1 d2 d3 d4 d5 d6 d7'
    'arLeft . month month month . arRight';
  background: transparent;
  // row-gap: 1rem;
`

export const WeekDayName = styled.h4`
  text-transform: uppercase;
  grid-area: ${(props) => props.gridArea};
  font-size: 0.5rem;
  color: ${(props) => props.theme.colors.primary1};
  text-align: center;
  margin-bottom: 0.5rem;
`

export const MonthDayNumber = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${(props) => (props.active ? 'red' : 'white')};
  color: ${(props) => (props.active ? 'white' : props.theme.colors.primary1)};
  grid-area: ${(props) => props.gridArea};
  align-self: center;
  justify-self: center;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`

export const Month = styled.h4`
  text-transform: capitalize;
  font-size: 0.8rem;
  grid-area: month;
  text-align: center;
`

export const LeftScroll = styled.button`
  color: red;
  display: flex;
  grid-area: arLeft;
  align-items: center;
  justify-content: center;
`

export const RightScroll = styled.button`
  color: red;
  display: flex;
  grid-area: arRight;
  align-items: center;
  justify-content: center;
`
